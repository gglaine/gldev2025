<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  video?: string
  caption?: string
  rounded?: boolean
}>()
</script>

<template>
  <figure class="my-8">
    <div :class="['overflow-hidden border border-slate-200', rounded !== false ? 'rounded-2xl' : '']">
      <img v-if="src" :src="src" :alt="alt || ''" class="w-full h-auto">
      <video v-else-if="video" :src="video" controls class="w-full h-auto"></video>
    </div>
    <figcaption v-if="caption" class="text-sm text-slate-500 mt-2">{{ caption }}</figcaption>
  </figure>
</template>
