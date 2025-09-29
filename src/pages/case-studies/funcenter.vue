<!-- src/pages/case-studies/funcenter.vue -->
<script setup lang="ts">
import CaseStudyFrame   from '../../components/case/CaseStudyFrame.vue'
import CS_Hero          from '../../components/case/CS_Hero.vue'
import CS_TextSection   from '../../components/case/CS_TextSection.vue'
import CS_Media         from '../../components/case/CS_Media.vue'
import CS_MetricsStrip  from '../../components/case/CS_MetricStrip.vue'

// Optional live preview (comment if you don't use it)
import ProjectLivePreview from '../../components/ProjectLivePreview.vue'
</script>

<template>
  <CaseStudyFrame
    title="Funcenter — Refonte Vue/Vite/Tailwind"
    description="Bilingue, réservations Guidap, SEO, performances"
  >
    <!-- HERO -->
    <CS_Hero
      kicker="Étude de cas"
      title="Faire d’un club nautique un aimant à réservations"
      subtitle="Migration React-Static → Vue/Vite/Tailwind · Intégration Guidap · SEO local"
      media="/cs/funcenter/homepage-2025-hero-1200w.webp"
      alt="Vue du site Funcenter 2025"
    />
    <!-- EN line -->
    <p class="sr-only">Case study — Turning a nautical club into a booking magnet.</p>

    <!-- CONTEXTE / OBJECTIFS -->
    <CS_TextSection title="Contexte & objectifs">
      <p class="leading-relaxed">
        Le site historique était figé, peu lisible sur mobile et ne valorisait pas la diversité d’activités.
        Objectif : clarifier l’offre, fluidifier la réservation (Guidap) et gagner en trafic local qualifié.
      </p>
      <p class="text-sm text-slate-500">
        Legacy site was static and mobile-unfriendly. Goals: clarify offering, streamline bookings (Guidap),
        and capture high-intent local traffic.
      </p>
      <ul class="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Refonte front (Vue 3, Vite, Tailwind v4)</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Intégration <strong>Guidap</strong> (réservations)</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>FR/EN + optimisation SEO local</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Navigation mobile prioritaire</span></li>
      </ul>
    </CS_TextSection>

    <!-- APERÇU / HERO VISUAL -->
    <CS_Media
      src="/cs/funcenter/funcenter-2025-hero-700w.webp"
      caption="Homepage — hiérarchie claire, CTA visibles, focus réservation"
    />

    <!-- SCOPE & RÔLE -->
    <CS_TextSection title="Rôle & périmètre">
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Rôle</h3>
          <ul class="text-sm space-y-1">
            <li>Direction artistique & design system</li>
            <li>Architecture de l’information (IA)</li>
            <li>Dev front Vue 3/Vite/Tailwind</li>
            <li>Implémentation SEO technique</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Périmètre</h3>
          <ul class="text-sm space-y-1">
            <li>Pages activités modulaires</li>
            <li>Funnel de réservation (Guidap)</li>
            <li>Internationalisation FR/EN</li>
            <li>Mesure & Core Web Vitals</li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">
        Role & Scope — Art direction, IA, front-end build, technical SEO, analytics.
      </p>
    </CS_TextSection>

    <!-- INFORMATION ARCHITECTURE -->
    <CS_TextSection title="Architecture de l’information">
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Structure</h3>
          <ul class="text-sm space-y-1">
            <li>Accueil → Activités → Réservation</li>
            <li>Pages « Activité » : pitch court, tarifs, FAQ, CTA</li>
            <li>Navigation mobile : raccourcis vers activités clés</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Contenu</h3>
          <ul class="text-sm space-y-1">
            <li>Intro orientée bénéfices (famille, groupe, sensations)</li>
            <li>Blocs preuves : visuels, avis, sécurité</li>
            <li>SEO local : zones desservies & requêtes populaires</li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">
        IA — Clear paths, scannable content, friction-less booking cues.
      </p>
    </CS_TextSection>

    <!-- BOOKING FUNNEL (GUIDAP) -->
    <CS_TextSection title="Funnel réservation (Guidap)">
      <ol class="list-decimal pl-5 text-sm space-y-1">
        <li>Découverte : catégorie → activité (signalétique & tuiles)</li>
        <li>Preuve : photos, prix, créneaux, pré-FAQ</li>
        <li>Action : CTA « Réserver » → widget Guidap (deep-link)</li>
        <li>Rassurance : mentions sécurité, contact rapide</li>
      </ol>
      <p class="mt-3 text-sm text-slate-500">
        Booking flow — shallow hierarchy, fast hand-off to Guidap, fewer doubts before click.
      </p>
    </CS_TextSection>

    <!-- PERFORMANCE -->
    <CS_TextSection title="Performance & accessibilité">
      <ul class="text-sm space-y-1">
        <li>Images responsive (WebP), lazy-loading, dimensions explicites</li>
        <li>Tailwind v4 (CSS-first), purge stricte, pas de surcharge UI</li>
        <li>Composants critiques sans dépendances lourdes</li>
        <li>Audit Lighthouse, correctifs CLS/LCP/INP ciblés</li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        Performance — optimized media, lean CSS, stable layout for better CWV.
      </p>
    </CS_TextSection>

    <!-- SEO & MESURE -->
    <CS_TextSection title="SEO & mesure">
      <ul class="text-sm space-y-1">
        <li>Balises sémantiques, métas sociales, schémas locaux</li>
        <li>Arborescence URLs propre (FR/EN) + redirections</li>
        <li>Search Console & Analytics : events réservations, funnel</li>
        <li>Contenu local (lac du Der, activités saisonnières)</li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        SEO & Analytics — local keywords, structured content, measurable actions.
      </p>
    </CS_TextSection>

    <!-- LIVE PREVIEW (optional) -->
    <CS_TextSection title="Aperçu en direct">
      <ProjectLivePreview
        url="https://funcenter-lacduder.com"
        title="Funcenter"
        fallbackImage="/cs/funcenter/homepage-2025-hero-1200w.webp"
      />
      <p class="mt-2 text-xs text-slate-500">
        L’aperçu embarqué peut être limité par les restrictions d’intégration externes. Ouvrez dans un nouvel onglet si nécessaire.
      </p>
    </CS_TextSection>

    <!-- RESULTS (PLACEHOLDERS) -->
    <CS_MetricsStrip :items="[
      { label: 'Pagespeed (mobile)', value: '90+' },
      { label: 'Réservation mobile', value: '+YY%' },
      { label: 'Trafic orga local', value: '+XX%' }
    ]" />

    <!-- TIMELINE & NEXT -->
    <CS_TextSection title="Calendrier & suite">
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Timeline</h3>
          <ul class="text-sm space-y-1">
            <li>Semaine 1 : cadrage, IA, wireframes</li>
            <li>Semaine 2 : design system & templates</li>
            <li>Semaine 3 : intégration front & Guidap</li>
            <li>Semaine 4 : perf, SEO, QA, mise en ligne</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Prochaines étapes</h3>
          <ul class="text-sm space-y-1">
            <li>Itérations SEO (pages activités longues)</li>
            <li>UGC & avis clients (preuve sociale)</li>
            <li>Bundles famille / groupe (upsell)</li>
            <li>Automations analytics (rapports mensuels)</li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">
        Roadmap — content depth, social proof, offers, and automated insights.
      </p>
    </CS_TextSection>

    <!-- CTA / BACK -->
    <div class="mt-6 flex items-center gap-6">
      <a
        href="https://funcenter-lacduder.com"
        target="_blank" rel="noopener"
        class="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium"
      >
        Site live <span aria-hidden>↗</span>
      </a>

      <RouterLink
        to="/case-studies"
        class="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1"
      >
        ← Retour aux études de cas
      </RouterLink>
    </div>
  </CaseStudyFrame>
</template>
