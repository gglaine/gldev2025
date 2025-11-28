<!-- src/pages/case-studies/funcenter.vue -->
<script setup lang="ts">
import CaseStudyFrame from "../../components/case/CaseStudyFrame.vue";
import CS_Hero from "../../components/case/CS_Hero.vue";
import CS_TextSection from "../../components/case/CS_TextSection.vue";
import CS_Media from "../../components/case/CS_Media.vue";
import CS_MetricsStrip from "../../components/case/CS_MetricStrip.vue";

// Optional live preview
import ProjectLivePreview from "../../components/ProjectLivePreview.vue";
</script>

<template>
  <CaseStudyFrame
    title="Funcenter — de React-Static à Vue/Vite/Tailwind"
    description="Transparence des tarifs, réservation Guidap, Groupes, Footer, migration stack, SEO local, perfs"
  >
    <!-- HERO -->
    <CS_Hero
      kicker="Étude de cas"
      title="D’un site brochure à une expérience de réservation claire et rassurante"
      subtitle="Migration React-Static → Vue/Vite/Tailwind · Intégration Guidap · Transparence des tarifs · Groupes & formulaires · SEO local"
      media="/cs/funcenter/homepage-2025-hero-1200w.webp"
      alt="Vue du site Funcenter 2025"
    />
    <p class="sr-only">
      Case study — From brochureware to a transparent, booking-first web
      experience.
    </p>

    <!-- CONTEXTE / OBJECTIFS -->
    <CS_TextSection title="Contexte & objectifs">
      <p class="leading-relaxed">
        En 2024, j’avais posé une base solide pour présenter l’offre et
        enclencher la réservation (<strong>PDF tarifs</strong> + redirection
        <strong>Guidap</strong>). En 2025, j’ai fait évoluer cette base vers une
        expérience <strong>plus transparente et mobile-first</strong> :
        <strong>tarifs & conditions visibles in-page</strong>, hand-off Guidap
        plus clair et wording <em>bénéfice-first</em>.
      </p>
      <p class="leading-relaxed mt-3">
        J’ai également migré le site de <strong>React-Static</strong> (framework
        non maintenu, limites d’intégration) vers un socle moderne
        <strong>Vue 3 + Vite + Tailwind</strong> pour
        <strong>accélérer les perfs</strong>, simplifier l’intégration UI et
        garantir la <strong>pérennité</strong>.
      </p>
      <ul class="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
        <li>
          • Migration <strong>React-Static → Vue 3 / Vite / Tailwind v4</strong>
        </li>
        <li>
          • Intégration <strong>Guidap</strong> (deep-links, CTA contextualisés)
        </li>
        <li>• FR/EN + optimisation SEO local</li>
        <li>• Navigation mobile prioritaire</li>
      </ul>
      <p class="text-sm text-slate-500 mt-3">
        2024 : base fiable. 2025 : transparence, mobile-first UX + stack moderne
        pour la pérennité.
      </p>
    </CS_TextSection>

<!-- AVANT / APRÈS — HOMEPAGE -->
<CS_TextSection title="Avant / Après — Homepage">
  <div class="grid md:grid-cols-2 gap-6">

    <!-- AVANT (lower elevation) -->
    <div class="rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
      <CS_Media
        src="/cs/funcenter/ui/2024/home-2024-snap.webp"
        caption="Avant (2024) — Base fonctionnelle pour lancer les réservations. Hiérarchie et CTA encore perfectibles."
      />
    </div>

    <!-- APRÈS (highlighted elevation) -->
    <div
      class="group relative rounded-2xl bg-white ring-1 ring-primary/30 ring-offset-1 ring-offset-white shadow-lg md:shadow-xl"
      aria-current="true"
    >
      <!-- Accent label -->
      <span
        class="pointer-events-none absolute -top-2 left-4 select-none rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md"
      >
        APRÈS
      </span>

      <!-- Optional halo/spotlight -->
      <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style="background: radial-gradient(60% 50% at 50% 40%, rgba(0,0,0,0.06), transparent 60%);"></div>

      <CS_Media
        class="relative"
        src="/cs/funcenter/homepage-2025-hero-700w.webp"
        caption="Après (2025) — Même contenu, meilleure hiérarchie : hero immersif, CTA clairs, entrée par activités."
      />

      <!-- Focus ring for keyboard users -->
      <span class="absolute inset-0 rounded-2xl ring-0 focus-within:ring-2 focus-within:ring-primary/60"></span>
    </div>

  </div>
