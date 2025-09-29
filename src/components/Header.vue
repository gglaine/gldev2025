<!-- HeaderPro.vue -->
<template>
  <!-- Skip link -->
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] bg-black text-white px-3 py-2 rounded">
    Aller au contenu
  </a>

  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-200 will-change-transform',
      reveal ? 'translate-y-0' : '-translate-y-16',
      scrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow' : 'bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm'
    ]"
    role="banner"
    @mouseenter="freezeReveal = true"
    @mouseleave="freezeReveal = false"
  >
    <!-- Row: Brand + Desktop Nav -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand -->
      <router-link to="/" class="flex items-center gap-2 group" aria-label="Accueil Guillaume Lainé – Digital Craftsman">
        <span class="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-black tracking-tight shadow-md transition-all group-hover:scale-110 group-hover:shadow-lg">
          GL
        </span>
        <span class="flex flex-col leading-tight">
          <span class="text-sm font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 group-hover:from-blue-700 group-hover:to-cyan-600 transition-colors">
            Guillaume Lainé
          </span>
          <span class="text-[11px] font-medium text-slate-500">Designer & Développeur</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Navigation principale">
        <HeaderLink to="/"                 :active="route.path === '/'">Accueil</HeaderLink>
        <HeaderLink to="/projets"          :active="route.path.startsWith('/projets')">Projets</HeaderLink>
        <HeaderLink to="/casestudies"      :active="route.path.startsWith('/casestudies')">Études de cas</HeaderLink>
        <HeaderLink to="/services"         :active="route.path.startsWith('/services')">Services</HeaderLink>
        <HeaderLink to="/a-propos"         :active="route.path.startsWith('/a-propos')">À propos</HeaderLink>
        <HeaderLink to="/contact"          :active="route.path.startsWith('/contact')">Contact</HeaderLink>
      </nav>
    </div>

<!-- Mobile pill-nav (scrollable with fades + arrows) -->
<nav class="md:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md" aria-label="Navigation principale (mobile)">
  <div class="relative">
    <!-- left fade + arrow -->
    <div v-show="canScrollLeft" class="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
    <button
      v-show="canScrollLeft"
      type="button"
      class="absolute left-1 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 shadow hover:bg-white"
      @click="scrollBy(-1)"
      aria-label="Faire défiler vers la gauche"
    >
      ‹
    </button>

    <!-- scroller -->
    <div
      ref="scroller"
      class="px-3 py-2 overflow-x-auto overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch] scrollbar-none min-w-0"
      @scroll.passive="updateScrollEdges"
    >
      <ol class="flex items-center gap-2 snap-x snap-mandatory">
        <li class="snap-start shrink-0"><MobilePill to="/" :active="route.path === '/'">Accueil</MobilePill></li>
        <li class="snap-start shrink-0"><MobilePill to="/projets" :active="route.path.startsWith('/projets')">Projets</MobilePill></li>
        <li class="snap-start shrink-0"><MobilePill to="/casestudies" :active="route.path.startsWith('/casestudies')">Études de cas</MobilePill></li>
        <li class="snap-start shrink-0"><MobilePill to="/services" :active="route.path.startsWith('/services')">Services</MobilePill></li>
        <li class="snap-start shrink-0"><MobilePill to="/a-propos" :active="route.path.startsWith('/a-propos')">À propos</MobilePill></li>
        <li class="snap-start shrink-0"><MobilePill to="/contact" :active="route.path.startsWith('/contact')">Contact</MobilePill></li>
      </ol>
    </div>

    <!-- right fade + arrow -->
    <div v-show="canScrollRight" class="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
    <button
      v-show="canScrollRight"
      type="button"
      class="absolute right-1 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/90 ring-1 ring-slate-200 shadow hover:bg-white"
      @click="scrollBy(1)"
      aria-label="Faire défiler vers la droite"
    >
      ›
    </button>
  </div>
</nav>

    <!-- Contacts row under nav (desktop + mobile) -->
    <div class="border-t border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        <!-- Left: micro trust + CTA -->
        <div class="hidden sm:flex items-center gap-3 text-xs text-slate-600">
          <span class="inline-flex items-center gap-1 font-semibold text-cyan-700">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-600"></span> Dispo freelance
          </span>
          <span aria-hidden="true">•</span>
          <router-link to="/contact" class="font-medium hover:text-slate-900">Démarrer un projet</router-link>
        </div>

        <!-- Right: contacts inline -->
        <div class="flex items-center gap-4">
          <a :href="links.github" class="p-1.5 rounded hover:bg-slate-50" aria-label="GitHub">
            <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.03.07 1.58 1.08 1.58 1.08.91 1.59 2.39 1.13 2.98.86.09-.68.36-1.13.65-1.39-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.07c.86 0 1.72.12 2.53.34 1.91-1.32 2.75-1.05 2.75-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.06.37.33.69.97.69 1.96 0 1.42-.01 2.56-.01 2.91 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </a>
          <a :href="links.linkedin" class="p-1.5 rounded hover:bg-slate-50" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M6.94 8.65v10.3H3.84V8.65h3.1ZM5.39 4.75a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20.16 13.1v5.85h-3.1v-5.34c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.22-.11.52-.11.83v5.54h-3.1s.04-8.99 0-9.95h3.1v1.41c.41-.64 1.14-1.55 2.77-1.55 2.02 0 3.53 1.32 3.53 4.19Z"/></svg>
          </a>
          <a :href="`mailto:${links.email}`" class="p-1.5 rounded hover:bg-slate-50" aria-label="Email">
            <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
          </a>

          <!-- Phone inline -->
          <a :href="`tel:${links.phoneHref}`" class="hidden sm:inline text-sm font-medium text-slate-800 hover:text-blue-700">
            {{ links.phoneLabel }}
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Floating phone chip (gentle peek) -->
  <button
    class="fixed bottom-4 right-3 sm:right-4 z-50 group flex items-center gap-2 px-3 py-2 rounded-full shadow-xl ring-1 ring-slate-200
           bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md text-slate-800 transition-transform duration-300 will-change-transform"
    :class="phonePeekOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'"
    @click="userInteracted = true"
    :aria-label="`Appeler ${links.phoneLabel}`"
  >
    <a :href="`tel:${links.phoneHref}`" class="flex items-center gap-2">
      <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17.5 17.5 0 0 1 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1Z"/></svg>
      <span class="text-sm font-semibold">Appeler</span>
    </a>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, defineComponent, h } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import HeaderLink from './HeaderLink.vue'

