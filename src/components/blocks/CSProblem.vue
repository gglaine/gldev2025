<!-- CSProblem.vue -->
<template>
  <section class="space-y-3">
    <h2 class="text-2xl font-extrabold">🎯 {{ block.title }}</h2>
    <p class="text-slate-700">{{ block.body_fr }}</p>
    <p v-if="block.body_en" class="text-slate-400 text-sm italic">{{ block.body_en }}</p>
  </section>
</template>
<script setup>
defineProps({ block: Object })
</script>
