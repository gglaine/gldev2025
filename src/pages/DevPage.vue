<template>
  <main class="bg-white text-slate-900 antialiased">
    <!-- HERO -->
    <section class="relative px-6 py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300/60">
          🧩 Vue 3 · Tailwind · Netlify · Stripe
        </span>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
          Développement de sites & apps <span class="underline decoration-cyan-600/60 underline-offset-4">Vue.js / Tailwind</span>
        </h1>
        <p class="text-lg text-slate-600">
          Front-end moderne, propre et rapide — pensé pour la conversion, l’accessibilité et la maintenance.
          <br><span class="text-sm text-slate-500">Modern, fast front-end — built for conversion, accessibility, and long-term care.</span>
        </p>
        <p class="text-xs text-slate-500">🚀 From Idea → Live in Weeks · Identity → UX/UI → Code → Launch</p>
      </div>
    </section>

    <!-- VALUE / OUTCOMES -->
    <section class="px-6 py-16">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
        <article class="p-5 rounded-2xl ring-1 ring-slate-200 bg-white">
          <h3 class="font-semibold">Vite en prod</h3>
          <p class="mt-2 text-sm text-slate-700">Build minimal, SSR/SSG si besoin, CI/CD Netlify. <em>Semaines, pas mois.</em><br>
            <span class="text-xs text-slate-500">Ship in weeks, not months.</span></p>
        </article>
        <article class="p-5 rounded-2xl ring-1 ring-slate-200 bg-white">
          <h3 class="font-semibold">Perfs réelles</h3>
          <p class="mt-2 text-sm text-slate-700">Lighthouse ≥ 90 mobile, images responsives, LCP < 2.5s, CLS < 0.1.</p>
        </article>
        <article class="p-5 rounded-2xl ring-1 ring-slate-200 bg-white">
          <h3 class="font-semibold">Cohérence de marque</h3>
          <p class="mt-2 text-sm text-slate-700">UI alignée à votre identité, micro-interactions utiles, SEO propre.</p>
        </article>
      </div>
    </section>

    <!-- SERVICES / WHAT I BUILD -->
    <section class="px-6 pb-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-center">Ce que je construis</h2>
        <ul class="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Sites vitrines ultra-rapides (SSG/ISR)</li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Applications Vue + Firestore en temps réel</li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Formulaires & parcours Stripe (paiements, paniers)</li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Animations sobres & transitions (motion utile)</li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Optimisation SEO technique & Open Graph</li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">Intégrations pragmatiques (Guidap, Cloudinary…)</li>
        </ul>
      </div>
    </section>

    <!-- METHOD -->
    <section class="px-6 py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-center">Méthode — brique par brique</h2>
        <ol class="mt-8 grid md:grid-cols-4 gap-6">
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">1. Clarifier</span>
            <h3 class="mt-1 font-semibold">Scope & contenu</h3>
            <p class="mt-2 text-sm text-slate-600">Objectifs, parcours, sources de vérité.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">2. Esquisser</span>
            <h3 class="mt-1 font-semibold">Wireframes & UI</h3>
            <p class="mt-2 text-sm text-slate-600">Figma, design system, états & acces.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">3. Intégrer</span>
            <h3 class="mt-1 font-semibold">Vue/Tailwind</h3>
            <p class="mt-2 text-sm text-slate-600">Composants propres, tests, perfs.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">4. Ship</span>
            <h3 class="mt-1 font-semibold">CI/CD & SEO</h3>
            <p class="mt-2 text-sm text-slate-600">Netlify, analytics events, suivi.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- STACK BADGES -->
    <section class="px-6 py-12">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold">Stack terrain</h2>
        <div class="mt-5 flex flex-wrap justify-center gap-2">
          <span v-for="t in stack" :key="t" class="px-3 py-1 text-xs font-semibold rounded-full ring-1 ring-slate-200 bg-white text-slate-700">
            {{ t }}
          </span>
        </div>
        <p class="mt-3 text-xs text-slate-500">No silver bullets — juste la brique adaptée au besoin.</p>
      </div>
    </section>

    <!-- MICRO FAQ -->
    <section class="px-6 pb-8">
      <div class="max-w-4xl mx-auto space-y-3">
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Pourquoi pas un thème WordPress ? / Why not a WP theme?</summary>
          <p class="mt-2 text-sm text-slate-700">
            Si un template suffit, je le dis. Mais le plus souvent, il dilue l’identité et bride l’évolution.
            Vue/Tailwind donne un contrôle fin, des perfs réelles, et un design fidèle à votre marque.
          </p>
        </details>
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Peut-on éditer le contenu facilement ?</summary>
          <p class="mt-2 text-sm text-slate-700">
            Oui — CMS headless (Decap) en mode collections/roles, images responsives via Cloudinary, et docs claires.
          </p>
        </details>
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Délais et process ? / Timeline & process?</summary>
          <p class="mt-2 text-sm text-slate-700">
            Appel de cadrage → maquettes → intégration → mise en ligne. La plupart des vitrines se livrent en 2–6 semaines selon contenu.
          </p>
        </details>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 pb-20 text-center">
      <a
        href="/contact"
        class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
               bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
               focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
      >
        Démarrer un projet · Start your project
      </a>
      <p class="mt-2 text-xs text-slate-500">Réponse sous 24h · Paris & Remote</p>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const stack = [
  'Vue 3', 'Vite', 'Tailwind CSS', 'TypeScript',
  'Pinia', 'VueUse', 'Vue Router',
  'Netlify CI/CD', 'SSR/SSG/ISR',
  'Stripe', 'Firestore', 'Guidap',
  'Decap CMS (headless)', 'Cloudinary',
  'Lighthouse ≥ 90', 'WAI-ARIA'
]

useHead({
  title: 'Développeur Vue.js freelance — Sites & apps modernes | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content:
        'Développement front-end moderne avec Vue 3 & Tailwind. Sites rapides (SSG), apps temps réel (Firestore), parcours Stripe, SEO & perfs mobile. From Idea → Live in Weeks.'
    },
    { property: 'og:title', content: 'Développeur Vue.js freelance — Moderne & performant' },
    {
      property: 'og:description',
      content:
        'Vue 3, Tailwind, Netlify, Stripe. Conversion, accessibilité, performance — une seule vision du concept au code.'
    },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
