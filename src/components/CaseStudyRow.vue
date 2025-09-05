<template>
  <section class="space-y-5">
    <div class="group relative rounded-2xl p-[2px] bg-gradient-to-tr from-slate-200 via-slate-100 to-white shadow-sm">
      <div class="relative rounded-[14px] overflow-hidden bg-white border border-slate-200">
        <!-- Placeholder = SNAPSHOT (no remote site loaded yet) -->
        <div v-if="!showPreview" class="relative">
          <!-- aspect shim -->
          <div :style="{ paddingTop: aspectPadding }"></div>

          <!-- snapshot image (device-aware) -->
          <img
            v-if="snapshotURL"
            :src="snapshotURL"
            :srcset="snapshotSrcset"
            sizes="(min-width:1024px) 960px, 100vw"
            :alt="`${project.title} – aperçu ${device}`"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            referrerpolicy="no-referrer"
            @error="onSnapshotError"
          />
          <!-- fallback to poster if snapshot fails or absent -->
          <img
            v-else-if="project.poster"
            :src="project.poster"
            :alt="project.title"
            class="absolute inset-0 w-full h-full object-cover opacity-90"
            loading="lazy"
          />

          <!-- device toggle -->
          <div class="absolute left-3 top-3 flex gap-2">
            <button
              v-for="d in deviceOptions" :key="d.key"
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

          <!-- title badge -->
          <div class="absolute left-3 bottom-3 text-white drop-shadow">
            <div class="text-sm font-semibold">{{ project.title }}</div>
            <div class="text-xs opacity-90">{{ project.client }} · {{ project.year }}</div>
          </div>

          <!-- CTA: load live preview -->
          <div class="absolute inset-0 grid place-items-center">
            <button
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
              @click="enablePreview"
              :aria-label="`Charger la prévisualisation de ${project.title}`"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Charger la prévisualisation
            </button>
            <p class="absolute bottom-4 text-[11px] text-white/90">Le site distant ne se charge qu’après clic.</p>
          </div>
        </div>

        <!-- Live Preview (remounts on device change) -->
        <div v-else class="relative">
          <ProjectLivePreview
            :key="`${project.slug || project.title}:${device}`"
            v-bind="project"
            :devices="selectedDevices"
            :aspect="computedAspect"
            :lazy="true"
            :openOnClick="true"
            @ready="onReady" @load="onReady"
          />
          <!-- soft veil while mounting -->
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

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import ProjectLivePreview from './ProjectLivePreview.vue' // adjust path if needed

const props = defineProps({
  project: { type: Object, required: true }
})

/* ---------- Device toggle (affects snapshot & preview) ---------- */
const device = ref('desktop') // 'desktop' | 'mobile'
const deviceOptions = [
  { key: 'desktop', label: 'Desktop', icon: '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor"/></svg>' },
  { key: 'mobile',  label: 'Mobile',  icon: '<svg width="12" height="12" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" fill="currentColor"/></svg>' }
]
function setDevice(k){ device.value = k }

/* ---------- Snapshot URL (from project.url) ---------- */
/* Default: WordPress mShots (no key). Swap provider if you prefer. */
const useSnapshot = ref(true)
function wpShot(url, w) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}`
}
// You can later switch to another provider (Microlink, ScreenshotOne, etc.)
const snapshotURL = computed(() => {
  if (!useSnapshot.value || !props.project.url) return ''
  const width = device.value === 'mobile' ? 460 : 1200
  return wpShot(props.project.url, width)
})
const snapshotSrcset = computed(() => {
  if (!snapshotURL.value) return ''
  const w1 = device.value === 'mobile' ? 360 : 800
  const w2 = device.value === 'mobile' ? 720 : 1600
  return `${wpShot(props.project.url, w1)} ${w1}w, ${wpShot(props.project.url, w2)} ${w2}w`
})
function onSnapshotError() {
  // If the service is blocked or returns an error image, disable and fall back to poster
  useSnapshot.value = false
}

/* ---------- On-demand load + mount veil ---------- */
const wantsOnDemand = computed(() => props.project.previewOnDemand !== false)
const storageKey = computed(() => `preview:${props.project.slug || props.project.title || ''}`)
const showPreview = ref(!wantsOnDemand.value)
const loading = ref(false)

onMounted(() => {
  if (wantsOnDemand.value) {
    const remembered = sessionStorage.getItem(storageKey.value)
    if (remembered === '1') showPreview.value = true
  }
})
watch(showPreview, (v) => {
  if (wantsOnDemand.value && storageKey.value) {
    sessionStorage.setItem(storageKey.value, v ? '1' : '0')
  }
})

async function enablePreview() {
  showPreview.value = true
  loading.value = true
  await nextTick()
  // fallback veil timeout; cleared earlier if @ready fires
  setTimeout(() => { loading.value = false }, 900)
}
function onReady(){ loading.value = false }

/* ---------- Pass device & aspect to preview ---------- */
const selectedDevices = computed(() =>
  device.value === 'mobile' ? ['mobile'] : ['desktop']
)
const computedAspect = computed(() => {
  if (device.value === 'mobile') return '9/19.5' // tall phone
  return props.project.aspect || '16/10'
})
const aspectPadding = computed(() => {
  const [w, h] = String(computedAspect.value).split('/').map(Number)
  const ratio = (!isNaN(w) && !isNaN(h) && w > 0) ? (h / w) * 100 : 62.5
  return `${ratio}%`
})
</script>
