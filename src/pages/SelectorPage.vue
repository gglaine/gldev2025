<template>
  <main class="min-h-screen bg-neutral-950 text-white px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-center">🧱 Composez votre pack personnalisé</h1>

    <!-- Brick Grid -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
      <BrickCard
        v-for="brick in bricks"
        :key="brick.id"
        :brick="brick"
        :selected="selectedBrickIds.includes(brick.id)"
        @toggle="toggleBrick"
      />
    </section>

    <!-- Sticky Molecule Bar (mobile friendly) -->
    <div v-if="selectedBrickIds.length > 0 && !showDetails" class="fixed bottom-0 left-0 right-0 bg-cyan-600 text-white px-4 py-3 flex items-center justify-between shadow-xl z-50">
      <div>
        🧪 {{ selectedBrickIds.length }} briques sélectionnées — {{ totalPrice }}€
      </div>
      <button class="bg-white text-cyan-600 font-bold px-4 py-2 rounded shadow" @click="showDetails = true">
        Voir le pack
      </button>
    </div>

    <!-- Detail Drawer -->
    <div v-if="showDetails" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex justify-center items-end sm:items-center">
      <MoleculePanel
        :selectedBricks="selectedBricks"
        :allBricks="bricks"
        @close="showDetails = false"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { bricks } from '../data/bricks.js'
import BrickCard from '../components/BrickCard.vue'
import MoleculePanel from '../components/MoleculePanel.vue'

const selectedBrickIds = ref([])
const showDetails = ref(false)

function toggleBrick(brick) {
  const index = selectedBrickIds.value.indexOf(brick.id)
  if (index === -1) selectedBrickIds.value.push(brick.id)
  else selectedBrickIds.value.splice(index, 1)
}

const selectedBricks = computed(() =>
  bricks.filter(b => selectedBrickIds.value.includes(b.id))
)

const totalPrice = computed(() =>
  selectedBricks.value.reduce((sum, b) => sum + b.price, 0)
)
</script>

<style scoped>
body {
  overscroll-behavior: none;
}
</style>
