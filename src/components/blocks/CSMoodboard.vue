<!-- CSMoodboard.vue -->
<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-extrabold">🎨 {{ block.title }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(it,i) in (block.items||[])" :key="i" class="space-y-2">
        <AnnotatedImage :src="it.src" :alt="it.alt" :caption="it.title" :legend="it.rationale" @open="open(it)" />
      </div>
    </div>
    <LightboxDialog v-if="active" ref="lb" :src="active.src" :alt="active.alt" :caption="active.title" />
  </section>
</template>
<script setup>
import { ref } from 'vue'
import AnnotatedImage from '../primitives/AnnotatedImage.vue'
import LightboxDialog from '../primitives/LightboxDialog.vue'
const props = defineProps({ block:Object })
const lb = ref(null); const active = ref(null)
function open(it){ active.value = it; lb.value?.open() }
</script>
