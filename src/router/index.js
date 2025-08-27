// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import Branding from '../pages/BrandingPage.vue'
import Dev from '../pages/DevPage.vue'
import SelectorPage from '../pages/SelectorPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/projets', name: 'Projects', component: ProjectsPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/services/branding', name: 'Branding', component: Branding },
  { path: '/services/dev', name: 'Dev', component: Dev },
  { path: '/selector', name: 'Selector', component: SelectorPage },
  { path: '/a-propos', name: 'A propos', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Back/forward: restore previous position
    if (savedPosition) return savedPosition

    // In-page anchors: scroll to element (use Tailwind's scroll-mt-* to offset sticky headers)
    if (to.hash) {
      return { el: to.hash }
    }

    // Default: go to top
    return { left: 0, top: 0 }
  }
})

export default router