</CS_TextSection>


    <!-- AVANT / APRÈS — PAGE ACTIVITÉ -->
    <CS_TextSection title="Avant / Après — Grille d'activités">
      <div class="grid md:grid-cols-2 gap-6">
        <CS_Media
          src="/cs/funcenter/ui/2024/activities-2024.webp"
          caption="Avant (2024) — Présentation complète avec PDF tarifs / redirection Guidap. Base informative mais peu scannable."
        />
        <CS_Media
          src="/cs/funcenter/ui/desktop/activities.png"
          caption="Après (2025) — Fiche produit scannable : durées, tarifs, conditions visibles d’emblée, CTA « Réserver » contextualisé."
        />
      </div>
      <p class="mt-3 text-sm text-slate-500">
        From brochure to product page: value → price → requirements → action →
        reassurance.
      </p>
    </CS_TextSection>

    <!-- COPYWRITING & UX -->
    <CS_TextSection title="Copywriting & UX — Ce que j’ai changé">
      <!-- Grille des cartes (une colonne, cartes empilées) -->
      <div class="grid gap-6">
        <!-- Carte 1 -->
        <article class="p-4 rounded-xl bg-white">
          <!-- Sur mobile: 1 colonne (image au-dessus), sur desktop: 2 colonnes (image | texte) -->
          <div
            class="grid grid-cols-1 lg:[grid-template-columns:theme(spacing.56)_1fr] gap-4 lg:gap-6 items-start"
          >
            <div class="min-w-0">
              <h3 class="font-semibold mb-2">1) Message clair dès la carte</h3>
              <ul class="text-sm space-y-1">
                <li>
                  • Titres + sous-titres <em>bénéfice-first</em> (« Pilotez sans
                  permis … »).
                </li>
                <li>• Info clé structurée : durée, prix, conditions.</li>
                <li>• Badges & pictos pour réduire la charge cognitive.</li>
              </ul>
            </div>

            <figure class="lg:w-56">
              <img
                class="w-full lg:h-full object-contain rounded-md shadow-sm"
                src="/cs/funcenter/ui/desktop/cardefoil.webp"
                alt="Après (2025) — Fiche produit scannable."
              />
            </figure>
          </div>
        </article>

        <!-- Carte 2 (si pas d’image, tu peux garder un placeholder caché mobile pour ne pas casser l’alignement) -->
        <article class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <div
            class="grid grid-cols-1 lg:[grid-template-columns:theme(spacing.56)_1fr] gap-4 lg:gap-6 items-start"
          >
            <!-- Placeholder pour garder l’alignement (affiché seulement en desktop) -->
            <div class="min-w-0">
              <h3 class="font-semibold mb-2">2) Transparence des tarifs</h3>
              <ul class="text-sm space-y-1">
                <li>• 2024 : PDF dédié ou checkout direct Guidap.</li>
                <li>• 2025 : prix/durée visibles in-page, grilles simples.</li>
                <li>
                  • CTA explicites : « Réserver maintenant », « Voir les
                  créneaux ».
                </li>
              </ul>
            </div>
            <figure class="lg:w-56">
              <img
                class="w-full lg:h-full object-contain rounded-md shadow-sm"
                src="/cs/funcenter/ui/desktop/prices.png"
                alt="Après (2025) — Fiche produit scannable."
              />
            </figure>
          </div>
        </article>

        <!-- Carte 3 -->
        <article class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <div
            class="grid grid-cols-1 lg:[grid-template-columns:theme(spacing.56)_1fr] gap-4 lg:gap-6 items-start"
          >
            <div class="min-w-0 mb-4">
              <h3 class="font-semibold mb-2">3) Ton chaleureux & inclusif</h3>
              <ul class="text-sm space-y-1">
                <li>• Moins de jargon, plus de promesse d’expérience.</li>
                <li>• Vocabulaire famille/groupe et saisonnalité.</li>
                <li>
                  • Micro-textes rassurants (sécurité, équipement, contact).
                </li>
              </ul>
            </div>

            <figure class="lg:w-56">
              <img
                class="w-full lg:h-full object-contain rounded-md shadow-sm"
                src="/cs/funcenter/ui/desktop/chillzone.png"
                alt="Après (2025) — Fiche produit scannable."
              />
            </figure>
          </div>
        </article>
      </div>

      <p class="mt-3 text-sm text-slate-500">
        Copy acts as UX : moins de doutes, décisions plus rapides, confiance
        accrue.
      </p>
    </CS_TextSection>

    <!-- FORMULAIRE RÉSERVATION GROUPES -->
    <CS_TextSection
      title="Formulaire Groupes — de la prise de contact au brief qualifié"
    >

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="p-4 rounded-xl  bg-white">
         

          <figure class="lg:w-56">
            <img
              class="w-full lg:h-full object-contain rounded-md shadow-sm"
              src="/cs/funcenter/ui/desktop/form.png"
              alt="Après (2025) — Fiche produit scannable."
            />
          </figure>
           <h3 class="font-semibold mb-2 mt-4">Champs utiles (moins, mais mieux)</h3>
          <ul class="text-sm mt-4 space-y-1">
            <li>• Taille du groupe (tranches : &lt;10, 10–20, 20–40, 40+)</li>
            <li>
              • Type d’événement (CE, scolaire, EVG/EVJF, anniversaire, autre)
            </li>
            <li>• Fenêtre de dates / contraintes horaires</li>
            <li>
              • Niveau recherché (découverte, sensations, compétition friendly)
            </li>
            <li>• Contact (téléphone + email) — RGPD clair</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <h3 class="font-semibold mb-2">Microcopy & erreurs</h3>
          <ul class="text-sm space-y-1">
            <li>
              • Placeholders qui guident (« ex. 25 personnes, équipe marketing
              »)
            </li>
            <li>
              • Messages d’erreur <em>humains</em> (champ obligatoire / format)
            </li>
            <li>• Accusé de réception clair et délai de réponse estimatif</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl ring-1 ring-slate-200 bg-white">
          <h3 class="font-semibold mb-2">Accessibilité & confiance</h3>
          <ul class="text-sm space-y-1">
            <li>• Labels explicités, ordre tab, aria-live pour feedback</li>
            <li>• Consentement RGPD, lien Politique de confidentialité</li>
            <li>• Option rappel téléphonique (créneau au choix)</li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">
        Résultat : des demandes <strong>actionnables</strong> dès la 1ʳᵉ
        soumission, moins d’allers-retours, meilleure conversion en devis.
      </p>
    </CS_TextSection>

    <!-- FOOTER — de décoration à hub utile -->
    <CS_TextSection title="Footer — de décoratif à utile">
      <div class="grid md:grid-cols-2 gap-6">
        <figure class="lg:w-full">
          <img
            class="w-full lg:h-full object-contain rounded-md shadow-sm"
            src="/cs/funcenter/ui/desktop/footer.png"
            alt="Après (2025) — Fiche produit scannable."
          />
        </figure>
        <ul class="mt-4 text-sm space-y-1">
          <li>
            • <strong>Raccourcis</strong> (top activités, Groupes,
            Contact/Réserver)
          </li>
          <li>
            • <strong>Infos pratiques</strong> (adresse, plan, horaires saison,
            météo/liens utiles)
          </li>
          <li>
            • <strong>Confiance</strong> (mentions, CGV, politique RGPD, avis
            Google)
          </li>
          <li>
            • <strong>Social</strong> (Instagram, TikTok) avec libellés
            explicites
          </li>
        </ul>
        <p class="mt-0 text-sm text-slate-500">
          Un footer utile désencombre l’en-tête et capte les utilisateurs en fin
          de scroll.
        </p>
      </div>
    </CS_TextSection>

    <!-- BOOKING FUNNEL -->
    <CS_TextSection title="Funnel réservation (Guidap)">
      <ol class="list-decimal pl-5 text-sm space-y-1">
        <li>Découverte : catégorie → activité (tuiles + pictos).</li>
        <li>
          Confiance : photos, <strong>prix/durée</strong>, conditions, pré-FAQ.
        </li>
        <li>Action : CTA « Réserver » → deep-link Guidap pertinent.</li>
        <li>
          Rassurance : sécurité, contact, point de RDV, équipement fourni.
        </li>
      </ol>
      <figure class="lg:w-56 mt-4">
        <img
          class="w-full lg:h-full object-contain rounded-md shadow-sm"
          src="/cs/funcenter/ui/desktop/guidap.png"
          alt="Après (2025) — Fiche produit scannable."
        />
      </figure>
      <p class="mt-4 text-sm text-slate-500">
        Plus de PDF à ouvrir, plus de checkout à l’aveugle : info claire
        <em>avant</em> l’action, hand-off rassurant vers Guidap.
      </p>
    </CS_TextSection>

    <!-- PERFORMANCE -->
    <CS_TextSection title="Performance & accessibilité">
      <ul class="text-sm space-y-1">
        <li>
          Images responsive (WebP/AVIF), lazy-loading, dimensions explicites
        </li>
        <li>Tailwind v4 : purge stricte, pas de surcharge UI</li>
        <li>Composants légers, pas de dépendances lourdes</li>
        <li>Audit Lighthouse : corrections ciblées CLS/LCP/INP</li>
        <li>
          Migration stack = <strong>bundle plus léger</strong>, HMR rapide
        </li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        Lean UI + layout stable → meilleurs Core Web Vitals.
      </p>
    </CS_TextSection>

    <!-- SEO & MESURE -->
    <CS_TextSection title="SEO & mesure">
      <div class="space-y-8">
        <!-- TECHNIQUE -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-2">SEO technique & structure</h3>
            <ul class="text-sm space-y-1">
              <li>
                • <strong>Balises sémantiques</strong> (titres hiérarchisés, alt
                images, liens contextuels) → contenu plus lisible pour Google.
              </li>
              <li>
                • <strong>Métas sociales</strong> (Open Graph, Twitter Cards) →
                prévisualisations enrichies, CTR amélioré sur les partages.
              </li>
              <li>
                • <strong>Schémas structurés</strong> (LocalBusiness, Event) →
                affichage d’horaires et d’événements dans les SERP.
              </li>
              <li>
                • <strong>Arborescence propre</strong> : URLs FR/EN courtes et
                cohérentes + redirections 301 pour conserver le jus SEO.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Accessibilité & indexabilité</h3>
            <ul class="text-sm space-y-1">
              <li>
                • <strong>Tarifs désormais en HTML</strong> (plus de PDF cachés)
                → indexables par Google.
              </li>
              <li>
                • <strong>Contenus scannables</strong> (durée, prix, conditions)
                → meilleur CTR en mobile.
              </li>
              <li>
                • <strong>Performances techniques</strong> (LCP/CLS/INP
                optimisés) → pages considérées comme rapides, favorisées dans
                les résultats.
              </li>
            </ul>
          </div>
        </div>

        <!-- MESURE & RÉSULTATS -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold mb-2">Suivi & analytics</h3>
            <figure class="lg:w-full p-2 mb-4">
              <img
                class="w-full lg:h-full object-contain rounded-md shadow-sm"
                src="/cs/funcenter/analytics/perfs-desktop.png"
                alt="Après (2025) — Fiche produit scannable."
              />
            </figure>
            <ul class="text-sm space-y-1">
              <li>
                • <strong>Google Search Console</strong> : suivi des
                impressions, CTR et position moyenne.
              </li>
              <li>
                • <strong>Google Analytics</strong> : funnels personnalisés
                (impression → clic → consultation activité → clic CTA →
                réservation Guidap).
              </li>
              <li>
                • <strong>Événements de réservation trackés</strong> :
                conversion mesurée par device (desktop vs mobile).
              </li>
              <li>
                • <strong>Tableau de bord interne</strong> : suivi des requêtes
                locales saisonnières et de leur impact en réservations.
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Résultats observés</h3>
            <figure class="lg:w-full p-2 mb-4">
              <img
                class="w-full lg:h-full object-contain rounded-md shadow-sm"
                src="/cs/funcenter/analytics/perf-chart-2025.png"
                alt="Après (2025) — Fiche produit scannable."
              />
            </figure>
            <ul class="text-sm space-y-1">
              <li>
                • <strong>Impressions</strong> : +50k en 9 mois, progression
                régulière après refonte (GSC).
              </li>
              <li>
                • <strong>CTR moyen</strong> : 7,89 % (↑ sur les requêtes
                locales « activités lac du Der »).
              </li>
              <li>
                • <strong>Trafic organique</strong> : 8,9k utilisateurs, durée
                moyenne d’engagement 1m56 (Analytics).
              </li>
              <li>
                • <strong>Réservations mobile</strong> : nette progression avec
                CTA plus visibles et transparence tarifaire.
              </li>
            </ul>
          </div>
        </div>

        <!-- CAPTURES D’ÉCRAN -->
        <div class="grid md:grid-cols-2 gap-6">
          <CS_Media
            src="/cs/funcenter/seo-analytics-traffic.webp"
            caption="Google Analytics — 8,9k utilisateurs, 53k vues sur la page activités, funnels suivis jusqu’à la réservation."
          />
          <CS_Media
            src="/cs/funcenter/seo-gsc-ctr.webp"
            caption="Google Search Console — 50 381 impressions, CTR moyen 7,89 %, progression nette après la refonte."
          />
        </div>

        <p class="mt-3 text-sm text-slate-500">
          La refonte a permis de rendre les contenus
          <strong>indexables</strong> et <strong>scannables</strong>, avec un
          impact mesurable : plus d’impressions, un meilleur CTR et un trafic
          organique en hausse, surtout sur mobile où les réservations
          progressent fortement.
        </p>
      </div>
    </CS_TextSection>

    <!-- LIVE PREVIEW -->
    <CS_TextSection title="Aperçu en direct">
      <ProjectLivePreview
        url="https://funcenter-lacduder.com"
        title="Funcenter"
        fallbackImage="/cs/funcenter/homepage-2025-hero-1200w.webp"
      />
      <p class="mt-2 text-xs text-slate-500">
        L’aperçu embarqué peut être limité par les restrictions d’intégration
        externes. Ouvrez dans un nouvel onglet si nécessaire.
      </p>
    </CS_TextSection>

    <!-- CTA / BACK -->
    <div class="mt-6 flex items-center gap-6">
      <a
        href="https://funcenter-lacduder.com"
        target="_blank"
        rel="noopener"
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
