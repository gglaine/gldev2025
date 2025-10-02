<template>
  <section class="space-y-5">
    <div class="group relative rounded-2xl p-[2px]">
      <div class="relative rounded-[14px] overflow-hidden bg-slate-800 border border-slate-900">

        <!-- PLACEHOLDER (no remote site fetch) -->
        <div v-if="!showPreview" class="relative">
          <!-- aspect shim (keeps layout stable) -->
          <div :style="{ paddingTop: aspectPadding }"></div>

          <!-- AMBIENT LAYERS (behind everything, local-only) -->
          <div class="ambient-img" :style="ambientImageStyle" aria-hidden="true"></div>
          <div class="ambient-grad" :style="ambientGradStyle" aria-hidden="true"></div>

          <!-- small, centered snapshot card (CONTAIN, never full-bleed) -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="relative rounded-xl shadow-xl ring-1 ring-black/5 overflow-hidden flex items-center justify-center will-change-transform"
              :style="cardStyle"
            >
              <!-- Local-only picture -->
              <picture v-if="hasAnyLocal">
                <source v-if="avifSet" :srcset="avifSet" type="image/avif" sizes="(min-width:1024px) 960px, 100vw" />
                <source v-if="webpSet" :srcset="webpSet" type="image/webp" sizes="(min-width:1024px) 960px, 100vw" />
                <img
                  :src="fallbackSrc"
                  :srcset="rasterSet || undefined"
                  sizes="(min-width:1024px) 960px, 100vw"
                  :alt="`${project.title} – aperçu ${device}`"
                  class="snap-img"
                  loading="lazy"
                  decoding="async"
                  @error="onCardImageError"
                />
              </picture>

              <!-- Skeleton if no local image or it failed -->
              <div v-else class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />

              <div class="absolute inset-0 pointer-events-none" :style="bezelStyle"></div>
            </div>
          </div>

          <!-- device chips -->
          <div class="absolute left-3 top-3 flex gap-2">
            <button
              v-for="d in deviceOptions"
              :key="d.key"
              class="px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition"
              :class="d.key===device
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white'"
              @click.stop="setDevice(d.key)"
            >
              <span class="inline-block align-middle" v-html="d.icon" />
              <span class="ml-1">{{ d.label }}</span>
            </button>
          </div>

          <!-- title -->
          <div class="absolute left-3 bottom-3 text-white drop-shadow">
            <div class="text-sm font-semibold">{{ project.title }}</div>
            <div class="text-xs opacity-90">{{ project.client }} · {{ project.year }}</div>
          </div>

          <!-- CTA -->
          <div class="absolute inset-0 bottom-0 grid place-items-center">
            <button
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
              @click="enablePreview"
              :aria-label="`Charger la prévisualisation de ${project.title}`"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Voir le site
            </button>
          </div>
        </div>

        <!-- LIVE PREVIEW (remounts on device change) -->
        <div v-else class="relative p-4">
          <ProjectLivePreview
            v-bind="plpProps"
            :key="`${project.slug || project.title}:${device}`"
            :devices="selectedDevices"
            :aspect="computedAspect"
            :lazy="true"
            :openOnClick="true"
            @ready="onReady"
            @load="onReady"
          />

          <div v-if="loading" class="absolute inset-0 grid place-items-center bg-white/55 backdrop-blur-[2px]">
            <div class="flex items-center gap-2 text-slate-700 text-sm">
              <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"/>
              </svg>
              Initialisation…
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action row -->
    <div class="flex flex-wrap items-center gap-4 text-sm">
      <RouterLink
        v-if="project.slug"
        :to="`/projets/${project.slug}`"
        class="inline-flex items-center gap-1 font-medium text-slate-800 hover:underline"
      >
        Lire l’étude de cas <span aria-hidden>→</span>
      </RouterLink>
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
      >
        Site live <span aria-hidden>↗</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, type CSSProperties } from 'vue'
import ProjectLivePreview from './ProjectLivePreview.vue'

/* ---------- Types ---------- */
type Metric = { label: string; value: string }
type Link = { label: string; href: string; external?: boolean }
type PLPProps = {
  title: string
  url: string
  year?: string | number
  description?: string
  summary?: string
  stack?: string[]
  services?: string[]
  metrics?: Metric[]
  badges?: string[]
  links?: Link[]
}
type Device = 'desktop' | 'tablet' | 'mobile'
type Project = Record<string, any>

/* ---------- Props ---------- */
const props = defineProps<{ project: Project }>()

