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

  // 👇 Add one route per case study (lazy import)
  { path: '/projets/storyengines', name: 'CSStoryEngines', component: () => import('../pages/case-studies/storyengines.vue') },
  { path: '/projets/funcenter',    name: 'CSFuncenter',    component: () => import('../pages/case-studies/funcenter.vue') },
  { path: '/projets/antishirt',    name: 'CSAntishirt',    component: () => import('../pages/case-studies/antishirt.vue') },

  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { left: 0, top: 0 }
  }
})

export default router
