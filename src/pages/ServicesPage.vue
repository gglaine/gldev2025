<template>
  <section class="py-24 px-6 text-slate-800 max-w-4xl mx-auto">
    <h1 class="text-5xl font-black leading-tight mb-6">
      Design, code, stratégie<br /> pour des expériences uniques
    </h1>
    <p class="text-lg leading-relaxed mb-8">
      Je conçois des produits digitaux sur mesure, alliant identité visuelle forte, ergonomie, animations immersives et technologies performantes. Chaque projet est unique et pensé pour atteindre vos objectifs de manière durable.
    </p>
    <a href="/contact" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300">
      🚀 Discutons de votre projet
    </a>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Services freelance – Design, développement, automatisation | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mes services de freelance : design UI, branding, développement Vue.js, automatisation IA. Une approche sur mesure, créative et efficace.'
    },
    {
      property: 'og:title',
      content: 'Services freelance – Design, développement, automatisation'
    },
    {
      property: 'og:description',
      content: 'Freelance full-stack créatif : branding, sites Vue.js, automatisation IA, stratégie digitale et interfaces animées.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>