/* ---------- Live preview props (typed) ---------- */
const plpProps = computed<PLPProps>(() => ({
  title: String(props.project.title),
  url: String(props.project.url || ''),
  year: props.project.year,
  description: props.project.description ?? '',
  summary: props.project.summary ?? '',
  stack: props.project.stack ?? [],
  services: props.project.services ?? [],
  metrics: props.project.metrics ?? [],
  badges: props.project.badges ?? [],
  links: props.project.links ?? []
}))

/* ---------- Device toggle ---------- */
const device = ref<Device>('desktop')
const deviceOptions: { key: Device; label: string; icon: string }[] = [
  { key: 'desktop', label: 'Desktop', icon: '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor"/></svg>' },
  { key: 'mobile',  label: 'Mobile',  icon: '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" fill="currentColor"/></svg>' }
]
function setDevice(k: Device){ device.value = k }

/* ---------- Local-only images (now supports `poster`) ---------- */
const hasLocalImage = computed(() =>
  Boolean(
    props.project?.image ||
    props.project?.poster ||               // 👈 NEW
    props.project?.srcsetAvif ||
    props.project?.srcsetWebp ||
    props.project?.srcsetJpg ||
    props.project?.posterSrcset           // 👈 NEW (string | array | record)
  )
)
const hasAmbientImage = computed(() => Boolean(props.project?.ambientImage))

function toSrcset(input?: string | string[] | Record<number, string>) {
  if (!input) return ''
  if (typeof input === 'string') return input
  if (Array.isArray(input)) return input.join(', ')
  return Object.entries(input).map(([w, url]) => `${url} ${w}w`).join(', ')
}

const avifSet   = computed(() => toSrcset(props.project?.srcsetAvif))
const webpSet   = computed(() => toSrcset(props.project?.srcsetWebp))
const jpgSet    = computed(() => toSrcset(props.project?.srcsetJpg))
const rasterSet = computed(() => toSrcset(props.project?.posterSrcset || props.project?.srcsetJpg)) // jpg/webp as <img> srcset

function pickLargest(rec?: Record<number,string>) {
  if (!rec) return ''
  const widths = Object.keys(rec).map(Number).filter(n => !Number.isNaN(n))
  if (!widths.length) return ''
  const maxw = Math.max(...widths)
  return rec[maxw] || ''
}

const fallbackSrc = computed(() =>
  // Prefer explicit srcset fallbacks, then single file
  pickLargest(props.project?.srcsetAvif) ||
  pickLargest(props.project?.srcsetWebp) ||
  pickLargest(props.project?.srcsetJpg)  ||
  String(props.project?.image || props.project?.poster || '')   // 👈 poster supported
)

/* If the chosen local image fails, hide picture & show skeleton */
const imageFailed = ref(false)
const hasAnyLocal = computed(() => Boolean(fallbackSrc.value) && !imageFailed.value)

/* Ambient: local only (ambientImage -> fallbackSrc -> none) */
const ambientURL = computed(() => {
  if (hasAmbientImage.value) return String(props.project.ambientImage)
  if (hasLocalImage.value)   return fallbackSrc.value
  return ''
})

const ambientImageStyle = computed<CSSProperties>(() => ({
  backgroundImage: ambientURL.value ? `url('${ambientURL.value}')` : 'none'
}))

/* ---------- Palette sampling from ambient ---------- */
const ambientPrimary = ref('#0b1220')
const ambientAccent  = ref('#1c2a3a')

watch(ambientURL, async (src) => {
  if (!src) return
  try {
    const img = await loadImageForPalette(src)
    const { primary, accent } = extractPalette(img)
    ambientPrimary.value = primary
    ambientAccent.value  = accent
  } catch {
    // local files rarely fail; keep fallbacks
  }
}, { immediate: true })

function loadImageForPalette(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const i = new Image()
    i.onload = () => resolve(i)
    i.onerror = reject
    // cache-busting keeps palette in sync while iterating
    i.src = src + (src.includes('?') ? '&' : '?') + 'cb=' + Date.now()
  })
}

function extractPalette(img: HTMLImageElement) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!
  const W = canvas.width = 64
  const H = canvas.height = 64
  ctx.drawImage(img, 0, 0, W, H)

  let data: Uint8ClampedArray
  try { data = ctx.getImageData(0, 0, W, H).data } catch (e) { throw e }

  let rSum=0, gSum=0, bSum=0, n=0
  let maxSat = 0, accR=30, accG=40, accB=50

  for (let i=0; i<data.length; i+=4) {
    const r=data[i], g=data[i+1], b=data[i+2], a=data[i+3]
    if (a < 200) continue
    const mx = Math.max(r,g,b), mn = Math.min(r,g,b)
    const l  = (mx+mn)/510
    if (l < 0.06 || l > 0.94) continue
    rSum += r; gSum += g; bSum += b; n++

    const s = mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2*l - 1) + 1e-6)
    if (s > maxSat) { maxSat = s; accR=r; accG=g; accB=b }
  }

  const avgR = n ? Math.round(rSum/n) : 20
  const avgG = n ? Math.round(gSum/n) : 28
  const avgB = n ? Math.round(bSum/n) : 34

  const [pR,pG,pB] = tweak(avgR, avgG, avgB, { sat: 1.15, dim: 0.94 })
  const [aR,aG,aB] = tweak(accR, accG, accB, { sat: 1.25, dim: 0.98 })

  const primary = rgbToHex(pR, pG, pB)
  const accent  = rgbToHex(aR, aG, aB)
  return { primary, accent }
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('')
}

