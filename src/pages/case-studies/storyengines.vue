<!-- src/pages/case-studies/storyengines.vue -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'

// Case study shell + blocks
import CaseStudyFrame       from '../../components/case/CaseStudyFrame.vue'
import CS_Hero              from '../../components/case/CS_Hero.vue'
import CS_TextSection       from '../../components/case/CS_TextSection.vue'
import CS_MetricStrip       from '../../components/case/CS_MetricStrip.vue' // ← ensure filename matches
import CS_Media             from '../../components/case/CS_Media.vue'
import CS_Subnav            from '../../components/case/CS_Subnav.vue'
import CSResults            from '../../components/blocks/CSResults.vue'
import ProcessSteps         from '../../components/blocks/CSProcessSteps.vue'
import ProjectLivePreview   from '../../components/ProjectLivePreview.vue'

const canonicalUrl = 'https://www.guillaumelaine.com/case-studies/storyengines'

useHead({
  title: 'StoryEngines — Étude de cas',
  meta: [
    { name: 'description', content: 'Identité premium, design system, CMS Decap et SEO pour StoryEngines.tv.' },
    { property: 'og:title', content: 'StoryEngines — Case Study' },
    { property: 'og:description', content: 'Logo, design system, CMS Decap, SEO & performances.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: '/og/case-studies/storyengines-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'StoryEngines — Étude de cas',
      inLanguage: 'fr-FR',
      url: canonicalUrl
    })
  }]
})


</script>

