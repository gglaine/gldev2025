<template>
  <footer class="bg-slate-900 text-white py-10 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-sm">
      
      <!-- À propos -->
      <div>
        <h2 class="text-white font-semibold mb-2">GL Dev & Design</h2>
        <p class="text-white/70 leading-relaxed">
          Design & Code sur mesure. Expérience utilisateur au cœur de chaque projet.
        </p>
      </div>

      <!-- Navigation rapide -->
      <div>
        <h2 class="text-white font-semibold mb-2">Navigation</h2>
        <ul class="space-y-1">
          <li><router-link to="/" class="hover:underline text-white/70">Accueil</router-link></li>
          <li><router-link to="/services" class="hover:underline text-white/70">Services</router-link></li>
          <li><router-link to="/contact" class="hover:underline text-white/70">Contact</router-link></li>
          <li><router-link to="/selector" class="hover:underline text-white/70">Composez votre pack</router-link></li>
        </ul>
      </div>

      <!-- Infos légales -->
      <div>
        <h2 class="text-white font-semibold mb-2">Informations</h2>
        <p class="text-white/70">SIRET : 838 357 614 00018</p>
        <p class="text-white/70">© 2025 Guillaume Laine Développement</p>
        <p class="text-white/70">Tous droits réservés.</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
// Nothing needed here yet
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
