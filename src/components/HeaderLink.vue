<template>
  <RouterLink
    :to="to"
    class="group relative text-sm text-slate-700 hover:text-blue-700 transition-colors
           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
    :aria-current="active ? 'page' : undefined"
  >
    <span class="font-medium"><slot /></span>

    <!-- underline / active indicator -->
    <span
      :class="[
        'pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full rounded',
        active ? 'bg-blue-600' : 'bg-transparent group-hover:bg-blue-400 transition-colors'
      ]"
    />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: [String, Object], required: true },
  active: { type: Boolean, default: false }
})
</script>
