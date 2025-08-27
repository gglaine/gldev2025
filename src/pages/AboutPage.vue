<!-- pages/AboutPage.vue -->
<template>
  <main class="bg-white text-slate-900 antialiased">

    <!-- HERO -->
    <section class="relative px-6 py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300/60">
          🚀 From Idea → Live in Weeks
        </span>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
          Not an Agency. Not a Coder.<br class="hidden sm:block" />
          <span class="underline decoration-cyan-600/60 underline-offset-4">A Digital Craftsman</span>
        </h1>
        <p class="text-lg text-slate-600">
          J’aide les marques et studios à clarifier leur vision — puis je la construis brique par brique :
          identité, UX/UI, code, mise en ligne.
          <br><span class="text-sm text-slate-500">Identity · Interface · Code · Launch.</span>
        </p>
      </div>
    </section>

    <!-- WHY CRAFTSMAN -->
    <section class="px-6 py-12">
      <div class="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
        <article class="p-5 rounded-2xl ring-1 ring-slate-200 bg-slate-50">
          <h3 class="font-semibold">Template</h3>
          <p class="mt-2 text-sm text-slate-700">Rapide & pas cher… mais interchangeable. L’identité se dilue.</p>
        </article>
        <article class="p-5 rounded-2xl ring-1 ring-slate-200 bg-slate-50">
          <h3 class="font-semibold">Agency</h3>
          <p class="mt-2 text-sm text-slate-700">Process lourd, métiers séparés, délais. La cohérence se perd.</p>
        </article>
        <article class="p-5 rounded-2xl ring-2 ring-cyan-300 bg-gradient-to-br from-cyan-50 to-white">
          <h3 class="font-semibold">Craftsman</h3>
          <p class="mt-2 text-sm text-slate-700">Une seule vision, du concept au code. En semaines, pas en mois.</p>
        </article>
      </div>
    </section>

    <!-- STORY (short & human) -->
    <section class="px-6 py-16">
      <div class="max-w-3xl mx-auto space-y-6">
        <h2 class="text-2xl font-bold">Mon approche</h2>
        <p class="text-slate-700 leading-relaxed">
          Je viens d’un profil hybride : design, écriture FR/EN, front-end. J’ai vu comment les projets se
          perdent entre les silos. Mon choix : <strong>aligner</strong> identité, interface et code, avec une
          même exigence — utilité, clarté, vitesse réelle sur mobile.
        </p>
        <p class="text-slate-700 leading-relaxed">
          Concrètement : on clarifie la promesse, on dessine un système visuel qui tient, puis on livre un
          produit propre, maintenable et rapide. Pas d’esbroufe, pas de “stack fétiche” : du pragmatique.
        </p>
      </div>
    </section>

    <!-- METHOD -->
    <section class="px-6 py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-center">Méthode — brique par brique</h2>
        <ol class="mt-8 grid md:grid-cols-4 gap-6">
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">1. Vision</span>
            <h3 class="mt-1 font-semibold">Brand research</h3>
            <p class="mt-2 text-sm text-slate-600">Atelier court, promesse, ton, angle.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">2. Identity</span>
            <h3 class="mt-1 font-semibold">Logo & DA</h3>
            <p class="mt-2 text-sm text-slate-600">Palette, typographies, mini-charte.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">3. Interface</span>
            <h3 class="mt-1 font-semibold">UX/UI & Protos</h3>
            <p class="mt-2 text-sm text-slate-600">Wireframes, maquettes Figma, états & micro-interactions.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">4. Ship</span>
            <h3 class="mt-1 font-semibold">Code & Launch</h3>
            <p class="mt-2 text-sm text-slate-600">Vue/Tailwind, Stripe, SEO, Netlify CI/CD.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- PROOF (concise) -->
    <section class="px-6 py-16">
      <div class="max-w-5xl mx-auto space-y-8">
        <h2 class="text-2xl font-bold text-center">Sélection de projets</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <article class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <h3 class="font-semibold">Storia Télévision</h3>
            <p class="mt-1 text-sm text-slate-600">Boutique-premium pour un producteur majeur. Projet gagné avec maquettes dès la première rencontre.</p>
            <p class="mt-2 text-xs text-slate-500">Identity · UX/UI · Integration</p>
          </article>
          <article class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <h3 class="font-semibold">Funcenter</h3>
            <p class="mt-1 text-sm text-slate-600">Replatform Vue/Tailwind, vidéos, formulaires, SEO. CI/CD et performance mobile.</p>
            <p class="mt-2 text-xs text-slate-500">Replatform · SEO · Performance</p>
          </article>
          <article class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <h3 class="font-semibold">Antishirt</h3>
            <p class="mt-1 text-sm text-slate-600">De la satire YouTube à une marque e-commerce prête à vendre (identité, design, Stripe, prod).</p>
            <p class="mt-2 text-xs text-slate-500">Brand · E-commerce · Launch</p>
          </article>
        </div>
        <p class="text-center">
          <a href="#work" class="text-cyan-700 font-semibold hover:underline">Voir plus de projets ↗</a>
        </p>
      </div>
    </section>

    <!-- MICRO BIO -->
    <section class="px-6 py-12 bg-slate-50">
      <div class="max-w-3xl mx-auto space-y-4">
        <h2 class="text-2xl font-bold">En bref</h2>
        <ul class="space-y-2 text-slate-700">
          <li>FR/EN — j’écris autant que je conçois : contenu, UX writing, narratif produit.</li>
          <li>Stack terrain : Vue 3, Vite, Tailwind, Netlify, Stripe, Decap/Headless CMS.</li>
          <li>Obsession : simplicité utile, perfs mobiles, design qui vieillit bien.</li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="px-6 pb-24">
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <h2 class="text-2xl font-bold">Parlons de votre projet</h2>
        <p class="text-slate-600">Besoin d’un site qui n’a pas l’air d’un template ? Construisons une identité digitale cohérente — et mettons-la en ligne vite.</p>
        <a
          href="#contact-form"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
                 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
        >
          Discutons d’un projet ↗
        </a>
        <p class="text-xs text-slate-500">Réponse sous 24h · Paris & Remote</p>
      </div>
    </section>

    <!-- CONTACT FORM (lazy) -->
    <section id="contact-form" class="scroll-mt-40 md:scroll-mt-48">
      <Suspense>
        <template #default>
          <ContactForm />
        </template>
        <template #fallback>
          <section class="max-w-2xl mx-auto px-6 py-12 text-center text-slate-500">
            <div class="inline-flex items-center gap-2 animate-pulse">
              <span class="h-4 w-4 rounded-full bg-slate-300"></span>
              <span>Chargement du formulaire…</span>
            </div>
          </section>
        </template>
      </Suspense>
    </section>

  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'

const ContactForm = defineAsyncComponent(() => import('../components/ContactForm.vue'))

useHead({
  title: 'À propos — Guillaume Lainé · Digital Craftsman',
  meta: [
    {
      name: 'description',
      content:
        'Profil hybride (design, contenu FR/EN, front-end) pour des sites et identités cohérents : identité, UX/UI, code, SEO, mise en ligne. From Idea → Live in Weeks.'
    },
    { property: 'og:title', content: 'À propos — Guillaume Lainé' },
    { property: 'og:description', content: 'Not an Agency. Not a Coder. A Digital Craftsman who ships your vision.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
