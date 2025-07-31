<template>
  <div class="w-full flex flex-col md:flex-row items-start gap-6 md:gap-12 max-w-6xl mx-auto px-4">

    <!-- Preview column -->
    <div class="w-full md:w-1/2 shrink-0 space-y-4">

      <!-- Desktop Preview (shown on md+) -->
      <div class="hidden md:block aspect-[16/10] bg-black rounded-xl overflow-hidden border border-gray-800 shadow-xl">
        <iframe
          v-if="!fallbackDesktop"
          :src="url"
          class="w-full h-full"
          loading="lazy"
          @error="fallbackDesktop = true"
        />
        <div v-else class="relative w-full h-full">
          <img :src="fallbackImage" :alt="title" class="w-full h-full object-cover opacity-70" />
          <a
            :href="url"
            target="_blank"
            rel="noopener"
            class="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-semibold hover:opacity-100 transition"
          >
            🖥️ Voir version desktop
          </a>
        </div>
      </div>

      <!-- Mobile Preview (shown below text on small screens) -->
      <div class="md:hidden relative w-full max-w-[375px] mx-auto h-[667px] bg-black rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-xl group">
        <iframe
          v-if="!fallbackMobile"
          :src="url"
          class="w-full h-full"
          loading="lazy"
          @error="fallbackMobile = true"
        />
        <div v-else class="w-full h-full relative">
          <img :src="fallbackImage" :alt="title" class="w-full h-full object-cover opacity-70" />
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition"
          >
            📱 Voir version mobile
          </a>
        </div>
      </div>

    </div>

    <!-- Text column -->
    <div class="w-full md:w-1/2 space-y-4 text-left">
      <h3 class="text-xl font-bold text-slate-900">
        {{ title }} <span class="text-sm text-gray-400 font-normal">({{ year }})</span>
      </h3>
      <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        {{ description }}
      </p>
      <a :href="url" target="_blank" class="inline-block text-cyan-600 hover:underline text-sm font-medium">
        🔗 Voir le site
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  year: String,
  url: String,
  fallbackImage: String,
  description: String
})

const fallbackDesktop = ref(false)
const fallbackMobile = ref(false)
</script>
