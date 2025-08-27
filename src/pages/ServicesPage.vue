<!-- pages/ServicesPage.vue (or /services/index.vue) -->
<template>
  <main class="bg-white text-slate-900 antialiased">
    <!-- HERO -->
    <section class="py-24 px-6 max-w-5xl mx-auto text-center">
      <h1 class="text-5xl font-black leading-tight">
        Design, code, stratégie<br /> pour des expériences digitales uniques
      </h1>
      <p class="text-lg text-slate-600 mt-4">
        Je conçois des produits sur mesure — identité, UX/UI, code — pensés pour durer et évolutifs.
        <br><span class="text-sm text-slate-500">Custom brand, UX/UI & code — built to last.</span>
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink
          to="/services/branding"
          class="rounded-full px-4 py-2 text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/70"
          >🏷️ Branding</RouterLink>
        <RouterLink
          to="/services/dev"
          class="rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/70"
          >🧩 Dev (Vue/Tailwind)</RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-slate-200 bg-white hover:bg-slate-50 text-slate-800"
          >📬 Parler d’un projet · Let’s talk</RouterLink>
      </div>
    </section>

    <!-- INTRO STRIP -->
    <section class="px-6 pb-8 -mt-6">
      <div class="max-w-5xl mx-auto rounded-2xl bg-slate-50/70 border border-slate-200 p-6 text-center">
        <h2 class="text-2xl font-extrabold tracking-tight mb-2">Design & développement vraiment sur-mesure</h2>
        <p class="text-slate-600">
          Des sites élégants et solides — du logo à la dernière ligne de code.
          <br><span class="text-xs text-slate-500">Not a template. Not an agency. A craftsman’s build.</span>
        </p>
      </div>
    </section>

    <!-- SERVICE SWITCHER / CHOOSE YOUR PATH -->
    <section class="px-6 py-14">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-xl font-bold mb-5 text-center">Choisissez votre besoin — Choose your path</h3>
        <div class="grid md:grid-cols-2 gap-5">
          <RouterLink
            to="/services/branding"
            class="group rounded-2xl border border-slate-200 p-6 bg-white flex gap-4 hover:border-cyan-300 transition"
          >
            <div class="text-2xl">🏷️</div>
            <div>
              <h4 class="text-lg font-semibold group-hover:text-cyan-700">Identité & Branding</h4>
              <p class="text-sm text-slate-600 mt-1">
                Logos, système visuel, pack OG/social. Une identité claire qui tient dans le temps.
                <span class="text-[11px] text-slate-500 block">Logos, visual system, social kit.</span>
              </p>
              <span class="mt-2 inline-block text-cyan-700 text-sm font-semibold">Voir le service ↗</span>
            </div>
          </RouterLink>

          <RouterLink
            to="/services/dev"
            class="group rounded-2xl border border-slate-200 p-6 bg-white flex gap-4 hover:border-blue-300 transition"
          >
            <div class="text-2xl">🧩</div>
            <div>
              <h4 class="text-lg font-semibold group-hover:text-blue-700">Développement (Vue/Tailwind)</h4>
              <p class="text-sm text-slate-600 mt-1">
                Sites & apps rapides, SEO propre, Stripe/Firestore, CI/CD Netlify.
                <span class="text-[11px] text-slate-500 block">Fast, accessible, maintainable.</span>
              </p>
              <span class="mt-2 inline-block text-blue-700 text-sm font-semibold">Voir le service ↗</span>
            </div>
          </RouterLink>

          <!-- Placeholder for future service -->
          <div class="rounded-2xl border border-dashed border-slate-200 p-6 bg-slate-50/50">
            <div class="text-sm text-slate-500">Bientôt : Automatisation / IA appliquée · Coming soon</div>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILED OVERVIEW (keeps your original sections, condensed) -->
    <section class="px-6 py-14 bg-white text-slate-900">
      <div class="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <!-- Dev -->
        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🧩 Développement sur-mesure</h3>
          <p class="text-slate-700">
            Pas de thème générique. Code propre, responsive au pixel, composants réutilisables. Optimisé pour vitesse, autonomie, long terme.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Vue 3, Vite, Tailwind, CMS léger</li>
            <li>Perfs réelles (Lighthouse ≥ 90 mobile)</li>
            <li>Intégrations Stripe / Firestore / APIs</li>
          </ul>
          <RouterLink to="/services/dev" class="text-cyan-700 text-sm font-semibold hover:underline">Détails & cas ↗</RouterLink>
        </article>

        <!-- UI -->
        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🎨 UI Design & système visuel</h3>
          <p class="text-slate-700">Pas juste du beau : un système. Composants, palettes, états, guidelines — tout s’aligne, tout respire.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Design system (tokens, variantes, typo)</li>
            <li>Accessibilité AA d’office</li>
            <li>Assets retina + pack OG/social</li>
          </ul>
          <RouterLink to="/services/branding" class="text-cyan-700 text-sm font-semibold hover:underline">Voir Branding ↗</RouterLink>
        </article>

        <!-- Brand -->
        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🏷️ Identité de marque</h3>
          <p class="text-slate-700">Identités durables, web & print — prêtes pour motion, merch, presse.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Logo SVG décliné (clair/sombre/mono)</li>
            <li>Grille typographique & rythme</li>
            <li>Palette accessible + kit Figma livré</li>
          </ul>
          <RouterLink to="/services/branding" class="text-cyan-700 text-sm font-semibold hover:underline">Détails & livrables ↗</RouterLink>
        </article>

        <!-- UX/Conversion -->
        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🧭 UX, contenu & conversion</h3>
          <p class="text-slate-700">On aligne l’intention et l’interface. Moins de friction, parcours clairs, mesure de la conversion.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Wireframes, protos & tests rapides</li>
            <li>Formulaires UX + analytics events</li>
            <li>SEO technique, Open Graph, Schema.org</li>
          </ul>
          <RouterLink to="/services/dev" class="text-cyan-700 text-sm font-semibold hover:underline">Exemples & process ↗</RouterLink>
        </article>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="px-6 py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-extrabold mb-6 text-center">Méthode simple, résultats nets</h3>
        <ol class="grid gap-6 md:grid-cols-3">
          <li class="rounded-2xl border border-slate-200 bg-white p-6">
            <p class="text-sm font-semibold text-slate-500">Étape 1</p>
            <p class="text-lg font-bold">Cadrage & priorités</p>
            <p class="text-slate-600 mt-2">Atelier court, objectifs mesurables, périmètre clair.</p>
          </li>
          <li class="rounded-2xl border border-slate-200 bg-white p-6">
            <p class="text-sm font-semibold text-slate-500">Étape 2</p>
            <p class="text-lg font-bold">Design & prototypage</p>
            <p class="text-slate-600 mt-2">Wireframes → UI → proto cliquable. Tests rapides.</p>
          </li>
          <li class="rounded-2xl border border-slate-200 bg-white p-6">
            <p class="text-sm font-semibold text-slate-500">Étape 3</p>
            <p class="text-lg font-bold">Dev & livraison continue</p>
            <p class="text-slate-600 mt-2">Vue/Tailwind, Netlify CI/CD, perfs mobiles. Handover.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- TRUST / VALUE PROPS -->
    <section class="px-6 py-12">
      <div class="max-w-5xl mx-auto grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 p-5 bg-white">
          <p class="text-base font-semibold">✅ Accessibilité AA</p>
          <p class="text-slate-600 text-sm mt-1">Contrastes, focus states, sémantique, formulaires.</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-5 bg-white">
          <p class="text-base font-semibold">⚡ Perfs réelles</p>
          <p class="text-slate-600 text-sm mt-1">Budgets Web Vitals, Lighthouse ≥ 90 mobile.</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-5 bg-white">
          <p class="text-base font-semibold">🧠 Autonomie</p>
          <p class="text-slate-600 text-sm mt-1">CMS léger + kit Figma + guidelines.</p>
        </div>
      </div>
    </section>

    <!-- STACK -->
    <section class="px-6 pb-4">
      <div class="max-w-5xl mx-auto">
        <ul class="flex flex-wrap gap-2 text-sm">
          <li v-for="t in stack" :key="t" class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">{{ t }}</li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-6 pt-2 pb-24">
      <div class="max-w-5xl mx-auto text-center">
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
                 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
        >
          Discutons d’un projet ↗
        </RouterLink>
        <p class="mt-2 text-xs text-slate-500">Réponse sous 24h · Paris & Remote</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const stack = [
  'Vue 3','Vite','Tailwind','TypeScript',
  'Netlify CI/CD','Decap CMS','Cloudinary',
  'Stripe','Firestore','Schema.org','WAI-ARIA'
]

useHead({
  title: 'Services — Design, branding & développement | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content:
        'Index des services : identité & branding, UI/UX & design system, développement Vue/Tailwind, SEO & performance. Not an agency, not a template — a craftsman build.'
    },
    { property: 'og:title', content: 'Services — Guillaume Lainé' },
    { property: 'og:description', content: 'Branding · UX/UI · Vue/Tailwind · Stripe/Firestore · Netlify' },
    { name: 'robots', content: 'index, follow' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Branding & Identité', url: 'https://www.guillaumelaine.com/services/branding' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Développement (Vue/Tailwind)', url: 'https://www.guillaumelaine.com/services/dev' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'UX, contenu & conversion', url: 'https://www.guillaumelaine.com/services' } }
      ]
    })
  }]
})
</script>
