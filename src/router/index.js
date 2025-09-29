// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// EITHER place these files under /src/pages/... OR update paths below to match reality.
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import BrandingPage from '../pages/BrandingPage.vue'
import DevPage from '../pages/DevPage.vue'
import SelectorPage from '../pages/SelectorPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import CaseStudy from '../pages/case-studies/CaseStudy.vue'

// Lazy pages
const CaseStudiesIndex = () => import('../pages/case-studies/index.vue')



const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/case-studies/:slug', name: 'CaseStudy', component: CaseStudy },

  // Core pages
  { path: '/a-propos', name: 'About', component: AboutPage },          // FR canonical
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/services/branding', name: 'Branding', component: BrandingPage },
  { path: '/services/dev', name: 'Dev', component: DevPage },
  { path: '/selector', name: 'Selector', component: SelectorPage },

  // Projects listing (FR canonical)
  { path: '/projets', name: 'Projects', component: ProjectsPage },

  // Case studies canonical index
  { path: '/casestudies', name: 'CaseStudiesIndex', component: CaseStudiesIndex },

  // Hyphenated alias kept for old links
  { path: '/case-studies', redirect: '/casestudies' },
  {
      path: '/case-studies/storyengines',
      name: 'cs-storyengines',
      component: () => import('@/pages/case-studies/storyengines.vue'),
      meta: { title: 'StoryEngines — Étude de cas' }
    },

 {
      path: '/case-studies/storyengines',
      name: 'cs-storyengines',
      component: () => import('../pages/case-studies/storyengines.vue'),
    },

    // SUBPAGES (files live in src/caseStudies/storyengines)
    {
      path: '/case-studies/storyengines/logo',
      name: 'cs-storyengines-logo',
      component: () => import('../caseStudies/storyengines/Logo.vue'),
    },
    {
      path: '/case-studies/storyengines/layout',
      name: 'cs-storyengines-layout',
      component: () => import('../caseStudies/storyengines/Layout.vue'),
    },
    {
      path: '/case-studies/storyengines/cms',
      name: 'cs-storyengines-cms',
      component: () => import('../caseStudies/storyengines/CMS.vue'),
    },


  // 🔑 Dynamic case study route (one component, many slugs)
  {
    path: '/casestudies/:slug',
    name: 'CaseStudy',
    component: CaseStudy,
    props: true,
    // Keep legacy aliases working (map old paths to the same dynamic route)
    alias: [
      // Old English pattern
      '/case-studies/:slug',
      // Old FR “projets/:slug”
      '/projets/:slug'
    ]
  },

  // Catch-all → home (or a custom 404)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(), // add a base() here if you deploy under a subpath
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { left: 0, top: 0 }
  }
})

export default router
