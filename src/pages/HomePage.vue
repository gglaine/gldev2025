<template>
  <main class="text-slate-800 bg-white ">

    <!-- HERO -->
<section class="hero w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
  <!-- BACKGROUND -->
  <div class="absolute inset-0 z-0 bg-gradient-to-br from-black via-slate-900 to-neutral-800"></div>
  <div class="absolute top-0 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-cyan-500/5 via-blue-500/10 to-transparent animate-pulse-slow blur-3xl opacity-50"></div>

  <!-- TEXT BLOCK -->
  <div class="relative z-10 px-6 max-w-5xl mx-auto space-y-6 animate-fade-in-up">
    <p class="text-sm uppercase tracking-widest text-cyan-400 font-semibold">
      Design. Code. IA. Vision produit.
    </p>

<h1 class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 drop-shadow-md">
  Je conçois des sites et des outils <span class="underline decoration-cyan-400">qui simplifient le travail</span>
</h1>

<p class="mt-6 text-xl sm:text-2xl text-gray-300 font-light tracking-wide max-w-xl mx-auto">
  Pour les solo-founders, studios ou équipes légères : je construis vos briques digitales, sur mesure, sans blabla.
</p>

    <!-- CTA -->
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a href="#contact" class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
        🚀 Discutons ensemble
      </a>
      <a href="#work" class="text-cyan-400 hover:underline text-lg font-medium">
        Voir mes projets
      </a>
    </div>
  </div>

  <!-- SCROLL CUE -->
  <div class="absolute bottom-6 z-10 text-white/60 text-xs animate-bounce hidden sm:block">
    ▼ Scrollez pour explorer
  </div>
</section>

     <section class="py-24 px-6 bg-slate-150 text-slate-900 text-center">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold mb-6">Omakaze</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-12">
          Vous avez une idée, un besoin, une frustration ? Choisissez la carte qui vous parle.<br />
          Je m’occupe du reste. Design, code, contenu… tout est inclus.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OmakazeCard 
            title="🖼️ J’ai besoin d’un logo" 
            description="Un logo clair, original, adapté à votre secteur et prêt pour tous vos supports (site, print, réseaux)." 
            price="À partir de 350 €" />

          <OmakazeCard 
            title="🌐 J’ai besoin d’un site vitrine" 
            description="Landing page responsive, rapide & bien référencée." 
            price="À partir de 800 €" />

          <OmakazeCard 
            title="🛒 Je veux vendre un produit" 
            description="Page de vente avec branding, copywriting, paiement et SEO." 
            price="À partir de 900 €" />

          <OmakazeCard 
            title="📈 Je veux être mieux référencé" 
            description="Audit SEO + optimisation on-page pour Google et visiteurs." 
            price="À partir de 500 €" />

          <OmakazeCard 
            title="🔍 Je veux connaître mes clients" 
            description="Mise en place d’un tracking clair (GA4, Hotjar, dashboards)." 
            price="À partir de 300 €" />

          <OmakazeCard 
            title="⚙️ J’ai besoin d’un outil sur mesure" 
            description="Création d’une micro-app ou d’un outil interne pour votre activité." 
            price="À partir de 1000 €" />
        </div>
      </div>
    </section>

    <!-- PROJETS -->
    <section id="work" class="py-20 px-6 text-slate-100">
      <div class="max-w-screen-xl mx-auto space-y-20">
        <h2 class="text-3xl font-bold text-center text-white">Réalisations</h2>

        <!-- STORYENGINES -->
        <div class="space-y-10">
          <div class="flex flex-col md:flex-row justify-center items-start gap-6">
            <div class="w-full md:w-[960px] h-[600px] bg-black rounded-xl overflow-hidden border border-gray-800 shadow-md shrink-0">
              <img src="https://via.placeholder.com/960x600?text=StoryEngines+Preview" class="w-full h-full object-cover" alt="StoryEngines.tv Preview" />
            </div>
            <div class="text-left max-w-lg space-y-4">
              <h3 class="text-2xl font-bold text-cyan-400">StoryEngines.tv</h3>
              <p class="text-gray-400">
                Site vitrine pour une société de production fondée par <strong>Mathieu Vandevelde</strong> (ex-Black Sheep). Design sobre, typographie cinématographique, logo sur-mesure.
              </p>
              <p class="text-sm text-gray-500 italic">
                Vue.js · Tailwind · CMS Decap · Netlify Identity · SEO optimisé
              </p>
              <a href="https://www.storyengines.tv" target="_blank" class="text-cyan-400 hover:underline">Voir le site</a>
            </div>
          </div>
        </div>

        <!-- FUNCENTER -->
        <div class="space-y-10">
          <div class="flex flex-col md:flex-row-reverse justify-center items-start gap-6">
            <div class="w-full md:w-[960px] h-[600px] bg-black rounded-xl overflow-hidden border border-gray-800 shadow-md shrink-0">
              <img src="https://via.placeholder.com/960x600?text=Funcenter+Preview" class="w-full h-full object-cover" alt="Funcenter Preview" />
            </div>
            <div class="text-left max-w-lg space-y-4">
              <h3 class="text-2xl font-bold text-cyan-400">Funcenter-lacduder.com</h3>
              <p class="text-gray-400">
                Refonte complète du site d’un club nautique. Nouvelles vidéos montées, UI modernisée, formulaires personnalisés, refonte du logo.
              </p>
              <p class="text-sm text-gray-500 italic">
                Vue.js · Tailwind · DaVinci · SEO avancé · Netlify CI/CD
              </p>
              <a href="https://www.funcenter-lacduder.com" target="_blank" class="text-cyan-400 hover:underline">Voir le site</a>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import OmakazeCard from '../components/OmakazeCard.vue'

useHead({
  title: 'Guillaume Lainé – Designer & Développeur freelance',
  meta: [
    {
      name: 'description',
      content: 'Designer & développeur fullstack. Création de sites performants et identités visuelles sur mesure. StoryEngines.tv, Funcenter, CMS personnalisés.'
    },
    {
      property: 'og:title',
      content: 'Guillaume Lainé – Designer & Développeur freelance'
    },
    {
      property: 'og:description',
      content: 'Créateur de sites et d’expériences interactives : Vue.js, Tailwind, SEO, automatisation IA.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>
