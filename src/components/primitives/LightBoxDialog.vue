<!-- components/primitives/LightboxDialog.vue -->
<template>
  <dialog ref="el" class="backdrop:bg-black/70 p-0 rounded-xl overflow-hidden">
    <div class="relative bg-white">
      <img :src="src" :alt="alt || ''" class="max-h-[84vh] max-w-[92vw] object-contain" />
      <div v-if="caption" class="p-3 text-center text-xs text-slate-600">{{ caption }}</div>
      <button
        class="absolute top-2 right-2 rounded-full border border-slate-200 bg-white/90 px-2 py-1 text-xs"
        @click="close"
      >Fermer</button>
    </div>
  </dialog>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({ src: String, alt: String, caption: String })
const el = ref(null)
function open() { el.value?.showModal?.() }
function close() { el.value?.close?.() }

function onKey(e) {
  if (!el.value?.open) return
  if (e.key === 'Escape') close()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

defineExpose({ open, close })
</script>
