<!-- src/pages/case-studies/storyengines/SEO.vue -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import CaseStudyFrame from '@/components/case/CaseStudyFrame.vue'
import CS_TextSection from '@/components/case/CS_TextSection.vue'
import CS_Media       from '@/components/case/CS_Media.vue'
import CS_Subnav      from '@/components/case/CS_Subnav.vue'
import CSProblem      from '@/components/blocks/CSProblem.vue'
import CSResults      from '@/components/blocks/CSResults.vue'
import CS_MetricsStrip from '@/components/case/CS_MetricStrip.vue'

const canonicalUrl = 'https://www.guillaumelaine.com/case-studies/storyengines/seo'

useHead({
  title: 'StoryEngines — SEO & Performance',
  meta: [
    { name: 'description', content: 'Balises sémantiques, OG/Twitter, sitemap, AVIF/WebP, CWV : LCP/CLS/INP.' },
    { property: 'og:title', content: 'StoryEngines — SEO & Performance' },
    { property: 'og:image', content: '/og/case-studies/storyengines-seo.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

const problem = {
  title: 'Problème / Enjeu',
  body_fr: "Mettre en place un SEO technique propre et améliorer les Core Web Vitals sur mobile, sans gonfler le bundle.",
}

const results = {
  title: 'Résultats',
  highlights: [
    { icon:'⚡️', text:'Pagespeed mobile 90+ ; LCP/INP stables après optimisations' },
    { icon:'🗺️', text:'Canonical, sitemap, métas OG/Twitter, JSON-LD CreativeWork' },
    { icon:'🖼️', text:'Images AVIF/WebP + tailles explicites → CLS réduit' },
    { icon:'🧼', text:'Tailwind v4 purge + composants lean → bloat minimal' }
  ]
}
</script>

<template>
  <CaseStudyFrame title="SEO & Performance" description="SEO technique, métadonnées, Core Web Vitals">
    <CS_Subnav />

    <CSProblem :block="problem" />

    <CS_Media src="/cs/storyengines/seo/hero.avif" caption="Images AVIF/WebP, Head tags, JSON-LD — base SEO solide" />

    <CS_TextSection title="Optimisations clés">
      <ul class="list-disc pl-5 text-sm space-y-1">
        <li>Head: titles, descriptions, OG/Twitter, canonical</li>
        <li>Schema.org CreativeWork + éventuels Organization/Person</li>
        <li>Images responsives (AVIF/WebP), dimensions explicites, lazy-loading</li>
        <li>Audit CWV → itérations jusqu’à stabilité LCP/INP</li>
      </ul>
    </CS_TextSection>

    <CS_MetricsStrip :items="[
      { label: 'Pagespeed (mobile)', value: '90+' },
      { label: 'LCP mobile', value: '↘︎ stable' },
      { label: 'INP', value: '↘︎ stable' }
    ]" />

    <CSResults :block="results" />
  </CaseStudyFrame>
</template>
