<template>
  <main class="bg-gradient-to-b from-white to-slate-50">
    <article ref="articleEl" v-zoom class="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <!-- HERO (edit freely) -->
      <header class="space-y-4 text-center">
        <p class="uppercase text-xs tracking-wider text-slate-500">Étude de cas</p>
        <h1 class="text-4xl md:text-5xl font-black">StoryEngines</h1>
        <p class="text-slate-600">Positionnement premium discret — identité, site, SEO</p>
        <div class="text-sm text-slate-500">StoryEngines · 2025</div>
        <div class="mt-4 flex flex-col items-center gap-3">
          <img src="/cs/storyengines/og.jpg" alt="StoryEngines" class="rounded-xl border w-full max-w-3xl" loading="lazy" />
          <div class="flex gap-2">
            <a href="https://www.storyengines.tv" target="_blank" rel="noopener"
               class="px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800">Voir le site ↗</a>
            <RouterLink to="/" class="px-3 py-1.5 rounded-md border bg-white hover:bg-slate-50">← Retour</RouterLink>
          </div>
        </div>
      </header>

      <!-- WRITE WHATEVER SECTIONS YOU WANT -->
      <!-- Example: Context -->
      <section class="space-y-3">
        <h2 class="text-2xl font-extrabold">🎯 Contexte & objectifs</h2>
        <p class="text-slate-700">
          Créer une identité premium sans ostentation, un site rapide et sobre, bilingue, avec un CMS simple.
        </p>
        <ul class="grid sm:grid-cols-2 gap-3">
          <li class="p-4 rounded-xl border bg-white">Clarifier le positionnement “crafted premium”.</li>
          <li class="p-4 rounded-xl border bg-white">Grille stricte, typo cinéma, no-bloat.</li>
          <li class="p-4 rounded-xl border bg-white">SEO de base (sitemap, métas, schémas, maillage).</li>
          <li class="p-4 rounded-xl border bg-white">Lighthouse solide dès la V1.</li>
        </ul>
      </section>

      <!-- Example: Moodboard (just drop images; add data-step if you want a badge) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-extrabold">🎨 Moodboard — itérations de logo</h2>
        <p class="text-slate-600">Des premières pistes au monogramme final.</p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure class="figure-card">
            <div class="figure-media" data-step="1">
              <img src="/cs/storyengines/logo-01.png" alt="Piste mécanique"
                   data-zoom data-caption="Piste mécanique — couronne/engrenage : précision & artisanat." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">Piste mécanique</div>
              <div class="cap-note">Kerning et masse testés pour petits corps.</div>
            </figcaption>
          </figure>

          <figure class="figure-card">
            <div class="figure-media" data-step="2">
              <img src="/cs/storyengines/logo-02.png" alt="Wordmark ciné"
                   data-zoom data-caption="Wordmark ciné — kerning serré, rythme intertitres." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">Wordmark ciné</div>
              <div class="cap-note">Contraste mesuré, respiration contrôlée.</div>
            </figcaption>
          </figure>

          <figure class="figure-card">
            <div class="figure-media" data-step="9">
              <img src="/cs/storyengines/logo-final.png" alt="Version finale"
                   data-zoom data-caption="Final — monogramme discret + wordmark net." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">Version finale</div>
              <div class="cap-note">Équilibre poids/espacement, lisible en favicon.</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Example: Figma mockups (same idea) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-extrabold">📐 Maquettes Figma — pages clés</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <figure class="figure-card">
            <div class="figure-media">
              <img src="/cs/storyengines/home.png" alt="Homepage"
                   data-zoom data-caption="Homepage — hero minimal, hiérarchie claire." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">Homepage</div>
              <div class="cap-note">Grille 12, ratio d’images constant.</div>
            </figcaption>
          </figure>

          <figure class="figure-card">
            <div class="figure-media">
              <img src="/cs/storyengines/project.png" alt="Fiche production"
                   data-zoom data-caption="Fiche production — hero vidéo, crédits, navigation latérale." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">Fiche production</div>
              <div class="cap-note">Focus sur lisibilité des crédits.</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Example: Analytics (optional; include only if useful) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-extrabold">📊 SEO & performance</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure class="figure-card">
            <div class="figure-media">
              <img src="/cs/storyengines/gsc-queries.png" alt="GSC — requêtes"
                   data-zoom data-caption="GSC — requêtes : croissance organique régulière." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">GSC — requêtes</div>
            </figcaption>
          </figure>

          <figure class="figure-card">
            <div class="figure-media">
              <img src="/cs/storyengines/coverage.png" alt="GSC — couverture"
                   data-zoom data-caption="GSC — couverture : 100% indexé." />
            </div>
            <figcaption class="figure-cap">
              <div class="cap-title">GSC — couverture</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Example: Results -->
      <section class="space-y-4">
        <h2 class="text-2xl font-extrabold">🏁 Résultats</h2>
        <ul class="grid sm:grid-cols-2 gap-3">
          <li class="p-4 rounded-xl border bg-white">✅ Positionnement clarifié (haut de gamme discret).</li>
          <li class="p-4 rounded-xl border bg-white">🚀 Mise en ligne rapide, CMS opérationnel.</li>
          <li class="p-4 rounded-xl border bg-white">📈 Progression SEO sur 3 mois.</li>
        </ul>
      </section>
    </article>
  </main>

  <!-- LIGHTBOX (works for any <img data-zoom>) -->
  <dialog ref="dlg" class="backdrop:bg-black/70 p-0 rounded-xl overflow-hidden">
    <div v-if="activeSrc" class="relative bg-white">
      <img :src="activeSrc" :alt="activeAlt" class="max-h-[86vh] max-w-[92vw] object-contain" />
      <div v-if="activeCaption" class="p-3 text-center text-xs text-slate-600">{{ activeCaption }}</div>
      <button class="absolute top-2 right-2 px-2 py-1 text-xs border bg-white/90 rounded" @click="close">Fermer</button>
    </div>
  </dialog>
