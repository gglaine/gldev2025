<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'

// charge dynamiquement les pages de case studies
const registry = {
  storyengines: defineAsyncComponent(() => import('@/pages/case-studies/storyengines.vue')),
  funcenter: defineAsyncComponent(() => import('@/pages/case-studies/funcenter.vue')),
  antishirt: defineAsyncComponent(() => import('@/pages/case-studies/antishirt.vue')),
}

const route = useRoute()
const slug = computed(() => route.params.slug)
const Active = computed(() => registry[slug.value])
</script>

<template>
  <section class="min-h-[60svh]">
    <component v-if="Active" :is="Active" />
    <div v-else class="p-8 text-center text-slate-500">
      <h2 class="text-xl font-semibold">Case study not found</h2>
      <p class="mt-2">No page registered for “{{ slug }}”.</p>
    </div>
  </section>
</template>
