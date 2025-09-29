<!-- components/ServicesSection.vue -->
<template>
  <section id="services" class="py-28 px-6 bg-white text-slate-900">
    <div class="max-w-6xl mx-auto space-y-16">

      <!-- Header -->
      <header class="text-center space-y-4">
        <h2 class="text-4xl font-extrabold tracking-tight">
          Design & développement <span class="underline decoration-cyan-600/60 underline-offset-4">vraiment sur-mesure</span>
        </h2>
        <p class="text-lg text-slate-600">
          L’antidote aux templates génériques et aux process d’agence surdimensionnés : une seule vision, du concept au code.
        </p>
        <p class="text-xs text-slate-500">🚀 From Idea → Live in Weeks · Identity · UX/UI · Code · Launch</p>
      </header>

      <!-- Education Strip: Template vs Agency vs Craftsman -->
      <div class="grid sm:grid-cols-3 gap-4">
        <div class="p-5 rounded-2xl ring-1 ring-slate-200 bg-slate-50">
          <h3 class="font-semibold text-slate-800">Template</h3>
          <p class="mt-2 text-sm text-slate-600">Rapide & pas cher, mais impersonnel.<br>Votre marque se dilue.</p>
        </div>
        <div class="p-5 rounded-2xl ring-1 ring-slate-200 bg-slate-50">
          <h3 class="font-semibold text-slate-800">Agency</h3>
          <p class="mt-2 text-sm text-slate-600">Process lourd, équipes séparées, coûteux.<br>La cohérence se perd.</p>
        </div>
        <div class="p-5 rounded-2xl ring-2 ring-cyan-300 bg-gradient-to-br from-cyan-50 to-white">
          <h3 class="font-semibold text-slate-900">Craftsman</h3>
          <p class="mt-2 text-sm text-slate-700">Une vision, du concept au code.<br>Identité unique, mise en ligne en semaines.</p>
        </div>
      </div>

      <!-- Packages -->
      <section aria-label="Offres">
        <h3 class="text-2xl font-bold mb-6 text-center">Paliers clairs — pas de surprise</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <article
            v-for="(p, i) in packages"
            :key="p.slug"
            class="rounded-2xl ring-1 ring-slate-200 bg-white p-6 flex flex-col"
            :class="i === 1 ? 'ring-cyan-300 shadow-sm' : ''"
          >
            <div class="flex items-center justify-between">
              <h4 class="text-xl font-bold">{{ p.title }}</h4>
              <span class="px-2 py-1 text-xs rounded-full"
                    :class="p.badge">
                {{ p.badgeLabel }}
              </span>
            </div>
            <p class="mt-2 text-slate-600">{{ p.oneLiner }}</p>

            <ul class="mt-4 space-y-2 text-sm text-slate-700">
              <li v-for="b in p.bullets" :key="b" class="flex items-start gap-2">
                <span class="mt-1 text-cyan-700">•</span><span>{{ b }}</span>
              </li>
            </ul>

            <div class="mt-4 text-xs text-slate-500">
              <p><strong>Délais typiques :</strong> {{ p.timeline }}</p>
              <p><strong>Idéal pour :</strong> {{ p.for }}</p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200">
              <a href="#contact"
                 class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white
                        bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/70">
                Démarrer avec {{ p.cta }}
              </a>
              <p class="mt-2 text-[11px] text-slate-500">Devis détaillé sous 24h · Facturation par jalons</p>
            </div>
          </article>
        </div>
        <p class="mt-4 text-center text-xs text-slate-500">
          Besoin d’un mix sur mesure ? On ajuste les briques. Pas de blabla, que des résultats.
        </p>
      </section>

      <!-- What I deliver (uses existing items prop) -->
      <section v-if="items?.length" aria-label="Compétences & livrables">
        <h3 class="text-2xl font-bold mb-6 text-center">Ce que je livre — brique par brique</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <article v-for="s in items" :key="s.slug" class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <div class="text-2xl">{{ s.icon }}</div>
            <h4 class="mt-2 font-semibold">{{ s.title }}</h4>
            <p class="mt-1 text-sm text-slate-600">{{ s.oneLiner }}</p>
            <ul class="mt-3 space-y-1 text-sm text-slate-700">
              <li v-for="b in s.bullets" :key="b" class="flex items-start gap-2">
                <span class="mt-1 text-cyan-700">•</span><span>{{ b }}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Deep service blurbs (short, opinionated) -->
      <section class="grid lg:grid-cols-2 gap-10">
        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🧩 Développement sur-mesure</h3>
          <p class="text-slate-700">
            Pas de thème WordPress, pas de techno obscure. Du code propre, responsive au pixel, composants réutilisables. Optimisé pour vitesse, autonomie, long terme.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Vue 3, Vite, Tailwind, CMS léger pour éditer simplement</li>
            <li>Perfs réelles mobile (Lighthouse ≥ 90), images responsives</li>
            <li>Stripe/Firestore/Guidap selon besoin — architecture pragmatique</li>
          </ul>
        </article>

        <article class="space-y-3">
          <h3 class="text-2xl font-bold">🎨 UI, Identité & Système visuel</h3>
          <p class="text-slate-700">
            Pas juste du beau : un système. Composants, palettes, états, guidelines. Tout s’aligne. Tout respire. Votre marque, pas un clone.
          </p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Design System modulaire (tokens, typo, variantes)</li>
            <li>Accessibilité AA intégrée d’office</li>
            <li>Logo SVG décliné + pack OG/social prêt à l’emploi</li>
          </ul>
        </article>
      </section>

      <!-- FAQ / Risk reversal -->
      <section aria-label="FAQ" class="space-y-4">
        <h3 class="text-2xl font-bold text-center">Questions fréquentes</h3>
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Pourquoi pas WordPress ?</summary>
          <p class="mt-2 text-sm text-slate-700">
            Quand un template convient, on le dit. Mais la plupart du temps, il dilue l’identité et bride l’évolution. Mon approche vise la cohérence et la performance long terme.
          </p>
        </details>
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Et si j’ai besoin d’un truc spécifique (réservations, multilingue) ?</summary>
          <p class="mt-2 text-sm text-slate-700">
            On choisit la brique qui convient (Stripe, Guidap, CMS headless, i18n) et on l’intègre proprement. Pas de “stack fétiche”, que du pragmatique.
          </p>
        </details>
        <details class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <summary class="font-semibold cursor-pointer">Comment se passe la collaboration ?</summary>
          <p class="mt-2 text-sm text-slate-700">
            Ateliers courts → maquettes → itérations rapides → intégration → mise en ligne. Devis clair, jalons facturés, livrables actionnables à chaque étape.
          </p>
        </details>

        <div class="pt-4 text-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
                   bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
          >
            Discutons d’un projet ↗
          </a>
          <p class="mt-2 text-xs text-slate-500">Réponse sous 24h · Paris & Remote</p>
        </div>
      </section>

    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const props = defineProps({
  items: { type: Array, required: false, default: () => [] }
})

