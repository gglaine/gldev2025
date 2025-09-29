<script setup lang="ts">
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <article class="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
    <header class="sr-only">
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </header>
    <slot />
  </article>
</template>
