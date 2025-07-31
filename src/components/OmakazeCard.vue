<template>
  <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md flex flex-col gap-4 text-left h-full">
    <h3 class="text-xl font-bold text-cyan-300">{{ title }}</h3>
    <p class="text-gray-300 text-sm leading-relaxed">{{ description }}</p>
    <p class="text-xs text-gray-400 italic mt-auto">{{ price }}</p>
    <button class="mt-4 w-fit px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-sm font-semibold text-white transition">
      Voir ce que ça inclut
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  price: String
})
</script>

<style scoped>
/* optional hover interaction */
div:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>
