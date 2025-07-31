import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import Branding from '../pages/BrandingPage.vue'
import Dev from '../pages/DevPage.vue'
import SelectorPage from '../pages/SelectorPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/services/branding', name: 'Branding', component: Branding },
  { path: '/services/developpement', name: 'Dev', component: Dev },
  { path: '/selector', name: 'Selector', component: SelectorPage },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
