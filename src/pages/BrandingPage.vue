<template>
  <main class="bg-white text-slate-900 antialiased">
    <section class="py-24 px-6 max-w-4xl mx-auto space-y-8">
      <!-- Hero -->
      <header class="space-y-4 text-center">
        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300/60">
          🏷️ Brand Identity
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight">
          Création d'identité visuelle & branding freelance
        </h1>
        <p class="text-lg text-slate-600">
          Not an agency. Not a template. <br />
          <span class="text-sm text-slate-500">
            Une identité claire, cohérente et durable — pensée pour le web, le print et le motion.
          </span>
        </p>
      </header>

      <!-- Intro -->
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          J’aide les marques à définir leur ADN visuel : logo, couleurs, typographies, langage et
          univers. Mon approche : artisanale, rapide et pragmatique. Une vision unique, du concept
          au kit livré.
        </p>
        <p class="text-lg leading-relaxed">
          Contrairement aux agences fragmentées, je conçois et j’intègre moi-même : cohérence
          garantie, délais réduits, identité qui tient dans le temps.
        </p>
      </div>

      <!-- Deliverables -->
      <ul class="list-disc list-inside text-base text-slate-700 space-y-2">
        <li>Logo & déclinaisons (clair, sombre, icône, social)</li>
        <li>Charte graphique et design system complet</li>
        <li>Supports réseaux sociaux & templates pitch/press</li>
        <li>Kit Figma prêt à l’emploi (tokens, palettes, typographies)</li>
        <li>Assets print & web (SVG, PNG, OG images, favicon)</li>
      </ul>

      <!-- Method -->
      <section class="pt-10 space-y-4">
        <h2 class="text-2xl font-bold">Méthode — brique par brique</h2>
        <ol class="grid md:grid-cols-4 gap-4 text-sm text-slate-700">
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-slate-50">
            <span class="text-xs text-cyan-700 font-semibold">1. Vision</span>
            <p>Atelier rapide : promesse, ton, différenciation.</p>
          </li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-slate-50">
            <span class="text-xs text-cyan-700 font-semibold">2. Logo & DA</span>
            <p>Logo, palettes, typographies, moodboard.</p>
          </li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-slate-50">
            <span class="text-xs text-cyan-700 font-semibold">3. Système</span>
            <p>Design system, composants, variantes, accessibilité.</p>
          </li>
          <li class="p-4 rounded-xl ring-1 ring-slate-200 bg-slate-50">
            <span class="text-xs text-cyan-700 font-semibold">4. Kit livré</span>
            <p>Pack Figma + assets exportés web/print prêts à l’usage.</p>
          </li>
        </ol>
      </section>

      <!-- Proof -->
      <section class="pt-10 space-y-4">
        <h2 class="text-2xl font-bold">Exemples récents</h2>
        <p class="text-slate-600">
          StoryEngines (prod audiovisuelle premium), Funcenter (club nautique), Antishirt (marque e-commerce satirique).
        </p>
      </section>

      <!-- CTA -->
      <div class="pt-10 text-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
                 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
        >
          Discutons de votre identité ↗
        </a>
        <p class="mt-2 text-xs text-slate-500">Réponse sous 24h · Kit livré en semaines, pas en mois</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Identité visuelle & branding freelance | Guillaume Lainé',
  meta: [
    {
      name: 'description',
      content:
        'Designer freelance spécialisé en branding et identité visuelle. Logos, chartes graphiques, design system, supports réseaux & print. Une identité claire et cohérente en quelques semaines.'
    },
    {
      property: 'og:title',
      content: 'Identité visuelle & branding freelance'
    },
    {
      property: 'og:description',
      content:
        'Logos, chartes graphiques, univers de marque et design system livrés en kit prêt à l’emploi. Une seule vision, du concept au code.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>
