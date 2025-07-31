<template>
  <div class="bg-neutral-900 w-full sm:max-w-lg rounded-t-2xl sm:rounded-xl p-6 shadow-xl text-white">
    <h2 class="text-xl font-bold mb-4">🧪 Votre pack personnalisé</h2>

    <ul class="divide-y divide-white/10 mb-6">
      <li v-for="brick in selectedBricks" :key="brick.id" class="py-2 flex justify-between">
        <span>{{ brick.title }}</span>
        <span>{{ brick.price }}€</span>
      </li>
    </ul>

    <div class="flex justify-between text-lg font-bold border-t border-white/10 pt-4">
      <span>Total</span>
      <span>{{ totalPrice }}€</span>
    </div>

    <button class="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded text-center font-semibold" @click="$emit('close')">
      Fermer
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedBricks: Array,
  allBricks: Array
})

const totalPrice = computed(() =>
  props.selectedBricks.reduce((sum, b) => sum + b.price, 0)
)
</script>
