<template>
  <article
    role="listitem"
    :class="[
      'group relative h-full rounded-2xl transition will-change-transform hover:-translate-y-0.5 focus-within:ring-2',
      isDark
        ? 'border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg focus-within:ring-cyan-400/50'
        : 'border border-slate-200 bg-white shadow-sm hover:shadow-md focus-within:ring-cyan-500/40'
    ]"
  >
    <!-- Popular badge (optional) -->
    <span
      v-if="popular"
      :class="[
        'absolute -top-2 -right-2 z-10 rounded-full text-[11px] leading-none font-bold px-2 py-1 shadow',
        isDark ? 'bg-amber-400 text-amber-950' : 'bg-amber-300 text-amber-900'
      ]"
      aria-hidden="true"
    >
      Populaire
    </span>

    <div class="p-6 flex h-full flex-col gap-4 text-left">
      <!-- Title + audience chip -->
      <div class="space-y-2">
        <h3 :class="['text-xl font-extrabold tracking-tight leading-snug',
                     isDark ? 'text-cyan-300' : 'text-slate-900']">
          {{ title }}
        </h3>
        <p v-if="audience"
           :class="[
             'inline-flex items-center gap-1 rounded-full text-[11px] font-medium px-2 py-1',
             isDark ? 'bg-slate-200/10 text-slate-300' : 'bg-slate-100 text-slate-700'
           ]">
          🎯 {{ audience }}
        </p>
      </div>

      <!-- Description -->
      <p :class="['text-sm leading-relaxed', isDark ? 'text-slate-200/90' : 'text-slate-700']">
        {{ description }}
      </p>

      <!-- Price -->
      <div class="mt-auto">
        <p :class="['text-xs italic', isDark ? 'text-slate-400' : 'text-slate-500']">
          {{ price }}
        </p>
      </div>

      <!-- Includes -->
      <details v-if="hasIncludes"
               :class="[
                 'group/open mt-3 rounded-xl border',
                 isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'
               ]">
        <summary
          :class="[
            'flex cursor-pointer select-none items-center justify-between gap-2 px-4 py-2 text-sm font-semibold rounded-xl focus:outline-none',
            isDark
              ? 'text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400/60'
              : 'text-slate-900 hover:bg-white focus-visible:ring-2 focus-visible:ring-cyan-500'
          ]"
        >
          <span>{{ ctaLabel }}</span>
          <span class="transition group-open:rotate-180" aria-hidden="true">⌄</span>
        </summary>

        <ul :class="['px-4 pb-4 pt-2 space-y-2 text-sm',
                     isDark ? 'text-slate-200/90' : 'text-slate-700']">
          <li v-for="(item, i) in includesToShow" :key="i" class="flex items-start gap-2">
            <span aria-hidden="true">✅</span>
            <span>{{ item }}</span>
          </li>
          <li v-if="truncated" class="flex items-start gap-2 opacity-80">
            <span aria-hidden="true">➕</span>
            <span>{{ includes.length - maxVisible }} autres éléments…</span>
          </li>
        </ul>
      </details>

      <!-- Fallback CTA (button or link) -->
      <component
        v-else
        :is="href ? 'a' : 'button'"
        :href="href || undefined"
        :target="href ? '_blank' : undefined"
        rel="noopener"
        type="button"
        @click="!href && $emit('request-details')"
        :class="[
          'mt-3 w-fit rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none',
          isDark
            ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
            : 'text-white bg-slate-900 hover:bg-black focus-visible:ring-2 focus-visible:ring-cyan-500'
        ]"
      >
        {{ ctaLabel }}
      </component>
    </div>

    <!-- Subtle halo -->
    <div :class="[
      'pointer-events-none absolute inset-0 rounded-2xl ring-0 transition',
      isDark ? 'group-hover:ring-2 group-hover:ring-cyan-400/10' : 'group-hover:ring-2 group-hover:ring-cyan-500/10'
    ]"></div>
  </article>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },

  audience: { type: String, default: '' },
  popular: { type: Boolean, default: false },
  includes: { type: Array, default: () => [] },
  ctaLabel: { type: String, default: 'Voir ce que ça inclut' },
  maxVisible: { type: Number, default: 6 },
  href: { type: String, default: '' },

  // 'auto' (default) sniffs background; or force 'dark' / 'light'
  variant: { type: String, default: 'auto', validator: v => ['auto','dark','light'].includes(v) }
})

defineEmits(['request-details'])

const cardEl = ref(null)
const resolved = ref/** @type {'dark'|'light'} */('dark') // safe default for your current layout

onMounted(() => {
  if (props.variant !== 'auto') {
    resolved.value = props.variant
    return
  }
  try {
    // Walk up to find the first element with a non-transparent background
    let el = cardEl.value?.parentElement || cardEl.value
    let bg = 'rgba(0,0,0,0)'
    while (el) {
      const cs = window.getComputedStyle(el)
      bg = cs.backgroundColor || 'rgba(0,0,0,0)'
      // If it has any opacity > 0, consider it
      if (bg && !/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/.test(bg)) break
      el = el.parentElement
    }
    resolved.value = isColorDark(bg) ? 'dark' : 'light'
  } catch {
    resolved.value = 'dark'
  }
})

const isDark = computed(() => (props.variant === 'auto' ? resolved.value : props.variant) === 'dark')
const hasIncludes = computed(() => Array.isArray(props.includes) && props.includes.length > 0)
const truncated = computed(() => Array.isArray(props.includes) && props.includes.length > props.maxVisible)
const includesToShow = computed(() => (Array.isArray(props.includes) ? props.includes : []).slice(0, props.maxVisible))

/** crude luminance check from computed CSS color string */
function isColorDark(color) {
  // supports rgb/rgba or hex (#rrggbb / #rgb)
  const toRgb = (c) => {
    if (!c) return [0,0,0,0]
    if (c.startsWith('#')) {
      const hex = c.slice(1)
      const v = hex.length === 3
        ? hex.split('').map(h => parseInt(h + h, 16))
        : [hex.slice(0,2), hex.slice(2,4), hex.slice(4,6)].map(h => parseInt(h, 16))
      return [v[0]||0, v[1]||0, v[2]||0, 1]
    }
    const m = c.match(/rgba?\(([^)]+)\)/)
    if (!m) return [0,0,0,0]
    const [r,g,b,a=1] = m[1].split(',').map(v => parseFloat(v.trim()))
    return [r,g,b,a]
  }
  const [r,g,b,a] = toRgb(color)
  if (a === 0) return true // transparent → treat as dark to be safe
  // relative luminance
  const srgb = [r,g,b].map(v => v/255).map(v => (v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4)))
  const L = 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2]
  return L < 0.5
}
</script>

<style scoped>
/* no global div:hover overrides; hover handled by utility classes */
</style>
