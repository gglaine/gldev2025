<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Variantes (tu peux éditer)
const offers = [
  {
    nounFr: 'sites',
    claimFr: 'qui simplifient le travail',
    claimEn: 'that make work simpler',
    subFr: 'je construis vos briques digitales, sur mesure, sans blabla.',
    subEn: 'For solo-founders, studios or lean teams: I craft digital bricks, tailor-made, no fluff.'
  },
  {
    nounFr: 'briques digitales',
    claimFr: 'qui accélèrent vos opérations',
    claimEn: 'that speed up your ops',
    subFr: 'formulaires, dashboards, intégrations et connecteurs API bien pensés.',
    subEn: 'Forms, dashboards, and thoughtful API integrations that remove friction.'
  },
  {
    nounFr: 'marque',
    claimFr: 'qui clarifie votre valeur',
    claimEn: 'that clarifies your value',
    subFr: 'identité, système visuel, messages clairs et mémorables.',
    subEn: 'Identity, visual system, and sharp messaging that sticks.'
  },
  {
    nounFr: 'automatisations',
    claimFr: 'qui éliminent les tâches répétitives',
    claimEn: 'that remove repetitive tasks',
    subFr: 'workflows no-code/low-code, IA d’assistance, synchronisations de données.',
    subEn: 'Low-code automations, assistant AI and reliable data syncs.'
  }
]

const i = ref(0)
const paused = ref(false)
let timer

// Refs pour mesure
const measureWrap = ref(null)
const nounBox = ref(null)
const claimFrBox = ref(null)
const claimEnBox = ref(null)
const subFrBox = ref(null)
const subEnBox = ref(null)

// Variables CSS
const widths = ref({
  noun: 0,
  claimFr: 0,
  claimEn: 0,
})
const heights = ref({
  noun: 0,
  claimFr: 0,
  claimEn: 0,
  subFr: 0,
  subEn: 0,
})

const next = () => { i.value = (i.value + 1) % offers.length }

const measure = () => {
  // On génère toutes les variantes invisibles pour choper la taille max
  const tmp = document.createElement('div')
  tmp.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;inset:auto;left:-9999px;top:-9999px;white-space:nowrap;'
  tmp.innerHTML = `
    <div class="typo noun">
      ${offers.map(o => `<span class="inline-block">${o.nounFr}</span>`).join('')}
    </div>
    <div class="typo claimFr">
      ${offers.map(o => `<span class="inline-block">${o.claimFr}</span>`).join('')}
    </div>
    <div class="typo claimEn">
      ${offers.map(o => `<span class="inline-block">${o.claimEn}</span>`).join('')}
    </div>
    <div class="typo subFr" style="white-space:normal;max-width:40rem;">
      ${offers.map(o => `<div class="block">${o.subFr}</div>`).join('')}
    </div>
    <div class="typo subEn" style="white-space:normal;max-width:40rem;">
      ${offers.map(o => `<div class="block">${o.subEn}</div>`).join('')}
    </div>
  `
  document.body.appendChild(tmp)

  // Helpers
  const maxInlineSize = (sel) => {
    let maxW = 0, maxH = 0
    tmp.querySelectorAll(sel + ' > *').forEach(el => {
      const r = el.getBoundingClientRect()
      maxW = Math.max(maxW, r.width)
      maxH = Math.max(maxH, r.height)
    })
    return [Math.ceil(maxW), Math.ceil(maxH)]
  }
  const maxBlockSize = (sel) => {
    let maxH = 0, maxW = 0
    tmp.querySelectorAll(sel + ' > *').forEach(el => {
      const r = el.getBoundingClientRect()
      maxH = Math.max(maxH, r.height)
      maxW = Math.max(maxW, r.width)
    })
    return [Math.ceil(maxW), Math.ceil(maxH)]
  }

  const [nounW, nounH] = maxInlineSize('.noun')
  const [claimFrW, claimFrH] = maxInlineSize('.claimFr')
  const [claimEnW, claimEnH] = maxInlineSize('.claimEn')
  const [, subFrH] = maxBlockSize('.subFr')
  const [, subEnH] = maxBlockSize('.subEn')

  widths.value = { noun: nounW, claimFr: claimFrW, claimEn: claimEnW }
  heights.value = { noun: nounH, claimFr: claimFrH, claimEn: claimEnH, subFr: subFrH, subEn: subEnH }

  document.body.removeChild(tmp)
}

