<!-- pages/AboutPage.vue -->
<template>
  <main class="bg-white text-slate-900 antialiased">

<!-- MICRO BIO -->
<section class="px-6 py-12 bg-slate-50">
  <div class="max-w-3xl mx-auto space-y-5">
    <h2 class="text-2xl font-bold">À propos — en bref</h2>

    <p class="text-slate-700">
      Je suis <strong>designer–développeur</strong> (UX/UI + front) : j’aide les équipes à
      <em>passer de l’idée au live</em> vite et bien — avec des interfaces claires, des perfs mobiles solides
      et un design qui vieillit bien.
    </p>

    <ul class="space-y-2 text-slate-700">
      <li><strong>Design → Code → Produit.</strong> Je relie cadrage, prototypage et shipping mesurable pour livrer des résultats, pas des promesses.</li>
      <li><strong>J’écris autant que je conçois.</strong> UX writing, ton de voix, micro-copy & narratif produit pour guider sans friction.</li>
      <li><strong>Impact concret.</strong> Prototypes rapides, interfaces accessibles (AA/AAA quand possible), SEO propre, analytics branchés.</li>
      <li><strong>Mentalité craft.</strong> Systèmes simples, composants réutilisables, dette maîtrisée, documentation sobre.</li>
      <li><strong>Collab fluide.</strong> Ateliers courts, décisions visibles, feedbacks rapides, priorisation sans blabla.</li>
    </ul>

    <!-- Stack chips -->
    <div class="flex flex-wrap gap-2 pt-2">
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Vue 3</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Vite</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Tailwind</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Netlify/Vercel</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Stripe</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Firebase/Firestore</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Headless CMS</span>
      <span class="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">A11y & SEO</span>
    </div>

    <!-- Micro footer (optionnel) -->
    <p class="text-sm text-slate-500">
      Basé en Île-de-France • Remote OK • Missions produit, branding, interfaces & mise en ligne.
    </p>
  </div>
</section>


    <!-- CTA -->
    <section id="contact" class="px-6 pb-24">
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <h2 class="text-2xl font-bold">Parlons de votre projet</h2>
        <p class="text-slate-600">Besoin d’un site qui n’a pas l’air d’un template ? Construisons une identité digitale cohérente — et mettons-la en ligne vite.</p>
        <a
          href="#contact-form"
          class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white
                 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
        >
          Discutons d’un projet ↗
        </a>
        <p class="text-xs text-slate-500">Réponse sous 24h · Paris & Remote</p>
      </div>
    </section>

    <!-- CONTACT FORM (lazy) -->
    <section id="contact-form" class="scroll-mt-40 md:scroll-mt-48">
      <Suspense>
        <template #default>
          <ContactForm />
        </template>
        <template #fallback>
          <section class="max-w-2xl mx-auto px-6 py-12 text-center text-slate-500">
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

const ContactForm = defineAsyncComponent(() => import('../components/ContactForm.vue'))

useHead({
  title: 'À propos — Guillaume Lainé · Digital Craftsman',
  meta: [
    {
      name: 'description',
      content:
        'Profil hybride (design, contenu FR/EN, front-end) pour des sites et identités cohérents : identité, UX/UI, code, SEO, mise en ligne. From Idea → Live in Weeks.'
    },
    { property: 'og:title', content: 'À propos — Guillaume Lainé' },
    { property: 'og:description', content: 'Not an Agency. Not a Coder. A Digital Craftsman who ships your vision.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
