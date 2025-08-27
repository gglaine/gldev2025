<template>
  <div class="w-full max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
    <div class="grid grid-cols-12 gap-6 lg:gap-10 items-start">
      <!-- Text column -->
      <div class="col-span-12 md:col-span-5 order-1 md:order-2 space-y-5 text-left">
        <header class="space-y-2">
          <h3 class="text-2xl md:text-3xl font-bold text-slate-700">
            {{ title }} <span class="text-sm text-gray-400 font-normal align-middle">({{ year }})</span>
          </h3>
          <p class="text-[15px] md:text-base text-gray-600 leading-relaxed whitespace-pre-line max-w-prose">
            {{ description }}
          </p>
                 <p class="text-[15px] md:text-base text-gray-600 leading-relaxed whitespace-pre-line max-w-prose">
            {{ summary }}
          </p>
          
          <a :href="url" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 text-cyan-700 hover:underline text-sm font-semibold">
            🔗 Ouvrir le site dans un nouvel onglet
          </a>
        </header>

        <!-- Meta / Case study facts -->
        <section class="space-y-4">
          <div v-if="client || role" class="flex flex-wrap gap-2">
            <span v-if="client" class="inline-flex items-center  text-xs font-medium bg-slate-100 text-slate-700">
              👤 Client&nbsp;: {{ client }}
            </span>
            <span v-if="role" class="inline-flex items-center  text-xs font-medium bg-slate-100 text-slate-700">
              🛠️ Rôle&nbsp;: {{ role }}
            </span>
          </div>

          <div v-if="stack?.length" class="flex flex-wrap gap-2">
            <span v-for="s in stack" :key="s" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700">
              {{ s }}
            </span>
          </div>

          <div v-if="services?.length" class="flex flex-wrap gap-2">
            <span v-for="srv in services" :key="srv" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
              ✅ {{ srv }}
            </span>
          </div>

          <div v-if="metrics?.length" class="grid grid-cols-2 gap-2 max-w-sm">
            <div v-for="m in metrics" :key="m.label"
                 class="rounded-lg border border-slate-200 px-3 py-2">
              <div class="text-[11px] uppercase tracking-wide text-slate-500">{{ m.label }}</div>
              <div class="text-sm font-semibold text-slate-800">{{ m.value }}</div>
            </div>
          </div>

          <div v-if="expectations" class="text-sm text-slate-700">
            <span class="font-semibold">🎯 Attentes&nbsp;:</span> {{ expectations }}
          </div>
          <div v-if="challenges" class="text-sm text-slate-700">
            <span class="font-semibold">🧩 Défis clés&nbsp;:</span> {{ challenges }}
          </div>
          <div v-if="performance" class="text-sm text-slate-700">
            <span class="font-semibold">⚡ Performance&nbsp;:</span> {{ performance }}
          </div>
          <div v-if="results" class="text-sm text-slate-700">
            <span class="font-semibold">📈 Résultats&nbsp;:</span> {{ results }}
          </div>
        </section>
      </div>

      <!-- Previews column -->
      <div class="col-span-12 md:col-span-7 order-2 md:order-1 space-y-6">

        <!-- Desktop preview -->
        <div ref="desktopBox"
             class="hidden md:block relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-xl">
          <!-- Live hint (non-blocking) -->
          <div
            v-show="!hasInteracted"
            class="pointer-events-none absolute top-3 right-3 z-10">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1 shadow">
              🟢 Live preview — cliquez & naviguez
            </span>
          </div>

          <div class="absolute inset-3 rounded-xl overflow-hidden bg-black/80">
            <!-- Emulated viewport wrapper -->
            <div class="absolute left-0 top-0" :style="desktopStyle">
              <iframe
                v-if="!fallbackDesktop"
                :src="url"
                class="block w-full h-full"
                loading="lazy"
                title="Aperçu desktop (live, interactif)"
                referrerpolicy="no-referrer-when-downgrade"
                @load="onFirstInteraction"
                @mouseenter="onFirstInteraction"
                @click="onFirstInteraction"
                @error="fallbackDesktop = true"
              />
              <div v-else class="relative w-full h-full">
                <img :src="fallbackImage" :alt="title" class="w-full h-full object-cover opacity-80" />
                <a
                  :href="url"
                  target="_blank"
                  rel="noopener"
                  class="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-semibold hover:opacity-100 transition"
                >
                  🖥️ Voir version desktop en plein écran
                </a>
              </div>
            </div>
          </div>

          <!-- Keyboard tip -->
          <div class="absolute bottom-3 left-3 text-[11px] text-white/70">
            Astuce&nbsp;: vous pouvez scroller dans le cadre.
          </div>
        </div>

        <!-- Mobile preview -->
        <div ref="mobileBox"
             class="md:hidden relative rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-950 shadow-xl">
          <div
            v-show="!hasInteracted"
            class="pointer-events-none absolute top-3 right-3 z-10">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/90 text-slate-900 text-[11px] font-semibold px-2.5 py-1 shadow">
              🟢 Live preview mobile — touchez & naviguez
            </span>
          </div>

          <div class="absolute inset-3 rounded-[1.6rem] overflow-hidden bg-black/80">
            <div class="absolute left-0 top-0" :style="mobileStyle">
              <iframe
                v-if="!fallbackMobile"
                :src="url"
                class="block w-full h-full"
                loading="lazy"
                title="Aperçu mobile (live, interactif)"
                referrerpolicy="no-referrer-when-downgrade"
                @load="onFirstInteraction"
                @touchstart="onFirstInteraction"
                @click="onFirstInteraction"
                @error="fallbackMobile = true"
              />
              <div v-else class="relative w-full h-full">
                <img :src="fallbackImage" :alt="title" class="w-full h-full object-cover opacity-80" />
                <a
                  :href="url"
                  target="_blank"
                  rel="noopener"
                  class="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-semibold"
                >
                  📱 Voir version mobile en plein écran
                </a>
              </div>
            </div>
          </div>

          <!-- keep a natural mobile aspect ratio -->
          <div class="invisible">
            <div class="w-[375px] h-[667px]"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, type CSSProperties } from 'vue'

