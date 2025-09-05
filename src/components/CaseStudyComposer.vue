<template>
  <article class="max-w-5xl mx-auto px-6 py-16 space-y-12">
    <header class="text-center space-y-2">
      <p class="uppercase text-xs text-slate-500">{{ study.hero?.kicker }}</p>
      <h1 class="text-4xl font-black">{{ study.hero?.title || study.title }}</h1>
    </header>
    <component v-for="(b,i) in study.blocks" :key="i" :is="blockMap[b.type] || 'div'" :block="b" />
  </article>
</template>
<script setup>
import CSProblem from './blocks/CSProblem.vue'
import CSMoodboard from './blocks/CSMoodboard.vue'
import CSResults from './blocks/CSResults.vue'
const props = defineProps({ study:Object })
const blockMap = { problem: CSProblem, moodboard: CSMoodboard, results: CSResults }
</script>
