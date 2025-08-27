<template>
  <main class="text-slate-800 bg-white antialiased">

    <!-- HERO -->
    <section
      class="hero relative overflow-hidden w-full min-h-[100svh] flex flex-col justify-center items-center text-center"
      aria-label="Présentation"
    >
      <div class="absolute inset-0 z-0 bg-gradient-to-br from-white via-slate-50 to-slate-100"></div>

      <div class="relative z-10 px-6 max-w-5xl mx-auto space-y-6 motion-safe:animate-[fadeInUp_700ms_ease]">
        <!-- credibility stamp -->
        <div class="flex items-center justify-center gap-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300/60">
            🚀 From Idea → Live in Weeks
          </span>
          <span class="hidden sm:inline text-xs text-slate-500">Identity · UX/UI · Code · Launch</span>
        </div>

        <!-- motto -->
        <h1
          class="text-balance text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight
                 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600
                 drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        >
          ⚡ Not an Agency. Not a Coder.<br class="hidden sm:block" />
          <span class="underline decoration-cyan-600/60 underline-offset-4">A Craftsman who ships your vision.</span>
        </h1>

        <p class="mt-3 sm:mt-4 text-pretty text-base sm:text-xl text-slate-600 font-light tracking-wide max-w-2xl mx-auto">
          Je clarifie votre vision et je la construis brique par brique : identité, interfaces, code et mise en ligne — sans blabla.<br>
          <span class="text-sm text-slate-500">For solo-founders, studios or lean teams: a coherent, custom build that feels like <em>you</em>, not like a template.</span>
        </p>

        <!-- CTA -->
        <div class="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base sm:text-lg font-semibold text-white
                   bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                   transition-transform duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.99]"
          >
            🚀 Discutons ensemble<br><span class="text-xs font-normal pl-1">Let’s talk</span>
          </a>

          <a
            href="#work"
            class="inline-flex items-center justify-center rounded-full px-5 py-3 text-base sm:text-lg font-medium
                   text-cyan-800 hover:text-cyan-900 ring-1 ring-cyan-700/20 hover:ring-cyan-700/30
                   bg-white hover:bg-cyan-50
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
          >
            Voir mes projets<br><span class="text-xs font-normal pl-1">See my work</span>
          </a>
        </div>

        <!-- soft risk-reversal -->
        <p class="text-xs text-slate-500 mt-2">
          Réponse sous 24h · Paris & Remote · Facturation claire par paliers
        </p>
      </div>

      <div class="absolute bottom-6 z-10 hidden sm:flex flex-col items-center text-slate-500 text-xs">
        <span class="mb-1">Scrollez<br><span class="text-[10px]">Scroll down</span></span>
        <span class="animate-bounce">▼</span>
      </div>
    </section>

    <!-- ANTI-TEMPLATE / ANTI-AGENCY STRIP -->
    <section class="px-6 py-12 bg-white">
      <div class="max-w-screen-xl mx-auto">
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
      </div>
    </section>

    <!-- METHOD: BRICK BY BRICK -->
    <section class="px-6 py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900">Méthode — brique par brique</h2>
        <ol class="mt-8 grid md:grid-cols-4 gap-6">
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">1. Vision</span>
            <h3 class="mt-1 font-semibold">Brand research</h3>
            <p class="mt-2 text-sm text-slate-600">Ateliers rapides, ton de voix, promesse, angle.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">2. Identity</span>
            <h3 class="mt-1 font-semibold">Logo & DA</h3>
            <p class="mt-2 text-sm text-slate-600">Logo, palette, typographies, mini-charte.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">3. Interface</span>
            <h3 class="mt-1 font-semibold">UX/UI & Protos</h3>
            <p class="mt-2 text-sm text-slate-600">Wireframes, maquettes Figma, micro-interactions.</p>
          </li>
          <li class="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
            <span class="text-xs font-semibold text-cyan-700">4. Ship</span>
            <h3 class="mt-1 font-semibold">Code & Launch</h3>
            <p class="mt-2 text-sm text-slate-600">Vue/Tailwind, Stripe, SEO, déploiement Netlify.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- SERVICES (keep your section but now sits after method) -->
    <ServicesSection :items="services" />

    <!-- WORK -->
    <section id="work" class="py-20 px-6 text-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div class="max-w-screen-xl mx-auto space-y-10">
        <header class="space-y-2">
          <h2 class="text-3xl font-bold text-center text-slate-900">
            Dernières réalisations<br><span class="text-base font-medium text-slate-600">Latest projects</span>
          </h2>
          <p class="text-center text-sm text-slate-600">
            Prévisualisations en direct : faites défiler et interagissez. Cliquez pour ouvrir en plein écran.<br>
            <span class="text-xs text-slate-500">Live previews: scroll and interact. Click to open full screen.</span>
          </p>
        </header>

        <!-- TRUST / PROOF BAR -->
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-sm text-slate-500">
            Sélection : Storia Télévision (premium boutique look), Funcenter (refonte SEO + vidéos), Antishirt (identité → e-commerce).
          </p>
        </div>

        <div class="space-y-20">
          <CaseStudyRow v-for="p in projects" :key="p.title" :project="p" />
        </div>

        <!-- bottom CTA -->
        <div class="pt-6 text-center">
          <a href="#contact"
             class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/70">
            Démarrer un projet · Start your project
          </a>
          <p class="mt-2 text-xs text-slate-500">Devis clair sous 24h · Paliers Starter / Growth / Premium</p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="scroll-mt-40 md:scroll-mt-48">
      <Suspense>
        <template #default>
          <ContactForm />
        </template>
        <template #fallback>
          <section class="max-w-2xl mx-auto px-6 py-16 text-center text-slate-500">
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
import CaseStudyRow from '../components/CaseStudyRow.vue'
import ServicesSection from '../components/ServicesSection.vue'