type Viewport = { w: number; h: number }

type Device = 'desktop' | 'tablet' | 'mobile'
type Metric = { label: string; value: string }
type Link = { label: string; href: string; external?: boolean }
type Badge = string

const props = defineProps({
  /* Core */
  title: { type: String, required: true },
  year:  { type: [String, Number], default: '' },
  url:   { type: String, required: true },
  description: { type: String, default: '' },
  

  /* Case-study meta (all optional) */
  client: String,
  role: String,
  expectations: String,
  challenges: String,
  performance: String,
  results: String,
    summary: { type: String, default: '' },
  stack:   { type: Array as () => string[],  default: () => [] },
  services:{ type: Array as () => string[],  default: () => [] },
  metrics: { type: Array as () => Metric[],  default: () => [] },
  badges:  { type: Array as () => Badge[],   default: () => [] },
  links:   { type: Array as () => Link[],    default: () => [] }, // extra CTAs

  /* Preview controls */
  devices: { type: Array as () => Device[], default: () => ['desktop','mobile'] },
  aspect:  { type: String, default: '16/10' }, // e.g. '16/10', '3/2', '9/16'
  lazy:    { type: Boolean, default: true },
  openOnClick: { type: Boolean, default: true }, // click on frame opens url
  showHint:    { type: Boolean, default: true }, // “Live preview” badge

  /* Viewport emulation (px) */
  desktopViewportW: { type: Number, default: 1280 },
  desktopViewportH: { type: Number, default: 800  },
  tabletViewportW:  { type: Number, default: 834  }, // iPad-ish
  tabletViewportH:  { type: Number, default: 1112 },
  mobileViewportW:  { type: Number, default: 375  },
  mobileViewportH:  { type: Number, default: 667  },

  /* Fallbacks / frame */
  fallbackImage: { type: String, default: '' },
  frameProps: { // pass-through attributes to iframes (sandbox, referrerpolicy, etc.)
    type: Object as () => Record<string, any>,
    default: () => ({ referrerpolicy: 'no-referrer-when-downgrade' })
  }
})

const emit = defineEmits<{
  (e:'open', href:string): void
  (e:'interact'): void
  (e:'error', kind:'desktop'|'tablet'|'mobile'): void
}>()

const fallbackDesktop = ref(false)
const fallbackMobile  = ref(false)
const hasInteracted   = ref(false)

const onFirstInteraction = () => { hasInteracted.value = true }

const desktopBox = ref<HTMLElement | null>(null)
const mobileBox  = ref<HTMLElement | null>(null)
const desktopScale = ref(1)
const mobileScale  = ref(1)

let roDesktop, roMobile

const fit = (elWidth, elHeight, vw, vh) => {
  const scaleByW = elWidth / vw
  const scaleByH = elHeight / vh
  return Math.min(scaleByW, scaleByH, 1)
}

const measureDesktop = () => {
  const el = desktopBox.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const w = Math.max(rect.width - 24, 0)  // inset-3 padding
  const h = Math.max(rect.height - 24, 0)
  desktopScale.value = fit(w, h, props.desktopViewportW ?? 1280, props.desktopViewportH ?? 800)
}

const measureMobile = () => {
  const el = mobileBox.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const w = Math.max(rect.width - 24, 0)
  const h = Math.max(rect.height - 24, 0)
  mobileScale.value = fit(w, h, props.mobileViewportW ?? 375, props.mobileViewportH ?? 667)
}

onMounted(() => {
  roDesktop = new ResizeObserver(measureDesktop)
  roMobile  = new ResizeObserver(measureMobile)
  desktopBox.value && roDesktop.observe(desktopBox.value)
  mobileBox.value  && roMobile.observe(mobileBox.value)
  measureDesktop()
  measureMobile()
  window.addEventListener('resize', measureDesktop, { passive: true })
  window.addEventListener('resize', measureMobile,  { passive: true })
})

onBeforeUnmount(() => {
  roDesktop?.disconnect()
  roMobile?.disconnect()
  window.removeEventListener('resize', measureDesktop)
  window.removeEventListener('resize', measureMobile)
})


const desktopStyle = computed<CSSProperties>(() => ({
  width:  (props.desktopViewportW ?? 1280) + 'px',
  height: (props.desktopViewportH ?? 800) + 'px',
  transform: `scale(${desktopScale.value})`,
  transformOrigin: 'top left'
}))

const mobileStyle = computed<CSSProperties>(() => ({
  width:  (props.mobileViewportW ?? 375) + 'px',
  height: (props.mobileViewportH ?? 667) + 'px',
  transform: `scale(${mobileScale.value})`,
  transformOrigin: 'top left'
}))
</script>
