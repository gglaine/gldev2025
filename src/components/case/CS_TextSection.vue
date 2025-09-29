<script setup lang="ts">
defineProps<{ title?: string; kicker?: string }>()
</script>

<template>
  <section class="py-10 md:py-12">
    <div class="max-w-3xl">
      <p v-if="kicker" class="uppercase tracking-[0.18em] text-xs text-cyan-700 font-semibold mb-2">{{ kicker }}</p>
      <h3 v-if="title" class="text-2xl md:text-3xl font-bold mb-4">{{ title }}</h3>
      <div class="prose prose-slate max-w-none">
        <slot />
      </div>
    </div>
  </section>
</template>
