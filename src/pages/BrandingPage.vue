<template>
  <section class="py-24 px-6 text-slate-800 max-w-4xl mx-auto">
    <h1 class="text-4xl font-extrabold mb-6">Création d'identité visuelle & branding freelance</h1>
    <p class="text-lg leading-relaxed mb-4">
      En tant que designer freelance, je conçois des logos impactants, des chartes graphiques cohérentes et des univers visuels différenciants.
    </p>
    <p class="text-lg leading-relaxed mb-4">
      Je vous aide à définir l'ADN de votre marque, vos couleurs, vos typographies et votre langage visuel pour une présence marquante en ligne comme en print.
    </p>
    <ul class="list-disc list-inside text-base text-gray-700 space-y-2">
      <li>Logo & déclinaisons</li>
      <li>Charte graphique complète</li>
      <li>Supports réseaux sociaux</li>
      <li>Design system adapté à vos besoins</li>
    </ul>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Branding freelance – Logos et identité visuelle | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content: 'Freelance en branding et design graphique, je crée des logos, chartes visuelles et univers de marque différenciants. Pour startups, PME ou indépendants.'
    },
    {
      property: 'og:title',
      content: 'Branding freelance – Logos et identité visuelle'
    },
    {
      property: 'og:description',
      content: 'Freelance en branding et design graphique, je crée des logos, chartes visuelles et univers de marque différenciants.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>