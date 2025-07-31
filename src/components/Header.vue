<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <router-link to="/" class="text-sm font-bold text-slate-800 hover:text-blue-600">
        GL Dev & Design
      </router-link>

      <!-- Desktop Nav -->
      <nav class="space-x-6 hidden md:flex">
        <router-link to="/" class="text-sm text-slate-700 hover:text-blue-600">Accueil</router-link>
        <router-link to="/services" class="text-sm text-slate-700 hover:text-blue-600">Services</router-link>
        <router-link to="/contact" class="text-sm text-slate-700 hover:text-blue-600">Contact</router-link>
        <router-link
  to="/selector"
  class="text-sm bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full font-semibold shadow transition"
>
  🧱 Composez votre pack
</router-link>

      </nav>

      <!-- Burger button mobile -->
      <button class="md:hidden text-slate-700" @click="menuOpen = !menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link to="/" class="block text-sm text-slate-700 hover:text-blue-600">Accueil</router-link>
      <router-link to="/services" class="block text-sm text-slate-700 hover:text-blue-600">Services</router-link>
      <router-link to="/contact" class="block text-sm text-slate-700 hover:text-blue-600">Contact</router-link>
      <router-link to="/selector" class="block text-sm text-cyan-600 font-semibold">
  🧱 Composez votre pack
</router-link>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
header {
  transition: all 0.2s ease-in-out;
}
</style>