// Productized packages (no prices here; you can add later)
const packages = [
  {
    slug: 'starter',
    title: 'Starter',
    badge: 'bg-slate-100 text-slate-700',
    badgeLabel: 'Launch',
    oneLiner: 'Vitrine soignée qui ressemble à votre marque, pas à un template.',
    bullets: [
      'Atelier vision (1h) · arbo & wireframes',
      'UI sur-mesure (3–4 pages clés) · design system light',
      'Intégration Vue/Tailwind · CMS léger · SEO technique de base'
    ],
    timeline: '~2–3 semaines selon contenu',
    for: 'studios, artisans, petites équipes',
    cta: 'Starter'
  },
  {
    slug: 'growth',
    title: 'Growth',
    badge: 'bg-cyan-100 text-cyan-700',
    badgeLabel: 'Most picked',
    oneLiner: 'Identité + UX/UI + code + mesure. Le palier le plus rentable.',
    bullets: [
      'Logo/DA ou refonte · design system complet',
      'UX flows, formulaires, analytics events',
      'Perfs mobile (LH ≥ 90) · SEO soigné · intégrations (Stripe, Guidap…)'
    ],
    timeline: '~4–6 semaines',
    for: 'marques en croissance, offres premium',
    cta: 'Growth'
  },
  {
    slug: 'premium',
    title: 'Premium',
    badge: 'bg-amber-100 text-amber-700',
    badgeLabel: 'Full craft',
    oneLiner: 'Écosystème complet : identité, produit, e-commerce, contenus.',
    bullets: [
      'Ateliers narratif & ton de voix · multi-langue si besoin',
      'E-commerce Stripe / packs · assets OG/social · kit presse',
      'CI/CD Netlify, monitoring, roadmap d’évolution'
    ],
    timeline: '~6–10+ semaines',
    for: 'studios/maisons exigeantes, lancements',
    cta: 'Premium'
  }
]

// JSON-LD: services + offers (search engines)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Services — Guillaume Lainé',
  itemListElement: [
    ...['Développement sur-mesure', 'UI/UX & Design système', 'Brand Identity'].map((name, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name,
        provider: { '@type': 'Person', name: 'Guillaume Lainé' },
        areaServed: 'Europe'
      }
    })),
    ...packages.map((p, idx) => ({
      '@type': 'Offer',
      position: 10 + idx + 1,
      itemOffered: {
        '@type': 'Service',
        name: `Package ${p.title}`,
        description: p.oneLiner,
        provider: { '@type': 'Person', name: 'Guillaume Lainé' },
        areaServed: 'Europe'
      }
    }))
  ]
}

useHead({
  script: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }]
})
</script>
