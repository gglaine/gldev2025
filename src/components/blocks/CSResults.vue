<!-- CSResults.vue -->
<template>
  <section class="space-y-3">
    <h2 class="text-2xl font-extrabold">🏁 {{ block.title }}</h2>
    <ul class="grid sm:grid-cols-2 gap-3">
      <li v-for="(h,i) in (block.highlights||[])" :key="i" class="p-4 rounded-xl border bg-white">
        <span class="mr-2">{{ h.icon || '✅' }}</span>{{ h.text }}
      </li>
    </ul>
  </section>
</template>
<script setup>
defineProps({ block: Object })
</script>
