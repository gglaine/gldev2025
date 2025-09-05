<template>
  <main class="bg-gradient-to-b from-white to-slate-50">
    <article class="max-w-5xl mx-auto px-6 py-16">
      <header class="text-center space-y-2 mb-10" v-if="study">
        <p class="uppercase text-xs tracking-wide text-slate-500">Étude de cas</p>
        <h1 class="text-4xl font-black">{{ study.title }}</h1>
        <p v-if="study.hero?.subtitle" class="text-slate-600">{{ study.hero.subtitle }}</p>
      </header>

      <CaseStudyComposer v-if="study" :study="study" />
      <p v-else class="text-center text-slate-500">Étude introuvable.</p>
    </article>
  </main>
</template>

<script setup>
import CaseStudyComposer from '@/components/CaseStudyComposer.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

// Eager import for SSR/SSG & instant SEO
const modules = import.meta.glob('@/caseStudies/*.{ts,js}', { import: 'default', eager: true })
const map = Object.fromEntries(Object.entries(modules).map(([p, mod]) => {
  const slug = p.split('/').pop().replace(/\.(ts|js)$/, '')
  return [slug, mod]
}))

const route = useRoute()
const study = map[route.params.slug]

// SEO head
if (study) {
  useHead({
    title: `${study.title} – Étude de cas`,
    meta: [
      { name: 'description', content: study.meta?.description ?? `Étude de cas – ${study.title}` },
      { property: 'og:title', content: `${study.title} – Case Study` },
      { property: 'og:description', content: study.meta?.description ?? '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:image', content: study.meta?.image ?? '/og-default.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'canonical', href: `${location.origin}/case-studies/${study.slug}` }],
    script: [{
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org','@type':'CreativeWork',
        name: study.title, datePublished: study.year ?? undefined,
        url: `${location.origin}/case-studies/${study.slug}`,
        image: study.meta?.image ?? undefined,
        description: study.meta?.description ?? undefined,
        author: { '@type':'Person', name:'Guillaume Lainé' }
      })
    }]
  })
}
</script>