function tweak(r: number, g: number, b: number, o: { sat: number; dim: number }): [number, number, number] {
  const toHsl = (r:number,g:number,b:number)=>{
    r/=255; g/=255; b/=255
    const mx=Math.max(r,g,b), mn=Math.min(r,g,b), d=mx-mn
    let h=0
    if (d) {
      if (mx===r) h=((g-b)/d)%6
      else if (mx===g) h=(b-r)/d+2
      else h=(r-g)/d+4
      h*=60; if (h<0) h+=360
    }
    const l=(mx+mn)/2
    const s=d===0?0:d/(1-Math.abs(2*l-1))
    return {h,s,l}
  }
  const fromHsl = (h:number,s:number,l:number)=>{
    const c=(1-Math.abs(2*l-1))*s
    const x=c*(1-Math.abs((h/60)%2-1))
    const m=l-c/2
    let [r1,g1,b1]=[0,0,0]
    if (0<=h && h<60) [r1,g1,b1]=[c,x,0]
    else if (60<=h && h<120) [r1,g1,b1]=[x,c,0]
    else if (120<=h && h<180) [r1,g1,b1]=[0,c,x]
    else if (180<=h && h<240) [r1,g1,b1]=[0,x,c]
    else if (240<=h && h<300) [r1,g1,b1]=[x,0,c]
    else [r1,g1,b1]=[c,0,x]
    return [
      Math.round((r1+m)*255),
      Math.round((g1+m)*255),
      Math.round((b1+m)*255)
    ] as [number, number, number]
  }
  const {h,s,l}=toHsl(r,g,b)
  const s2=Math.max(0, Math.min(1, s*o.sat))
  const l2=Math.max(0, Math.min(1, l*o.dim))
  return fromHsl(h,s2,l2)
}

const ambientGradStyle = computed(() => ({
  '--c1': ambientPrimary.value,
  '--c2': ambientAccent.value
}))

/* ---------- On-demand flow (no session memory) ---------- */
const showPreview = ref(false)
const loading = ref(false)
async function enablePreview(){
  showPreview.value = true
  loading.value = true
  await nextTick()
  setTimeout(() => { loading.value = false }, 900)
}
function onReady(){ loading.value = false }

/* ---------- Preview props ---------- */
const selectedDevices = computed<Device[]>(() =>
  device.value === 'mobile' ? ['mobile'] : ['desktop']
)
const computedAspect = computed(() =>
  device.value === 'mobile' ? '9/19.5' : (props.project.aspect || '16/10')
)

/* ---------- Layout helpers ---------- */
const aspectPadding = computed(() => {
  const [w, h] = String(computedAspect.value).split('/').map(Number)
  const ratio = (!isNaN(w) && !isNaN(h) && w > 0) ? (h / w) * 100 : 62.5
  return `${ratio}%`
})

const CARD_SCALE = 0.58
const cardStyle = computed<CSSProperties>(() => ({
  width: `${CARD_SCALE * 100}%`,
  aspectRatio: String(computedAspect.value)
}))

const bezelStyle: CSSProperties = {
  boxShadow:
    'inset 0 0 0 1px rgba(15,23,42,.08),' +
    'inset 0 0 60px rgba(0,0,0,.06)'
}

/* ---------- Image error handling ---------- */
function onCardImageError() {
  imageFailed.value = true
}
</script>

<style scoped>
.snap-img{
  width: 100%;
  height: 100%;
  object-fit: contain !important;
  object-position: center;
  display: block;
}
.ambient-img{
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  filter: blur(36px) saturate(1.35) contrast(1.5) brightness(2.02);
  transform: scale(2.12);
  pointer-events: none;
  z-index: 0;
}
.ambient-grad{
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(110% 80% at 20% 20%, var(--c1) 0%, transparent 55%),
    radial-gradient(110% 90% at 80% 85%, var(--c2) 0%, transparent 50%),
    linear-gradient(180deg, color-mix(in oklab, var(--c1) 15%, transparent), transparent);
  opacity: .35;
}
</style>
