<script setup lang="ts">
defineProps<{ author?: string; role?: string }>()
</script>

<template>
  <blockquote class="my-10 rounded-2xl bg-slate-50 border border-slate-200 p-6">
    <p class="text-lg md:text-xl leading-relaxed">“<slot />”</p>
    <footer v-if="author" class="mt-3 text-sm text-slate-600">
      — {{ author }} <span v-if="role" class="opacity-70">· {{ role }}</span>
    </footer>
  </blockquote>
</template>
