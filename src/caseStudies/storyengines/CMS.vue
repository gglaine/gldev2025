<!-- src/pages/case-studies/storyengines/CMS.vue -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import CaseStudyFrame from '@/components/case/CaseStudyFrame.vue'
import CS_TextSection from '@/components/case/CS_TextSection.vue'
import CS_Media       from '@/components/case/CS_Media.vue'
import CS_Subnav      from '@/components/case/CS_Subnav.vue'
import CSProblem      from '@/components/blocks/CSProblem.vue'
import CSResults      from '@/components/blocks/CSResults.vue'
import ProcessSteps   from '@/components/blocks/CSProcessSteps.vue'

const canonicalUrl = 'https://www.guillaumelaine.com/case-studies/storyengines/cms'

useHead({
  title: 'StoryEngines — CMS (Decap) & Workflow',
  meta: [
    { name: 'description', content: 'Decap CMS + Netlify Identity : édition Markdown, assets gérés, previews et CI/CD.' },
    { property: 'og:title', content: 'StoryEngines — CMS (Decap) & Workflow' },
    { property: 'og:image', content: '/og/case-studies/storyengines-cms.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

const problem = {
  title: 'Problème / Enjeu',
  body_fr: "Donner au client une édition simple (Markdown + assets), des previews fiables, et un pipeline Netlify sans friction.",
}

const results = {
  title: 'Résultats',
  highlights: [
    { icon:'📝', text:'Édition Markdown avec front-matter (productions, pages)' },
    { icon:'🔐', text:'Netlify Identity : auth simple, preview protégée' },
    { icon:'⚙️', text:'CI/CD Netlify : builds rapides, rollback facile' },
    { icon:'🗂️', text:'Arborescence claire des médias ; noms de fichiers normalisés' }
  ]
}

const steps = [
  { src:'/cs/storyengines/cms/collections.avif', title:'Collections', desc:'Schemas Decap, champs front-matter.' },
  { src:'/cs/storyengines/cms/preview.avif',     title:'Preview', desc:'Preview gated via Identity, QA rapide.' },
  { src:'/cs/storyengines/cms/deploy.avif',      title:'CI/CD', desc:'Build & déploiement Netlify automatisés.' }
]
</script>

<template>
  <CaseStudyFrame title="CMS (Decap) & Workflow" description="Markdown, previews, CI/CD Netlify">
    <CS_Subnav />

    <CSProblem :block="problem" />

    <CS_Media src="/cs/storyengines/cms/hero.avif" caption="Decap CMS — collections, preview, pipeline CI/CD" />

    <ProcessSteps
      title="Processus"
      :steps="steps"
      variant="cards"
      direction="auto"
      connector="arrow"
      mediaAspect="16:9"
    />

    <CS_TextSection title="Sécurité & qualité">
      <ul class="list-disc pl-5 text-sm space-y-1">
        <li>Previews restreintes (Identity), validation avant merge</li>
        <li>Formats d’images AVIF/WebP servis en priorité</li>
        <li>Règles de naming + assets folders → zéro chaos</li>
      </ul>
    </CS_TextSection>

    <CSResults :block="results" />
  </CaseStudyFrame>
</template>
