<template>
  <div class="space-y-6">
    <CaseStudyComposer v-if="study" :study="study" />
    <div v-else-if="error" class="p-4 text-sm text-red-600">
      Impossible de charger l’étude « {{ slug }} ». {{ error }}
    </div>
    <div v-else class="p-4 text-sm text-slate-500">Chargement…</div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'
import CaseStudyComposer from './CaseStudyComposer.vue'

const props = defineProps({ slug: { type: String, required: true } })

const study = shallowRef(null)
const error = shallowRef('')

// 1) index all case studies (ts/js)
const modules = import.meta.glob('../caseStudies/*.{ts,js}', { import: 'default' })

onMounted(async () => {
  try {
    // 2) try ts first, then js
    const tryPaths = [
      `../caseStudies/${props.slug}.ts`,
      `../caseStudies/${props.slug}.js`
    ]
    const key = tryPaths.find(p => p in modules)
    if (!key) {
      error.value = 'Fichier non trouvé.'
      return
    }
    const loader = modules[key]
    study.value = await loader()
  } catch (e) {
    console.error(e)
    error.value = 'Erreur de chargement.'
  }
})
</script>