const ContactForm = defineAsyncComponent(() => import('../components/ContactForm.vue'))

const services = [
  {
    slug: 'developpement',
    icon: '🧩',
    title: 'Développement de sites web custom',
    oneLiner: 'Vue 3 / Vite / Tailwind, CMS headless léger, Netlify CI/CD. Rapide, stable, SEO-friendly.',
    bullets: ['Vitrines & e-commerce (Stripe / Guidap)', 'Images responsives, analytics', 'SEO technique & perfs web'],
    details: 'Intégrations Stripe/Firestore, composants réutilisables, déploiements continus, mesures et optimisation progressive.'
  },
  {
    slug: 'design',
    icon: '🎨',
    title: 'Design visuel',
    oneLiner: 'Direction artistique, UI kits et micro-interactions sobres pour une interface claire et durable.',
    bullets: ['Design system & composants', 'Maquettes responsives', 'Exports & guidelines'],
    details: 'Grilles, hiérarchie typographique, états & feedbacks, tokens (taille/espacement/contraste).',
    badgeBg: 'bg-rose-100 text-rose-700'
  },
  {
    slug: 'brand',
    icon: '🏷️',
    title: 'Brand Identity',
    oneLiner: 'Logo, palette, typos, usages écran/print : une identité qui tient dans le temps.',
    bullets: ['Logo & variantes (clair/sombre, mono)', 'Mini-charte', 'Templates réseaux & pitch'],
    details: 'Marque animée optionnelle, accessibilité couleur, favicons & open-graph.',
    badgeBg: 'bg-amber-100 text-amber-700'
  },
  {
    slug: 'ui-ux',
    icon: '🧭',
    title: 'UI/UX',
    oneLiner: 'Parcours clairs, contenu utile, feedbacks rapides. Conçu pour convertir, pas pour distraire.',
    bullets: ['Arbo & wireframes', 'Protos cliquables & tests rapides', 'Accessibilité & métriques produit'],
    details: 'A/B light, events analytics, temps-to-task, focus states, performance perçue.',
    badgeBg: 'bg-emerald-100 text-emerald-700'
  }
]

const projects = [
  {
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
  title: 'Guillaume Lainé — Digital Craftsman (Identity · UX/UI · Code)',
  meta: [
    { name: 'description', content: 'Not an Agency. Not a Coder. A digital craftsman who ships your vision — identité, UX/UI, code & launch. StoryEngines, Funcenter, Antishirt.' },
    { property: 'og:title', content: 'Guillaume Lainé — Digital Craftsman' },
    { property: 'og:description', content: 'Identity → Interface → Code → Launch. From idea to live in weeks.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