/* ---------------------------------- State --------------------------------- */
const route = useRoute()

const links = {
  github:  'https://github.com/gglaine',
  linkedin:'https://www.linkedin.com/in/guillaumelaine/',
  email:   'guillaulelaine2.0@gmail.com',
  phoneHref: '+33619400305',
  phoneLabel: '+33 6 19 40 03 05',
}

/* ------------------------- Scroll-aware sticky header ---------------------- */
const scrolled = ref(false)
const reveal = ref(true)
const freezeReveal = ref(false)
let lastY = 0

const onScroll = () => {
  const y = window.scrollY || 0
  scrolled.value = y > 8
  if (freezeReveal.value) return
  reveal.value = y < lastY || y < 24
  lastY = y
}

/* ----------------------- Floating phone chip “peek” ------------------------ */
const phonePeekOpen = ref(false)
const userInteracted = ref(false)
let peekTimer: ReturnType<typeof setInterval> | null = null
let prefersReduced = false
let mq: MediaQueryList | null = null
let onMQ: ((e: MediaQueryListEvent) => void) | null = null

const startPeeking = () => {
  if (prefersReduced || userInteracted.value) return
  stopPeeking()
  peekTimer = setInterval(() => {
    if (!userInteracted.value) {
      phonePeekOpen.value = true
      setTimeout(() => {
        if (!userInteracted.value) phonePeekOpen.value = false
      }, 2200)
    }
  }, 14000)
}
const stopPeeking = () => {
  if (peekTimer) {
    clearInterval(peekTimer)
    peekTimer = null
  }
}

/* ----------------------- Mobile scroller (pill nav) ------------------------ */
const scroller = ref<HTMLDivElement | null>(null)
const canScrollLeft  = ref(false)
const canScrollRight = ref(false)
const EDGE_PAD = 12 // px

const updateScrollEdges = () => {
  const el = scroller.value
  if (!el) return
  const max = el.scrollWidth - el.clientWidth
  canScrollLeft.value  = el.scrollLeft > EDGE_PAD
  canScrollRight.value = el.scrollLeft < (max - EDGE_PAD)
}

const scrollByDir = (dir: 1 | -1) => {
  const el = scroller.value
  if (!el) return
  const delta = Math.min(280, el.clientWidth * 0.6) * dir
  el.scrollBy({ left: delta, behavior: 'smooth' })
}

const onResize = () => updateScrollEdges()

/* --------------------------------- Lifecyle -------------------------------- */
onMounted(async () => {
  // reduced motion preference
  mq = window.matchMedia?.('(prefers-reduced-motion: reduce)') ?? null
  prefersReduced = !!mq?.matches
  if (mq) {
    onMQ = (e: MediaQueryListEvent) => { prefersReduced = e.matches }
    mq.addEventListener?.('change', onMQ)
  }

  // header scroll behavior
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // phone peek loop
  startPeeking()

  // stop peek on first interaction
  const stopAll = () => { userInteracted.value = true; stopPeeking(); phonePeekOpen.value = false }
  window.addEventListener('pointerdown', stopAll, { once: true })
  window.addEventListener('keydown', stopAll, { once: true })

  // mobile scroller edges (after DOM/layout)
  await nextTick()
  updateScrollEdges()
  window.addEventListener('resize', onResize, { passive: true })
  // recheck after fonts settle
  setTimeout(updateScrollEdges, 300)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  stopPeeking()
  if (mq && onMQ) mq.removeEventListener?.('change', onMQ)
})

/* ---------------------------- Inline MobilePill ---------------------------- */
const MobilePill = defineComponent({
  name: 'MobilePill',
  props: {
    to: { type: [String, Object] as any, required: true },
    active: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () =>
      h(RouterLink as any, {
        to: props.to,
        class: [
          'inline-flex items-center px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap',
          'ring-1 ring-slate-200 shadow-sm transition-colors shrink-0',
          props.active ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
        ],
        'aria-current': props.active ? 'page' : null
      }, slots.default?.())
  }
})

/* ----------------------------- Expose to template -------------------------- */
// expose for template usage
const scrollBy = (dir: number) => scrollByDir(dir < 0 ? -1 : 1)

</script>


<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
