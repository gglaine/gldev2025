<!-- src/pages/case-studies/storyengines/Layout.vue -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import CaseStudyFrame from '@/components/case/CaseStudyFrame.vue'
import CS_TextSection from '@/components/case/CS_TextSection.vue'
import CS_Media       from '@/components/case/CS_Media.vue'
import CS_Subnav      from '@/components/case/CS_Subnav.vue'
import CSProblem      from '@/components/blocks/CSProblem.vue'
import CSResults      from '@/components/blocks/CSResults.vue'
import ProcessSteps   from '@/components/blocks/CSProcessSteps.vue'

const canonicalUrl = 'https://www.guillaumelaine.com/case-studies/storyengines/layout'

useHead({
  title: 'StoryEngines — Design System & Layout',
  meta: [
    { name: 'description', content: 'Grille stricte, hiérarchie typographique, composants Vue/Tailwind réutilisables.' },
    { property: 'og:title', content: 'StoryEngines — Design System & Layout' },
    { property: 'og:image', content: '/og/case-studies/storyengines-layout.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

const problem = {
  title: 'Problème / Enjeu',
  body_fr: "Poser un design system intemporel : grille, tokens, composants modulaires, micro-motion, et une lisibilité impeccable.",
}

const results = {
  title: 'Résultats',
  highlights: [
    { icon:'🧩', text:'Tokens Tailwind (espacements, typographies, couleurs) documentés' },
    { icon:'📐', text:'Grille stricte + rythme vertical → scanning rapide' },
    { icon:'🧱', text:'Composants réutilisables (Hero, Media, Moodboard, ProcessSteps, Metrics)' },
    { icon:'🎞️', text:'Micro-animations AOS-like, focus visibles, a11y conservée' }
  ]
}

const steps = [
  { src:'/cs/storyengines/layout/wireframes.avif', title:'Wireframes', desc:'Structure et flux d’info.' },
  { src:'/cs/storyengines/layout/typescale.avif',  title:'Type scale', desc:'Échelle typographique, modules responsives.' },
  { src:'/cs/storyengines/layout/components.avif', title:'Composants', desc:'Cartes, strip métriques, sections médias.' },
  { src:'/cs/storyengines/layout/specs.avif',      title:'Specs', desc:'Do/Don’t, states, marges, ratios.' }
]
</script>

<template>
  <CaseStudyFrame title="Design System & Layout" description="Grille, tokens, composants, micro-motion">
    <CS_Subnav />

    <CSProblem :block="problem" />

    <CS_Media src="/cs/storyengines/layout/hero.avif" caption="Grille + hiérarchie typographique — sobriété, contraste, précision" />

    <ProcessSteps
      title="Processus"
      :steps="steps"
      variant="cards"
      direction="auto"
      connector="line"
      mediaAspect="1:1"
    />

    <CSResults :block="results" />
  </CaseStudyFrame>
</template>
