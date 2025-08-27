<!-- pages/Contact.vue -->
<template>
  <main class="bg-white text-slate-900 antialiased">
    <!-- HERO -->
    <section class="relative px-6 py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
          Me contacter<br>
          <span class="text-base font-medium text-slate-500">Get in touch</span>
        </h1>

        <p class="text-lg text-slate-600">
          Un projet en tête ? Une idée à tester ? Parlons-en !
          <br><span class="text-sm text-slate-500">Have a project or an idea to explore? Let’s talk.</span>
        </p>

        <p class="text-base text-slate-600">
          Disponible pour des missions freelance — créatives, techniques ou hybrides.
          <br><span class="text-xs text-slate-500">Available for freelance work — creative, technical, or hybrid.</span>
        </p>

        <p class="text-sm">
          📧 <a href="mailto:hello@guillaumelaine.com" class="text-cyan-700 hover:underline">hello@guillaumelaine.com</a>
          <br><span class="text-[11px] text-slate-500">Paris & Remote · Réponse sous 24h · Reply within 24h</span>
        </p>
      </div>
    </section>

    <!-- CONTACT FORM -->
    <section class="px-6 py-16 max-w-2xl mx-auto" id="contact-form" aria-label="Formulaire de contact / Contact form">
      <Suspense>
        <template #default>
          <ContactForm />
        </template>
        <template #fallback>
          <div class="text-center text-slate-500 animate-pulse">
            Chargement du formulaire…<br><span class="text-xs">Loading the form…</span>
          </div>
        </template>
      </Suspense>
    </section>

    <!-- DIRECT EMAIL CARD (optional helper) -->
    <section class="px-6 pb-8">
      <div class="max-w-2xl mx-auto">
        <div class="rounded-2xl ring-1 ring-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div class="text-sm text-slate-700">
            <strong>Vous préférez l’e-mail ?</strong> Écrivez-moi directement.
            <br><span class="text-xs text-slate-500">Prefer email? Write me directly.</span>
          </div>
          <a href="mailto:hello@guillaumelaine.com"
             class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white
                    bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600/70">
            Envoyer un e-mail · Send an email
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER NOTE -->
    <section class="px-6 pb-16 text-center">
      <p class="text-xs text-slate-500">
        J’étudie chaque demande avec soin et réponds sous 24 heures.
        <br><span class="text-[11px]">I review each message carefully and reply within 24 hours.</span>
      </p>
    </section>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'

const ContactForm = defineAsyncComponent(() => import('../components/ContactForm.vue'))

useHead({
  title: 'Contact — Guillaume Lainé · Digital Craftsman',
  meta: [
    {
      name: 'description',
      content:
        'Contactez-moi pour vos projets de branding, design ou développement web. Disponible en freelance. Réponse sous 24h. / Get in touch for branding, design, or web development. Reply within 24h.'
    },
    { property: 'og:title', content: 'Contact — Guillaume Lainé' },
    { property: 'og:description', content: 'Paris & Remote · FR/EN · Identity · UX/UI · Code · Launch' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
