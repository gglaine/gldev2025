<!-- components/blocks/CSProcessSteps.vue -->
<template>
  <section class="w-full max-w-4xl" :aria-label="ariaLabel || 'Processus en étapes'">
    <header v-if="title || subtitle" class="mb-8 text-center">
      <h2 v-if="title" class="text-3xl font-extrabold leading-tight tracking-tight">{{ title }}</h2>
      <p v-if="subtitle" class="text-slate-500 mt-2 text-base">{{ subtitle }}</p>
    </header>

    <!-- Stage chips (breadcrumb vibe, optional) -->
    <nav v-if="showChips" class="mb-6 flex flex-wrap gap-2 justify-center">
      <button
        v-for="(s,i) in steps" :key="i"
        class="px-3.5 py-1.5 rounded-full text-xs border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        :class="i <= activeIndex
          ? 'bg-slate-900 text-white border-slate-900'
          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'"
        @click="scrollToCard(i)"
        :aria-current="i === activeIndex ? 'step' : undefined"
      >
        {{ s.title || `Étape ${i+1}` }}
      </button>
    </nav>

    <!-- Mobile: vertical stack -->
    <ol class="relative flex flex-col gap-8 md:hidden" role="list">
      <li v-for="(s, i) in steps" :key="i" class="relative" role="listitem">
        <article :class="[variant === 'cards'
            ? 'bg-white p-5 shadow-sm ring-1 ring-slate-200'
            : '',
          'rounded-xl transition-all']">
          <div :class="['relative overflow-hidden rounded-lg', mediaAspectClass]">
            <span v-if="showWatermark" class="wm" aria-hidden="true">{{ i + 1 }}</span>
            <component
              :is="mediaComponent(s)"
              v-bind="mediaBindings(s, i)"
              class="absolute inset-0 w-full h-full object-cover select-none"
            />
          </div>
          <h3 v-if="s.title" class="mt-4 font-semibold text-slate-900 leading-snug">{{ s.title }}</h3>

          <!-- Bilingual desc -->
          <div class="mt-2 space-y-1">
            <p v-if="s.desc_fr" class="text-sm leading-loose text-blue-700">
              {{ s.desc_fr }}
            </p>
            <p v-if="s.desc_en" class="text-sm leading-loose text-emerald-700">
              {{ s.desc_en }}
            </p>
          </div>
        </article>
      </li>
    </ol>

    <!-- Desktop: row of cards -->
    <ol
      ref="desktopListEl"
      class="hidden md:flex items-start mb-32 px-4 md:px-8 justify-center"
      role="list"
      :style="{ gap: `${gap}px` }"
      @mouseleave="onLeaveDesktop"
    >
      <li
        v-for="(s, i) in steps"
        :key="i"
        class="min-w-[330px] relative shrink-0 outline-none"
        role="listitem"
        :style="{ width: `${itemWidth}px`, maxWidth: '100%' }"
        @mouseenter="setActive(i)"
        @focusin="setActive(i)"
      >
        <article :class="[variant === 'cards'
            ? 'bg-white p-5 shadow-sm ring-1 ring-slate-200'
            : '',
          'h-full rounded-xl transition-all']">
          <div :class="['relative overflow-hidden rounded-lg', mediaAspectClass]">
            <span v-if="showWatermark" class="wm" aria-hidden="true">{{ i + 1 }}</span>
            <component
              :is="mediaComponent(s)"
              v-bind="mediaBindings(s, i)"
              class="absolute inset-0 w-full h-full object-cover select-none"
            />
          </div>
          <h3 v-if="s.title" class="mt-4 font-semibold text-slate-900 leading-snug">{{ s.title }}</h3>

          <!-- Bilingual desc -->
          <div class="mt-2 space-y-1">
            <p v-if="s.desc_fr" class="text-sm leading-normal text-slate-800">
              {{ s.desc_fr }}
            </p>
            <p v-if="s.desc_en" class="text-sm italic leading-normal text-slate-600">
              {{ s.desc_en }}
            </p>
          </div>
        </article>
      </li>
    </ol>
  </section>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

