<!-- AnnotatedImage.vue -->
<template>
  <figure class="relative rounded-xl overflow-hidden border border-slate-200 bg-white">
    <img :src="src" :alt="alt || ''" class="w-full h-auto" @click="$emit('open')" />
    <figcaption v-if="caption || legend" class="p-3 text-xs text-slate-600 border-t">
      <div v-if="caption" class="font-medium">{{ caption }}</div>
      <div v-if="legend" class="mt-1 text-slate-500">{{ legend }}</div>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps({ src:String, alt:String, caption:String, legend:String })
</script>
