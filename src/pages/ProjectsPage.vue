<!-- pages/ProjectsPage.vue -->
<template>
  <main class="py-20 px-6 text-slate-800 bg-gradient-to-b from-white to-slate-50">
    <header class="max-w-4xl mx-auto text-center space-y-2 mb-12">
      <h1 class="text-4xl font-extrabold">Projets & études de cas</h1>
      <p class="text-slate-600">Une sélection de travaux récents : branding, dev, UI/UX.</p>
    </header>

    <div class="space-y-20 max-w-5xl mx-auto">
      <CaseStudyRow v-for="p in projects" :key="p.title" :project="p" />
    </div>
  </main>
</template>

<script setup>
import CaseStudyRow from '../components/CaseStudyRow.vue'
import { useHead } from '@vueuse/head'

const projects = [
  {
     slug: 'storyengines',
    title: 'StoryEngines',
    client: 'StoryEngines',
    year: '2025',
    url: 'https://www.storyengines.tv',
    poster: '/previews/storyengines-960x600.jpg',
    summary: 'Site vitrine premium pour une société de production : typo ciné, DA sur-mesure, logo dédié.',
    stack: ['Vue.js','Tailwind','Decap CMS','Netlify Identity','SEO optimisé'],
    flip: false,
    // optional: add a short "impact" line your CaseStudyRow can display if supported:
    impact: 'Positionnement haut de gamme, site live en quelques semaines.'
  },
  {
     slug: 'funcenter',
    title: 'Funcenter',
    client: 'Funcenter',
    year: '2025',
    url: 'https://www.funcenter-lacduder.com',
    poster: '/previews/funcenter-960x600.jpg',
    summary: 'Refonte complète d’un club nautique : nouvelles vidéos, UI modernisée, formulaires, refonte logo.',
    stack: ['Vue.js','Tailwind','Video','SEO avancé','Netlify CI/CD'],
    flip: true,
    impact: 'Amélioration SEO & conversion (devis / réservations).'
  },
  // Optionally expose Antishirt as “proof of ecosystem shipping”
  {
     slug: 'antishirt',
    title: 'Antishirt',
    client: 'Antishirt',
    year: '2025',
    url: 'https://antishirt.fr', // update if different
    poster: '/previews/antishirt-960x600.jpg', // add asset if you have one
    summary: 'De la satire YouTube à une marque e-commerce prête à vendre : identité, design, Stripe, production.',
    stack: ['Brand','Vue.js','Tailwind','Stripe','Cloudinary'],
    flip: false,
    impact: 'Écosystème complet construit en mode sprint.'
  }
]

useHead({
  title: 'Projets – Guillaume Lainé',
  meta: [
    { name: 'description', content: 'Portfolio : branding, UI/UX, développement Vue/Tailwind, SEO.' }
  ]
})
</script>
