<!-- components/ProcessUnderlineLoop.vue -->
<template>
  <span
    class="relative inline-block align-baseline"
    :aria-label="ariaLabel"
  >
    <!-- le texte -->
    <span class="relative z-10 text-4xl font-semibold tracking-tight">
      {{ text }}
    </span>

    <!-- le surligneur animé -->
<span
  class="pointer-events-none absolute left-0 right-0 -bottom-[0.08em] h-[0.5em] rounded-full opacity-80
         bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200
         will-change-transform underline-anim"
  :style="styleVars"
  aria-hidden="true"
/>

  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  durationMs?: number   // durée d’un cycle complet
  colorFrom?: string
  colorVia?: string
  colorTo?: string
  ariaLabel?: string
}>(), {
  text: 'Design > Code > Ship',
  durationMs: 2800,
  colorFrom: 'rgb(165 243 252)', // cyan-200
  colorVia:  'rgb(103 232 249)', // cyan-300
  colorTo:   'rgb(165 243 252)', // cyan-200
  ariaLabel: 'Mouvement de soulignement'
})

const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

const styleVars = computed(() => ({
  '--dur': `${props.durationMs}ms`,
  backgroundImage: `linear-gradient(90deg, ${props.colorFrom}, ${props.colorVia}, ${props.colorTo})`
}) as Record<string, string>)
</script>

<style scoped>
/* Animation : dessiner (scaleX 0→1), tenir, puis fade+boucle */
@keyframes gl-underline {
  0%   { transform: scaleX(0); opacity: .0; transform-origin: left center; }
  10%  { opacity: .9; }
  55%  { transform: scaleX(1); opacity: .9; transform-origin: left center; }
  75%  { transform: scaleX(1); opacity: .9; }        /* petite pause pleine */
  100% { transform: scaleX(0); opacity: 0; transform-origin: right center; } /* repli rapide -> boucle */
}

/* Accessibilité : pas d’animation si reduce */

.underline-anim {
  animation: gl-underline var(--dur, 2800ms) ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .underline-anim {
    animation: none !important;
  }
}
</style>
