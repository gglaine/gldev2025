<!-- src/components/case/CS_Subnav.vue -->
<script setup lang="ts">
const props = defineProps<{ base?: string }>()
const base = props.base || '/case-studies/storyengines'
const items = [
  { to: `${base}/logo`,   label: 'Logo & Identité' },
  { to: `${base}/cms`,    label: 'CMS (Decap)' },
  { to: `${base}/seo`,    label: 'SEO & Performance' },
]
</script>

<template>
  <nav class="sticky top-4 z-10 bg-white/70 backdrop-blur rounded-xl p-2">
    <ul class="flex flex-wrap gap-2">
      <li v-for="it in items" :key="it.to">
        <RouterLink
          :to="it.to"
          class="px-3 py-1.5 rounded-lg text-sm border hover:bg-slate-50 data-[active=true]:bg-slate-900 data-[active=true]:text-white"
          :data-active="$route.path === it.to"
        >
          {{ it.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