</template>

<script setup>
// No arrays/helpers required. Just place <img src="/cs/<slug>/file.png" data-zoom> where you want.

// — SEO (optional; keep if you want OG/canonical) —
import { useHead } from '@vueuse/head'
useHead({
  title: 'StoryEngines – Étude de cas',
  meta: [
    { name: 'description', content: 'Identité, site, SEO.' },
    { property: 'og:title', content: 'StoryEngines – Case Study' },
    { property: 'og:description', content: 'Identité, site, SEO.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: '/cs/storyengines/og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: `${location.origin}/case-studies/storyengines` }]
})

// — Lightweight “click any image to zoom” —
import { ref, onMounted, onBeforeUnmount } from 'vue'
const articleEl = ref(null)
const dlg = ref(null)
const activeSrc = ref('')
const activeAlt = ref('')
const activeCaption = ref('')

// Local directive (no global wiring): v-zoom
const vZoom = {
  mounted(el) {
    el.addEventListener('click', (e) => {
      const target = e.target
      if (!(target instanceof HTMLImageElement)) return
      if (!target.hasAttribute('data-zoom')) return
      activeSrc.value = target.currentSrc || target.src
      activeAlt.value = target.alt || ''
      activeCaption.value = target.getAttribute('data-caption') || ''
      dlg.value?.showModal?.()
    })
  },
  unmounted(el) {
    // (No-op in this simple case)
  }
}

function close(){ dlg.value?.close?.(); activeSrc.value=''; activeAlt.value=''; activeCaption.value='' }

function onKey(e){ if (!dlg.value?.open) return; if (e.key === 'Escape') close() }
onMounted(()=>window.addEventListener('keydown', onKey))
onBeforeUnmount(()=>window.removeEventListener('keydown', onKey))
</script>

<style scoped>
/* Reusable figure styles (apply anywhere) */
.figure-card { @apply rounded-xl overflow-hidden border border-slate-200 bg-white; }
.figure-media { @apply relative; }
.figure-cap { @apply p-3 text-xs text-slate-600 border-t border-slate-100; }
.cap-title { @apply font-medium; }
.cap-note { @apply mt-1 text-slate-500; }

/* Optional: show a small step badge if data-step is present */
.figure-media[data-step]::after {
  content: "Étape " attr(data-step);
  position: absolute; left: .5rem; top: .5rem;
  font-size: .75rem; font-weight: 600;
  background: rgba(255,255,255,.92);
  border: 1px solid rgb(226 232 240);
  border-radius: .375rem;
  padding: .125rem .5rem;
}
</style>
