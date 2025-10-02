<template>
<main
  class="relative min-h-screen flex flex-col justify-center items-center 
         text-slate-800 bg-white antialiased
         "
>
<!-- HERO -->
<section
  class="relative overflow-hidden w-full min-h-[100svh] grid place-items-center text-center"
  aria-labelledby="hero-title"
>
  <!-- background image -->
  <div class="absolute inset-0 bg-[url('/images/coca.png')] bg-cover bg-center bg-no-repeat opacity-10 md:opacity-15"></div>
  <!-- light gradient overlay for readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10 md:from-white/60 md:via-white/30 md:to-transparent"></div>

  <!-- decorative underline loop -->
  <ProcessUnderlineLoop />

  <div class="relative px-6 w-full max-w-screen-md lg:max-w-5xl mx-auto space-y-6 sm:space-y-7 md:space-y-8 py-20 sm:py-24 md:py-28">
    <!-- credibility pill -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300/60">
        ⚡ De l’idée au lancement en quelques semaines
      </span>
      <span class="hidden sm:inline text-xs text-slate-500">
        Produit · Identité · UI/UX · Branding · SEO
      </span>
    </div>

    <!-- title -->
    <h1
      id="hero-title"
      class="text-balance font-extrabold leading-tight tracking-tight
             text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm
             text-4xl sm:text-4xl md:text4xl lg:text-6xl"
    >
Designer & Développeur — identité et produit, main dans la main
    </h1>

    <!-- micro-explainer -->
    <p class="text-pretty text-base sm:text-lg md:text-xl text-slate-700 font-light tracking-wide max-w-prose mx-auto leading-relaxed">
      J’unis conseil, design et prototypage rapide pour créer des produits alignés à votre identité et à vos enjeux,
      pensés dès l’origine pour générer de la valeur en ligne.
    </p>

    <!-- CTAs -->
    <div class="mt-6 sm:mt-7 md:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
      <a
        href="#contact"
        class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base sm:text-lg font-semibold text-white
               bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
               shadow-sm hover:shadow-md transition-transform duration-200 will-change-transform hover:scale-[1.04] active:scale-[0.98]
               focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Lancer votre projet
      </a>

      <a
        href="#work"
        class="inline-flex items-center justify-center rounded-full px-5 py-3 text-base sm:text-lg font-medium
               text-cyan-900 ring-1 ring-cyan-700/20 hover:ring-cyan-700/30
               bg-white/90 backdrop-blur-[1px] hover:bg-cyan-50
               focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
      >
        Voir les études de cas
      </a>
    </div>

    <!-- trust line -->
    <p class="text-[11px] sm:text-xs text-slate-500 mt-2">
      Réponse en 24h · Paris & Remote · Packs transparents Starter / Growth / Premium
    </p>
  </div>

  <!-- scroll hint -->
  <div class="absolute bottom-6 hidden sm:flex flex-col items-center text-slate-500 text-xs">
    <span class="mb-1">Faites défiler</span>
    <span class="animate-bounce" aria-hidden="true">▼</span>
  </div>
</section>


<!-- METHOD -->
<section
  id="method"
  class="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100"
  aria-labelledby="method-title"