onMounted(async () => {
  await nextTick()
  measure()
  timer = setInterval(() => { if (!paused.value) next() }, 3500)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section class="w-full text-center">
    <h1
      class="text-balance text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight
             text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600
             drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      Je conçois des

      <!-- SLOT : Noun (taille figée) -->
      <span
        class="relative inline-block align-baseline will-change-transform"
        :style="{ width: widths.noun + 'px', height: heights.noun + 'px' }"
        aria-live="polite"
      >
        <transition name="fade-stable" mode="out-in">
          <span
            :key="offers[i].nounFr"
            class="absolute inset-0 inline-flex items-baseline justify-center"
          >
            {{ offers[i].nounFr }}
          </span>
        </transition>
      </span>

      et des outils

      <!-- SLOT : Claim FR (souligné) -->
      <span
        class="relative inline-block align-baseline ml-1"
        :style="{ width: widths.claimFr + 'px', height: heights.claimFr + 'px' }"
      >
        <transition name="fade-up-stable" mode="out-in">
          <span
            :key="offers[i].claimFr"
            class="absolute inset-0 inline-flex items-end justify-center"
          >
            <span class="relative">
              <span class="relative z-10">{{ offers[i].claimFr }}</span>
              <span aria-hidden class="absolute left-0 right-0 -bottom-1 h-[0.5em] bg-gradient-to-r from-cyan-500/20 via-cyan-600/30 to-cyan-500/20 rounded-sm"></span>
            </span>
          </span>
        </transition>
      </span>

      <br />

      <!-- SLOT : Claim EN -->
      <span
        class="block text-lg text-slate-600 font-medium mt-2 mx-auto"
        :style="{ width: widths.claimEn + 'px', height: heights.claimEn + 'px' }"
      >
        <transition name="fade-stable" mode="out-in">
          <span
            :key="offers[i].claimEn"
            class="absolute inline-flex items-baseline justify-center"
            style="position:relative"
          >
            I design websites and tools {{ offers[i].claimEn }}
          </span>
        </transition>
      </span>
    </h1>

    <!-- Texte secondaire (FR/EN), hauteurs figées pour éviter le saut -->
    <p class="mt-4 sm:mt-6 text-pretty text-base sm:text-xl text-slate-600 font-light tracking-wide max-w-2xl mx-auto">
      <span class="relative block mx-auto" :style="{ height: heights.subFr + 'px' }">
        <transition name="fade-stable" mode="out-in">
          <span :key="offers[i].subFr" class="absolute inset-0 block">
            {{ offers[i].subFr }}
          </span>
        </transition>
      </span>

      <span class="relative block text-sm text-slate-500 mx-auto" :style="{ height: heights.subEn + 'px' }">
        <transition name="fade-stable" mode="out-in">
          <span :key="offers[i].subEn" class="absolute inset-0 block">
            {{ offers[i].subEn }}
          </span>
        </transition>
      </span>
    </p>
  </section>
</template>

<style scoped>
/* Transitions stables (opacity/translate) sans reflow du layout) */
.fade-stable-enter-active, .fade-stable-leave-active { transition: opacity .35s ease }
.fade-stable-enter-from, .fade-stable-leave-to { opacity: 0 }

.fade-up-stable-enter-active, .fade-up-stable-leave-active { transition: opacity .35s ease, transform .35s ease }
.fade-up-stable-enter-from, .fade-up-stable-leave-to { opacity: 0; transform: translateY(.2rem) }

/* Respecte l’accessibilité des personnes sensibles au mouvement */
@media (prefers-reduced-motion: reduce) {
  .fade-stable-enter-active, .fade-stable-leave-active,
  .fade-up-stable-enter-active, .fade-up-stable-leave-active {
    transition: none !important;
  }
}
</style>
