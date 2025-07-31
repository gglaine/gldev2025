<template>
  <section class="py-24 px-6 text-slate-800 max-w-4xl mx-auto">
    <h1 class="text-4xl font-extrabold mb-6">Développement de sites et apps Vue.js / Tailwind</h1>
    <p class="text-lg leading-relaxed mb-4">
      Spécialiste du front-end moderne, je développe des interfaces performantes avec Vue 3, Tailwind CSS et des intégrations Firebase / Stripe.
    </p>
    <ul class="list-disc list-inside text-base text-gray-700 space-y-2">
      <li>Sites vitrines ultra-rapides</li>
      <li>Applications Vue + Firestore en temps réel</li>
      <li>Animations, transitions et expériences immersives</li>
      <li>Optimisation SEO & performance Lighthouse</li>
    </ul>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Développeur Vue.js freelance – Sites modernes & performants | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content: 'Freelance Vue.js, je développe des sites rapides, animés et connectés à Firestore. Parfait pour les entrepreneurs, startups et créateurs exigeants.'
    },
    {
      property: 'og:title',
      content: 'Développeur Vue.js freelance – Sites modernes & performants'
    },
    {
      property: 'og:description',
      content: 'Sites Vue.js rapides, animés, connectés à Firestore ou Stripe. Freelance expert en front-end moderne.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>