>
  <div class="relative max-w-screen-xl mx-auto space-y-20">
    <!-- Intro -->
    <div class="text-center">
      <p class="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-700">
        <span class="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
        Méthode
      </p>
      <h2 id="method-title" class="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
        Brique par brique — du sens jusqu’au
        <span class="bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text text-transparent">lancement</span>
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
        Un chemin clair et rapide : de l’idée à la mise en ligne, sans jargon ni complications.
      </p>
    </div>

    <!-- Rows -->
    <div class="space-y-24">
      <!-- 1. Cadrage & Prototypes -->
      <article class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Texte -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-slate-900">⚡ Cadrage & prototypes rapides</h3>
          <p class="text-slate-600">
            Donner forme à vos idées en quelques jours, pour tester avant d’investir.
          </p>
          <ul class="list-disc pl-5 text-slate-700 space-y-2">
            <li>Ateliers courts pour clarifier vision, priorités et messages clés.</li>
            <li>Parcours visibles en 24–48 h pour se projeter tout de suite.</li>
            <li>Prototype interactif “comme en vrai” pour aligner l’équipe.</li>
            <li>Tests utilisateurs rapides, retours concrets et actionnables.</li>
            <li>Décision avec des critères simples, partagés par tous.</li>
          </ul>
          <p class="mt-3 text-xs text-slate-500">
            <span class="font-semibold">Stack &amp; outils :</span>
            Figma (wireframes &amp; prototype), Notion (docs &amp; décisions), tests utilisateurs à distance,
            landing pages avec tracking (UTM, events).
          </p>
        </div>
        <!-- Visuel -->
        <div class="relative"></div>
      </article>

      <!-- 2. Identité & Visuels (inversé desktop) -->
      <article class="grid md:grid-cols-2 gap-10 items-center md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1">
        <!-- Texte -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-slate-900">🎨 Identité & visuels</h3>
          <p class="text-slate-600">
            Une image forte et cohérente, directement exploitable sur tous vos supports.
          </p>
          <ul class="list-disc pl-5 text-slate-700 space-y-2">
            <li>Logo pensé pour site, applis, réseaux et print.</li>
            <li>Palette et typographies accessibles et durables.</li>
            <li>Mini-charte claire pour vos équipes et partenaires.</li>
            <li>Modèles prêts pour posts, stories et vidéos.</li>
            <li>Fichiers optimisés pour web et impression.</li>
          </ul>
          <p class="mt-3 text-xs text-slate-500">
            <span class="font-semibold">Stack &amp; outils :</span>
            Figma (styles, variables, composants), exports SVG/WebP/AVIF, gabarits social,
            handoff “dev-ready”.
          </p>
        </div>
        <!-- Visuel -->
        <div class="relative bg-red">
          <img src="/images/id-grid.png" alt="Exemples de logos, palettes et templates réseaux sociaux" class="rounded-lg bg-contain w-full " />
        </div>
      </article>

      <!-- 3. Interfaces & Apps -->
      <article class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Texte -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-slate-900">🧩 Interfaces & apps</h3>
          <p class="text-slate-600">
            Concevoir et développer des écrans fluides et utilisables, du prototype à la version pilotable.
          </p>
          <ul class="list-disc pl-5 text-slate-700 space-y-2">
            <li>Maquettes ergonomiques adaptées mobile &amp; desktop.</li>
            <li>Composants réutilisables pour évoluer vite et proprement.</li>
            <li>Accessibilité intégrée (contrastes, clavier, focus visibles).</li>
            <li>Performances optimisées pour un site/app rapide.</li>
            <li>Formulaires, langues et paiements intégrés si besoin.</li>
            <li>Documentation simple pour garder la main.</li>
          </ul>
          <p class="mt-3 text-xs text-slate-500">
            <span class="font-semibold">Stack &amp; outils :</span>
            Vue&nbsp;3 + Tailwind, Pinia, i18n, formulaires (contact/réservation/paiement),
            Storybook ou docs intégrées.
          </p>
        </div>
        <!-- Visuel -->
        <div class="relative"></div>
      </article>

      <!-- 4. Mise en ligne & Suivi (inversé desktop) -->
      <article class="grid md:grid-cols-2 gap-10 items-center md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1">
        <!-- Texte -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-slate-900">🚀 Mise en ligne & suivi</h3>
          <p class="text-slate-600">
            Connecter vos outils, déployer et mesurer les résultats — puis améliorer en continu.
          </p>
          <ul class="list-disc pl-5 text-slate-700 space-y-2">
            <li>Paiements, abonnements, comptes utilisateurs.</li>
            <li>Prévisualisations avant publication pour éviter les surprises.</li>
            <li>SEO technique pour être trouvé sur Google.</li>
            <li>Images/vidéos optimisées pour tous les écrans.</li>
            <li>Stats claires pour suivre visites et conversions.</li>
            <li>Suivi post-lancement : corrections et itérations rapides.</li>
          </ul>
          <p class="mt-3 text-xs text-slate-500">
            <span class="font-semibold">Stack &amp; outils :</span>
            Stripe, Firebase/Firestore (auth, data, storage), Netlify/Vercel (déploiement),
            Cloudinary/Sharp (médias), GA4 &amp; GSC (analytics/SEO), JSON-LD &amp; sitemaps.
          </p>
        </div>
        <!-- Visuel -->
        <div class="relative"></div>
      </article>
    </div>
  </div>
</section>






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
import ProcessUnderlineLoop from '../components/ProcessUnderlineLoop.vue'

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
    title: 'Funcenter',
    client: 'Funcenter',
    year: '2025',
    url: 'https://www.funcenter-lacduder.com',

    // 👇 LOCAL POSTER + SRCSET (served from /public)
    image: '/cs/funcenter/homepage-2025-hero-1200w.webp',   // default src
    ambientImage: '/cs/funcenter/homepage-2025-hero-1920w.webp', // backdrop source
    srcset: {
      350:  '/cs/funcenter/homepage-2025-hero-350w.webp',
      700:  '/cs/funcenter/homepage-2025-hero-700w.webp',
      1200: '/cs/funcenter/homepage-2025-hero-1200w.webp',
      1920: '/cs/funcenter/homepage-2025-hero-1920w.webp',
      2880: '/cs/funcenter/homepage-2025-hero-2880w.webp'
    },

    // (optional) choose the card’s box ratio; 16/10 reads great in your UI
    aspect: '16/10',

    summary: 'Refonte complète d’un club nautique : nouvelles vidéos, UI modernisée, formulaires, refonte logo.',
    stack: ['Vue.js','Tailwind','Video','SEO avancé','Netlify CI/CD'],
    flip: true,
    impact: 'Amélioration SEO & conversion (devis / réservations).'
  },
{
  title: 'StoryEngines',
  client: 'StoryEngines',
  year: '2025',
  url: 'https://www.storyengines.tv',

  // 👇 Local poster + responsive srcset (used by CaseStudyRow.vue)
  image: '/cs/storyengines/storyengines-homepage-2025-hero-1200w.webp',       // default src
  ambientImage: '/cs/storyengines/storyengines-homepage-2025-hero-1920w.webp', // blurred backdrop source
  srcset: {
    350:  '/cs/storyengines/storyengines-homepage-2025-hero-350w.webp',
    700:  '/cs/storyengines/storyengines-homepage-2025-hero-700w.webp',
    1200: '/cs/storyengines/storyengines-homepage-2025-hero-1200w.webp',
    1920: '/cs/storyengines/storyengines-homepage-2025-hero-1920w.webp',
    2880: '/cs/storyengines/storyengines-homepage-2025-hero-2880w.webp'
  },

  // Optional: force the card’s box ratio (your component defaults to 16/10 already)
  aspect: '16/10',

  summary: 'Site vitrine premium pour une société de production : typo ciné, DA sur-mesure, logo dédié.',
  stack: ['Vue.js','Tailwind','Decap CMS','Netlify Identity','SEO optimisé'],
  flip: false,
  impact: 'Positionnement haut de gamme, site live en quelques semaines.'
},
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
