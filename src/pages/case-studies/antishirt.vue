<!-- src/pages/case-studies/antishirt.vue -->
<script setup lang="ts">
import CaseStudyFrame     from '../../components/case/CaseStudyFrame.vue'
import CS_Hero            from '../../components/case/CS_Hero.vue'
import CS_TextSection     from '../../components/case/CS_TextSection.vue'
import CS_Media           from '../../components/case/CS_Media.vue'
import CS_MetricsStrip    from '../../components/case/CS_MetricStrip.vue' // keep name consistent with your file
// Optional: live preview of the site
import ProjectLivePreview from '../../components/ProjectLivePreview.vue'
</script>

<template>
  <CaseStudyFrame
    title="ANTISHIRT — Micro-ecommerce lean"
    description="ProductForge, Firestore, Stripe, Cloudinary"
  >
    <!-- HERO -->
    <CS_Hero
      kicker="Étude de cas"
      title="Du visuel au produit vendable en une commande"
      subtitle="Pipeline ProductForge → CDN, SEO, paiement"
      media="/cs/antishirt/hero.webp"
      alt="Aperçu du site ANTISHIRT"
      :overlay="false"
      :darken="true"
    />
    <p class="sr-only">
      Case study — From artwork to sellable product in one command (ProductForge to CDN, SEO, checkout).
    </p>

    <!-- CONTEXTE & OBJECTIFS -->
    <CS_TextSection title="Contexte & objectifs">
      <p class="leading-relaxed">
        ANTISHIRT est une micro-marque satirique : cycles courts, drops limités, contenu vidéo associé.
        L’objectif : transformer un dossier d’images en fiches produits vendables, SEO-ready et reliées au paiement,
        avec un pipeline <em>lean</em> maîtrisé de bout en bout.
      </p>
      <p class="text-sm text-slate-500">
        Lean micro-commerce for satirical drops. Turn a folder of images into CDN-ready products with payment and SEO, in minutes.
      </p>
      <ul class="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Automatiser l’ingestion & la génération de métadonnées</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Optimiser & publier les médias (Cloudinary CDN)</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Créer produits/prix Stripe, lier Firestore</span></li>
        <li class="flex items-start gap-2"><span aria-hidden>•</span><span>Brancher vidéos (ANTI TV) au catalogue</span></li>
      </ul>
    </CS_TextSection>

    <!-- PIPELINE OVERVIEW -->
    <CS_TextSection title="Le pipeline ProductForge">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li><strong>Ingest</strong> : lecture des images (.png) → <em>slug</em>, titre, tags, variantes/formats, prix.</li>
        <li><strong>Images</strong> : WebP multi-tailles (350→2880), placeholders base64, thumbnails.</li>
        <li><strong>Upload</strong> : Cloudinary (<code>public_id</code> normalisés), URLs stockées.</li>
        <li><strong>Firestore</strong> : document produit, inventaire, URLs, méta SEO.</li>
        <li><strong>Stripe</strong> : création produit + prix par format, stockage des IDs.</li>
        <li><strong>Liens vidéo</strong> : association “VU sur ANTI TV” (carousel YouTube).</li>
      </ol>
      <p class="mt-3 text-sm text-slate-500">
        One-command pipeline — predictable slugs, CDN media, product/price sync, analytics-ready.
      </p>
    </CS_TextSection>

    <!-- VISUELS -->
    <CS_Media
      src="/cs/antishirt/catalog.webp"
      caption="Catalogue connecté — fiches reliées à des vidéos ANTI TV + carrousel"
    />

    <!-- MODULARITÉ & MODULES -->
    <CS_TextSection title="Modules & orchestration">
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Modules</h3>
          <ul class="text-sm space-y-1">
            <li>normalize/ingest (naming, slugs, front-matter)</li>
            <li>optimize-images (WebP, AVIF, placeholders)</li>
            <li>upload-to-cloudinary (CDN & <code>public_id</code>)</li>
            <li>save-to-firestore (données & SEO)</li>
            <li>sync-with-stripe (produits & prix)</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Sécurité & coûts</h3>
          <ul class="text-sm space-y-1">
            <li>Appels réseau minimisés, batchés, idempotents</li>
            <li>Quotas surveillés, logs horodatés</li>
            <li>Rollback doux via flags & dry-runs</li>
          </ul>
        </div>
      </div>
      <p class="mt-3 text-sm text-slate-500">
        Modular toolchain — every step can run alone or as part of a chain.
      </p>
    </CS_TextSection>

    <!-- MODÈLE DE DONNÉES PRODUIT -->
    <CS_TextSection title="Modèle de données produit (Firestore)">
      <ul class="text-sm space-y-1">
        <li><code>slug</code>, <code>title</code>, <code>description</code>, <code>tags[]</code></li>
        <li><code>formats[]</code> (Basic blanc/noir, Oversize…), <code>prices{}</code></li>
        <li><code>images[]</code> (multi-tailles, thumb, placeholder)</li>
        <li><code>video_urls[]</code> (liens YouTube pour “VU sur ANTI TV”)</li>
        <li><code>stripe_product_id</code>, <code>stripe_price_id</code> par format</li>
        <li><code>seo{ title, description, openGraph }</code></li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        Data model — minimal yet expressive, SEO-aware, Stripe-linked.
      </p>
    </CS_TextSection>

    <!-- UX FLOW & CHECKOUT -->
    <CS_TextSection title="Parcours UX & paiement">
      <ol class="list-decimal pl-5 space-y-1 text-sm">
        <li><strong>Ajout au panier sans compte</strong> (latence minimale, no friction)</li>
        <li><strong>Checkout Stripe</strong> : collecte adresse & paiement</li>
        <li><strong>Webhook</strong> : création de la commande, items, livraison, infos client</li>
        <li><strong>Back-office</strong> : suivi des statuts, exports</li>
      </ol>
      <p class="mt-3 text-sm text-slate-500">
        Frictionless cart → Stripe checkout. Orders materialize from webhooks with full details.
      </p>
    </CS_TextSection>

    <!-- PERF & ACCESSIBILITÉ -->
    <CS_TextSection title="Performance & accessibilité">
      <ul class="text-sm space-y-1">
        <li>Images responsives (sizes/srcset), lazy-loading, dimensions fixées</li>
        <li>Tailwind v4 (CSS-first), purge stricte, zero-bloat</li>
        <li>Semantics & contrast, focus states visibles</li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        Small payloads, stable layout → better LCP/CLS/INP.
      </p>
    </CS_TextSection>

    <!-- SEO & MESURE -->
    <CS_TextSection title="SEO & mesure">
      <ul class="text-sm space-y-1">
        <li>Balises sémantiques, métas OG/Twitter, FAQ/Products schema si pertinent</li>
        <li>Search Console : monitoring requêtes & couverture</li>
        <li>Analytics : événements (ajout panier, checkout, conversion)</li>
      </ul>
      <p class="mt-3 text-sm text-slate-500">
        Content + structure + measurement = compounding organic growth.
      </p>
    </CS_TextSection>

    <!-- PREVIEW (optionnel) -->
    <CS_TextSection title="Aperçu en direct">
      <ProjectLivePreview
        url="https://antishirt.fr"
        title="ANTISHIRT"
        fallbackImage="/cs/antishirt/catalog.webp"
      />
      <p class="mt-2 text-xs text-slate-500">
        L’aperçu embarqué peut être limité selon les politiques d’intégration. Ouvrez dans un nouvel onglet si besoin.
      </p>
    </CS_TextSection>

    <!-- MÉTRIQUES -->
    <CS_MetricsStrip :items="[
      { label: 'Time-to-Market', value: '2-5 min/produit' },
      { label: 'Pagespeed (mobile)', value: '90+' },
      { label: 'Drops', value: '66/99 unités' }
    ]" />


    <!-- CTA / BACK -->
    <div class="mt-6 flex items-center gap-6">
      <a
        href="https://antishirt.fr"
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
