// pages/Contact.vue
<template>
  <section class="py-24 px-6 text-slate-800 max-w-2xl mx-auto">
    <h1 class="text-4xl font-extrabold mb-6">Me contacter</h1>
    <p class="text-lg leading-relaxed mb-4">
      Un projet en tête ? Une idée à tester ? Parlons-en !
    </p>
    <p class="text-base mb-6">
      Je suis disponible pour des missions en freelance sur des projets créatifs, techniques ou hybrides.
      Utilisez le formulaire de contact ou écrivez-moi directement à <a href="mailto:hello@guillaumelaine.com" class="text-blue-600 underline">hello@guillaumelaine.com</a>.
    </p>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contact freelance design & développement | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content: 'Contactez-moi pour vos projets de branding, design ou développement web. Réponse rapide assurée.'
    },
    {
      property: 'og:title',
      content: 'Contact freelance design & développement'
    },
    {
      property: 'og:description',
      content: 'Discutons de votre projet digital : site web, identité visuelle, automatisation ou app Vue.js.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>