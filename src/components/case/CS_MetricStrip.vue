<script setup lang="ts">
defineProps<{ items: Array<{ label: string; value: string }> }>()
</script>

<template>
  <section class="my-8">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div v-for="(m, i) in items" :key="i" class="rounded-xl border border-slate-200 p-4 bg-white">
        <div class="text-2xl font-extrabold">{{ m.value }}</div>
        <div class="text-slate-600 text-sm">{{ m.label }}</div>
      </div>
    </div>
  </section>
</template>