<template>
  <CaseStudyFrame
    title="StoryEngines — Identité & site premium"
    description="Vue/Vite/Tailwind, Decap CMS, SEO, performances cinématographiques"
  >
    <!-- HERO -->
    <CS_Hero
      kicker="Étude de cas"
      title="L’identité cinématographique d’un studio premium"
      subtitle="Identité, design system, CMS & SEO"
      media="/cs/storyengines/hero.webp"
      alt="Aperçu du site StoryEngines"
    />


    <!-- =========================
         LOGO & IDENTITÉ (intégré)
         ========================= -->
    <section id="logo-identite" aria-label="Logo & Identité" class="scroll-mt-24">


        <CS_TextSection title="Enjeu et Intentions">
          <p class="mb-4">
            <span class="lang-fr">FR:</span> Créer un signe qui évoque la mécanique du cinéma — engrenages, précision, énergie — sans tomber dans le cliché.
            Une identité sobre et maîtrisée, capable de parler aux créatifs comme aux producteurs, et de s’adapter du monogramme au langage cinématographique.
            L’intention : conjuguer <em>ingénierie</em> et <em>narration</em>, pour incarner une marque qui “met en mouvement les histoires”.
          </p>
          <p>
            <span class="lang-en">EN:</span> The goal was to create a mark that evokes the mechanics of cinema — gears, precision, energy — without resorting to cliché.
            A refined and disciplined identity, one that speaks to both creatives and producers, scaling from monogram to cinematic language.
            The intent: blending <em>engineering</em> and <em>storytelling</em>, to embody a brand that truly “powers narratives”.
          </p>
        </CS_TextSection>

        <CS_Media
          src="/cs/storyengines/logo/hero.avif"
          caption="Monogramme + wordmark — variantes et zones de protection"
        />

        <!-- Exploration — monogramme -->
        <ProcessSteps
          title="Exploration — monogramme"
          :steps="[
            {
              src: '/cs/storyengines/process/monogram1.avif',
              title: 'Superposition / Stacking',
              desc_fr: 'Premiers tests : empiler S et E le long d’un axe vertical pour définir une colonne vertébrale claire. Objectif : vérifier la lisibilité et l’équilibre entre la souplesse organique du S et la rigueur géométrique du E.',
              desc_en: 'First trials: stack S and E along a vertical axis to establish a clear backbone. Goal: validate legibility and balance between the organic flow of S and the geometric rigor of E.'
            },
            {
              src: '/cs/storyengines/process/monogram2.avif',
              title: 'Fusion initiale / First Merge',
              desc_fr: 'Le S et le E commencent à s’entrelacer : les diagonales se rapprochent, les formes s’emboîtent. Cette fusion progressive explore un signe plus compact et iconique, au-delà de la simple juxtaposition.',
              desc_en: 'The S and E begin to interlock: diagonals converge, shapes slot into each other. This early merge explores a more compact, iconic mark that goes beyond mere juxtaposition.'
            },
            {
              src: '/cs/storyengines/process/goldenlaurelslogo.gif',
              title: 'Aura iconique / Iconic Framing',
              desc_fr: 'Couronne de lauriers : codes de prestige et d’univers cinéma. Elle cadre l’ADN “story + engineering” avec une aura iconique.',
              desc_en: 'Laurel wreath: prestige and cinema cues. It frames the “story + engineering” DNA with an iconic aura.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="1:1"
          :itemWidth="256"
          :gap="32"
        />

        <!-- Iteration — vocabulaire visuel -->
        <ProcessSteps
          title="Iteration — vocabulaire visuel"
          :steps="[
            {
              src: '/cs/storyengines/process/mechanical1.avif',
              title: 'Vocabulaire visuel / Visual Vocabulary',
              desc_fr: 'Associer monogramme, engrenage et plume pour poser la combinatoire mécanique + écriture. Étape encore décorative, volontairement ouverte.',
              desc_en: 'Combine monogram, gear, and feather to set the mechanics + writing vocabulary. Still decorative, intentionally open-ended.'
            },
            {
              src: '/cs/storyengines/process/mechanical2.avif',
              title: 'Intégration & Profondeur / Integration & Depth',
              desc_fr: 'Contrastes chaud/froid et dégradés pour donner volume. La plume s’intègre à l’engrenage : l’objet devient “vivant”.',
              desc_en: 'Warm/cool contrast and gradients add volume. The feather integrates into the gear: the object becomes “alive”.'
            },
            {
              src: '/cs/storyengines/process/mechanical3.avif',
              title: 'Symbole synthétique / Reduced Symbol',
              desc_fr: 'Simplification finale : abandon du monogramme au profit d’un signe lisible plume+engrenage, pensé pour l’échelle et la clarté.',
              desc_en: 'Final simplification: drop the monogram in favor of a clear feather+gear symbol designed for scale and clarity.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="1:1"
          :itemWidth="256"
          :gap="32"
        />

        <!-- Embodiment — facteur humain -->
        <ProcessSteps
          title="Embodiment — facteur humain"
          :steps="[
            {
              src: '/cs/storyengines/process/storypeople1.avif',
              title: 'Lettres incarnées / Human Letterforms',
              desc_fr: 'Les lettres de “STORY” deviennent silhouettes humaines : le récit s’incarne dans les corps et les gestes.',
              desc_en: 'The letters in “STORY” turn into human silhouettes: narrative embodied through bodies and gestures.'
            },
            {
              src: '/cs/storyengines/process/storypeople2.avif',
              title: 'Narration collective / Crowd Narrative',
              desc_fr: 'Chaque lettre se peuple : foule en mouvement, inclusivité et intelligence collective au cœur du processus.',
              desc_en: 'Each letter fills with people: a moving crowd, inclusivity, and collective intelligence at the core of the process.'
            },
            {
              src: '/cs/storyengines/process/storypeople3.avif',
              title: 'Synergie humain-machine / Human–Machine Synergy',
              desc_fr: 'Un personnage porte un engrenage-bobine : métaphore claire du lien entre force humaine et ingénierie du récit.',
              desc_en: 'A figure carries a gear-as-film-reel: a clear metaphor of human power fueling engineered storytelling.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="1:1"
          :itemWidth="256"
          :gap="32"
        />

        <!-- Atmosphere — mise en scène -->
        <ProcessSteps
          title="Atmosphere — mise en scène"
          :steps="[
            {
              src: '/cs/storyengines/process/backgenmo.mp4',
              title: 'Intro cinématographique / Cinematic Intro',
              desc_fr: 'Ambiance sombre et dramatique : le logo émerge dans un univers de lumière et de métal.',
              desc_en: 'Dark, dramatic mood: the logo emerges within a world of light and metal.'
            },
            {
              src: '/cs/storyengines/process/metaldolly.mp4',
              title: 'Matière en mouvement / Material in Motion',
              desc_fr: 'La caméra glisse sur le métal incandescent : exploration du relief et préparation aux symboles.',
              desc_en: 'The camera glides over glowing metal: exploring relief and setting up the symbolic work to come.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="16:9"
          :itemWidth="512"
          :gap="48"
        />

        <!-- Reduction — symboles & textures -->
        <ProcessSteps
          title="Reduction — symboles & textures"
          :steps="[
            {
              src: '/cs/storyengines/process/moltensilverlogo.gif',
              title: 'Énergie en fusion / Molten Energy',
              desc_fr: 'Métal chauffé, lueurs et fumées : énergie cinétique qui met la marque en mouvement.',
              desc_en: 'Heated metal, glow, and smoke: kinetic energy that sets the brand in motion.'
            },
            {
              src: '/cs/storyengines/process/goldplatelogo.gif',
              title: 'Gravure industrielle / Industrial Engraving',
              desc_fr: 'Plaque métallique gravée : travail de matière, contreformes et alignements pour une lisibilité robuste.',
              desc_en: 'Engraved metal plate: materiality, counterforms, and alignment refined for robust legibility.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="16:9"
          :itemWidth="512"
          :gap="32"
        />

        <!-- Delivery — identité cristallisée -->
        <ProcessSteps
          title="Delivery — identité cristallisée"
          :steps="[
            {
              src: '/cs/storyengines/process/storyengines-logo.png',
              title: 'Logo final / Final Logo',
              desc_fr: 'Symbole mécanique et typographie unis : une roue dentée stylisée, double anneau intérieur, comme engrenage narratif ou œil de caméra. Le mot-symbole en minuscules, gras et arrondi, transmet solidité et proximité. Le jaune primaire éclaire l’ensemble, contrasté par le noir pour une lisibilité maximale.',
              desc_en: 'Mechanical symbol and wordmark combined: a stylized gear with a double inner ring, evoking both narrative machinery and a camera lens. The bold, rounded lowercase typography conveys solidity and approachability. Primary yellow lights the whole, contrasted with black for maximum legibility.'
            },
            {
              src: '/cs/storyengines/process/storyengines-homeanim-web-anim.mp4',
              title: 'Identité animée / Animated Identity',
              desc_fr: 'En contexte sur la homepage : le logo prend vie dans une mise en scène cinématographique. Le noir s’ouvre, les engrenages s’assemblent et se contractent pour révéler la marque, avant que le tagline “Powering Narratives” ne s’installe. L’animation amplifie la dimension artisanale et narrative du système.',
              desc_en: 'In context on the homepage: the logo comes alive through cinematic staging. Black opens up, gears assemble and contract to reveal the mark, before the tagline “Powering Narratives” settles in. The animation reinforces both the crafted and narrative dimensions of the system.'
            }
          ]"
          variant="cards"
          direction="auto"
          connector="arrow"
          mediaAspect="16:9"
          :itemWidth="512"
          :gap="32"
        />
   
    </section>

    <!-- =========================
         CMS (aperçu)
         ========================= -->
    <section id="cms" class="scroll-mt-24">
      <CS_TextSection title="CMS (Decap) — édition simple, flux propre">
        <p class="text-slate-700">
          Back-office statique via Decap CMS + Netlify Identity : édition Markdown, previews locales,
          contrôle des médias (images AVIF/WebP), et builds Netlify. Objectif : une chaîne éditoriale
          légère mais solide, sans surcouche lourde.
        </p>
      </CS_TextSection>
    </section>

    <!-- =========================
         SEO & Performance (aperçu)
         ========================= -->
    <section id="seo-perf" class="scroll-mt-24">
      <CS_TextSection title="SEO & Performance — aperçu">
        <p class="text-slate-700">
          Optimisations Core Web Vitals (LCP via poster + vidéo, images responsives AVIF/WebP, Tailwind
          purgé), métadonnées sociales (OpenGraph/Twitter), balises canoniques. Structure prête pour
          enrichissement futur (schémas de contenus, netlinking).
        </p>
      </CS_TextSection>
    </section>

    <!-- LIVE PREVIEW -->
    <CS_TextSection title="Aperçu en direct">
      <ProjectLivePreview
        url="https://storyengines.tv"
        title="StoryEngines"
        fallbackImage="/cs/storyengines/home.webp"
      />
    </CS_TextSection>

    <!-- METRICS -->
    <CS_MetricStrip :items="[
      { label: 'Pagespeed (mobile)', value: '90+' },
      { label: 'Mise en ligne', value: 'Juin 2025' },
      { label: 'Stack', value: 'Vue • Vite • Tailwind • Decap' }
    ]" />

    <!-- CTA -->
    <div class="mt-6 flex items-center gap-6">
      <RouterLink
        to="/case-studies"
        class="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1"
      >
        ← Retour aux études de cas
      </RouterLink>
    </div>

  </CaseStudyFrame>
</template>
