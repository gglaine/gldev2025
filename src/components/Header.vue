<template>
  <!-- Lien d'évitement -->
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] bg-black text-white px-3 py-2 rounded">
    Aller au contenu
  </a>

  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-200',
      scrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow' : 'bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm'
    ]"
    role="banner"
  >
    <!-- ROW 1 : Logo + Nav -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Brand -->
<router-link to="/" class="flex items-center gap-2 group" aria-label="Accueil Guillaume Lainé – Digital Craftsman">
  <!-- Monogram -->
  <span
    class="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600
           text-white text-sm font-black tracking-tight shadow-md transition-all group-hover:scale-110 group-hover:shadow-lg"
  >
    GL
  </span>

  <!-- Full Name + Tagline -->
  <span class="flex flex-col leading-tight">
    <span class="text-sm font-extrabold bg-clip-text text-transparent 
                 bg-gradient-to-r from-slate-900 to-slate-600 
                 group-hover:from-blue-700 group-hover:to-cyan-600 transition-colors">
      Guillaume Lainé
    </span>
    <span class="text-[11px] font-medium text-slate-500">Design & Code sur mesure</span>
  </span>
</router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Navigation principale">
        <HeaderLink to="/"                 :active="route.path === '/'">Accueil</HeaderLink>
        <HeaderLink to="/projets"          :active="route.path.startsWith('/projets')">Projets</HeaderLink>
        <HeaderLink to="/services"         :active="route.path.startsWith('/services')">Services</HeaderLink>
        <HeaderLink to="/a-propos"         :active="route.path.startsWith('/a-propos')">À propos</HeaderLink>
        <HeaderLink to="/contact"          :active="route.path.startsWith('/contact')">Contact</HeaderLink>
      </nav>

      <!-- Burger -->
      <button
        class="md:hidden p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 text-slate-800"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Ouvrir le menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- ROW 2 : Icons + Contacts (right-aligned) -->
    <div class="hidden md:flex items-center justify-end gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10">
      <IconLink :href="links.github"   label="GitHub"   title="Voir le code sur GitHub">
        <!-- GitHub -->
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="h-5 w-5"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.03.07 1.58 1.08 1.58 1.08.91 1.59 2.39 1.13 2.98.86.09-.68.36-1.13.65-1.39-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.07c.86 0 1.72.12 2.53.34 1.91-1.32 2.75-1.05 2.75-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.06.37.33.69.97.69 1.96 0 1.42-.01 2.56-.01 2.91 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
      </IconLink>

      <IconLink :href="links.linkedin" label="LinkedIn" title="Profil LinkedIn">
        <!-- LinkedIn -->
        <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.94 8.65v10.3H3.84V8.65h3.1ZM5.39 4.75a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20.16 13.1v5.85h-3.1v-5.34c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.22-.11.52-.11.83v5.54h-3.1s.04-8.99 0-9.95h3.1v1.41c.41-.64 1.14-1.55 2.77-1.55 2.02 0 3.53 1.32 3.53 4.19Z"/></svg>
      </IconLink>

      <IconLink :href="`mailto:${links.email}`" label="Email" title="Écrire un email" >
        <!-- Email -->
        <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
      </IconLink>

      <a :href="`tel:${links.phoneHref}`" class="text-sm text-slate-800 hover:text-blue-700 font-medium">
        {{ links.phoneLabel }}
      </a>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-if="menuOpen" id="mobile-menu" class="md:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
        <div class="px-4 py-3 space-y-1">
          <MobileLink to="/"          @clicked="closeMenu" :active="route.path === '/'">Accueil</MobileLink>
          <MobileLink to="/projets"   @clicked="closeMenu" :active="route.path.startsWith('/projets')">Projets</MobileLink>
          <MobileLink to="/services"  @clicked="closeMenu" :active="route.path.startsWith('/services')">Services</MobileLink>
          <MobileLink to="/a-propos"  @clicked="closeMenu" :active="route.path.startsWith('/a-propos')">À propos</MobileLink>
          <MobileLink to="/contact"   @clicked="closeMenu" :active="route.path.startsWith('/contact')">Contact</MobileLink>

          <!-- Compact contacts/icons -->
          <div class="pt-2 mt-0 border-t border-slate-200 flex items-center gap-4">
            <a :href="links.github"   class="p-2 rounded hover:bg-slate-50" aria-label="GitHub">   <slot name="gh">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.03.07 1.58 1.08 1.58 1.08.91 1.59 2.39 1.13 2.98.86.09-.68.36-1.13.65-1.39-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.07c.86 0 1.72.12 2.53.34 1.91-1.32 2.75-1.05 2.75-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.06.37.33.69.97.69 1.96 0 1.42-.01 2.56-.01 2.91 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
            </slot></a>
            <a :href="links.linkedin" class="p-2 rounded hover:bg-slate-50" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M6.94 8.65v10.3H3.84V8.65h3.1ZM5.39 4.75a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20.16 13.1v5.85h-3.1v-5.34c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.22-.11.52-.11.83v5.54h-3.1s.04-8.99 0-9.95h3.1v1.41c.41-.64 1.14-1.55 2.77-1.55 2.02 0 3.53 1.32 3.53 4.19Z"/></svg>
            </a>
            <a :href="`mailto:${links.email}`" class="p-2 rounded hover:bg-slate-50" aria-label="Email">
              <svg viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
            </a>
            <a :href="`tel:${links.phoneHref}`" class="text-sm font-medium text-slate-800 hover:text-blue-700">
              {{ links.phoneLabel }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import HeaderLink from './HeaderLink.vue'
import MobileLink from './MobileLink.vue'
import IconLink from './IconLink.vue'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)
const scrolled = ref(false)

const links = {
  github:  'https://github.com/gglaine',
  linkedin:'https://www.linkedin.com/in/guillaumelaine/',
  email:   'guillaulelaine2.0@gmail.com',
  phoneHref: '+33619400305',     // format international pour tel:
  phoneLabel: '+33 6 19 40 03 05' // affichage lisible
}

const onScroll = () => { scrolled.value = window.scrollY > 8 }
const closeMenu = () => (menuOpen.value = false)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  router.afterEach(() => (menuOpen.value = false))
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))



/* --- sous-composants inline --- */

</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active { transition: all .18s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateY(-8px); }
.slide-fade-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>