type MediaType = 'image' | 'video'
type Step = {
  src: string
  type?: 'image' | 'video'
  poster?: string
  controls?: boolean
  alt?: string
  title?: string
  desc_fr?: string
  desc_en?: string
  outcome?: string
}
const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  ariaLabel?: string
  steps: Step[]
  variant?: 'cards' | 'plain'
  mediaAspect?: 'video' | '4:3' | '1:1' | '3:2' | '16:9'
  /** Desktop card width (px) */
  itemWidth?: number
  /** Gap between cards (px) */
  gap?: number
  /** Show breadcrumb-like chips above the row */
  showChips?: boolean
  /** Show faint watermark numeral behind the media */
  showWatermark?: boolean
}>(), {
  variant: 'cards',
  mediaAspect: '1:1',
  itemWidth: 512,       // a bit wider for breathing
  gap: 64,              // more space between cards
  showChips: true,
  showWatermark: true
})

const withBase = (p: string) =>
  `${import.meta.env.BASE_URL}${(p || '').replace(/^\//, '')}`

const videoExtRe = /\.(mp4|webm|mov|m4v)$/i
const inferType = (s: Step): MediaType =>
  s.type ? s.type : (videoExtRe.test(s.src) ? 'video' : 'image')

const mediaAspectClass = computed(() => {
  switch (props.mediaAspect) {
    case 'video': return 'aspect-video'
    case '4:3':   return 'aspect-[4/3]'
    case '1:1':   return 'aspect-square'
    case '3:2':   return 'aspect-[3/2]'
    case '16:9':
    default:      return 'aspect-[16/9]'
  }
})

/** Decide which element to render for a given step */
const mediaComponent = (s: Step) => inferType(s) === 'video' ? 'video' : 'img'

/** Attribute bindings per media kind */
const mediaBindings = (s: Step, i: number) => {
  const kind = inferType(s)
  const common = {
    'aria-label': s.alt || s.title || `Étape ${i + 1}`,
  } as Record<string, any>

  if (kind === 'video') {
    return {
      ...common,
      src: withBase(s.src),
      poster: s.poster ? withBase(s.poster) : undefined,
      autoplay: true,
      loop: true,
      muted: true,
      playsinline: true,
      controls: !!s.controls,
      preload: 'metadata'
    }
  } else {
    return {
      ...common,
      src: withBase(s.src),
      alt: s.alt || s.title || `Étape ${i + 1}`,
      loading: 'lazy',
      decoding: 'async'
    }
  }
}

/** Progress / continuity cues (chips + index ticks) */
const activeIndex = ref(0)
const desktopListEl = ref<HTMLOListElement | null>(null)
const liRefs: HTMLElement[] = []

const scrollToCard = (i:number) =>
  liRefs[i]?.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' })

const setActive = (i:number) => { activeIndex.value = i }
const onLeaveDesktop = () => { /* keep last active; no reset to avoid flicker */ }

onMounted(async () => {
  await nextTick()
  // capture all list items (mobile or desktop depending on viewport)
  const items = [...document.querySelectorAll('[role="listitem"]')] as HTMLElement[]
  liRefs.splice(0, liRefs.length, ...items)

  // Observe visibility to update activeIndex while scrolling
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => {
      if (e.isIntersecting) {
        const idx = items.indexOf(e.target as HTMLElement)
        if (idx !== -1) activeIndex.value = idx
      }
    })
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0.5 })

  items.forEach(el => io.observe(el))
  onBeforeUnmount(() => io.disconnect())
})
</script>

<style scoped>
:deep(picture), :deep(img), :deep(video) { border-radius: 0 !important; box-shadow: none !important; }

/* Watermark numeral — quiet but legible on light/dark */
.wm {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: clamp(56px, 9vw, 120px);
  color: rgba(15, 23, 42, 0.06); /* slate-900/6 */
  mix-blend-mode: multiply;
  pointer-events: none;
}
@media (prefers-color-scheme: dark) {
  .wm { color: rgba(255, 255, 255, 0.08); mix-blend-mode: screen; }
}

/* Subtle lift to imply momentum */
[role="listitem"]:hover article {
  transform: translateY(-2px);
  transition: transform 180ms ease;
}
</style>
