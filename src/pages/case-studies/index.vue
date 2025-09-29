<script setup lang="ts">
const items = [
  { 
    slug: 'storyengines', 
    title: 'StoryEngines', 
    subtitle: 'Identité, site & SEO — FR/EN',
    img: '/cs/storyengines/process/storylogocasestudy.png'
  },
  { 
    slug: 'funcenter', 
    title: 'Funcenter', 
    subtitle: 'Refonte Vue/Vite/Tailwind, Guidap',
    img: '/cs/funcenter/homepage-2025-hero-700w.webp'
  },
]
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
    <!-- Heading -->
    <header class="mb-12 text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        Études de cas
      </h1>
      <p class="mt-3 text-slate-600 max-w-2xl mx-auto">
        Une sélection de projets récents : identité visuelle, design web, développement et SEO.  
        Chaque étude raconte <span class="font-semibold">le cheminement créatif</span> et les <span class="font-semibold">résultats concrets</span>.
      </p>
    </header>

    <!-- Case studies grid -->
    <ul class="grid sm:grid-cols-2 gap-8">
      <li
        v-for="it in items"
        :key="it.slug"
        class="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
      >
        <RouterLink :to="`/case-studies/${it.slug}`" class="block h-72 w-full">
          <!-- Background image -->
          <img
            :src="it.img"
            :alt="it.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          <!-- Text content -->
          <div class="absolute bottom-0 left-0 p-6 text-white">
            <h2 class="text-xl font-bold">{{ it.title }}</h2>
            <p class="mt-1 text-sm opacity-90">{{ it.subtitle }}</p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>
