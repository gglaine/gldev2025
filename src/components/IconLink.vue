<template>
  <a
    :href="href"
    class="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition"
    :title="title"
    v-bind="external ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
  >
    <slot />
    <span class="sr-only">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
  title?: string
  external?: boolean
}>()
</script>
