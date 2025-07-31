<template>
  <div
    class="bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-200 cursor-pointer h-full flex flex-col justify-between"
    :class="selected ? 'ring-2 ring-cyan-400' : 'hover:ring-1 hover:ring-white/20'"
    @click="$emit('toggle', brick)"
  >
    <h3 class="text-lg font-semibold text-cyan-300">{{ brick.title }}</h3>
    <p class="text-sm text-gray-300 mt-2">{{ brick.description || 'Un élément modulaire de votre pack digital.' }}</p>
    <div class="mt-4 text-sm text-right font-semibold text-white">
      {{ brick.price }}€
    </div>
  </div>
</template>

<script setup>
defineProps({
  brick: Object,
  selected: Boolean
})

defineEmits(['toggle'])
</script>

<style scoped>
div:active {
  transform: scale(0.98);
}
</style>
