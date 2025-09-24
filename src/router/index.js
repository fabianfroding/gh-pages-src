import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
  // Gamedev Project Details pages.
  {
    path: '/vod',
    name: 'VaultOfDarkness',
    component: () => import('../views/ProjectViews/VaultOfDarkness.vue')
  },
  {
    path: '/nara',
    name: 'Metroidvania',
    component: () => import('../views/ProjectViews/Metroidvania.vue')
  },
  {
    path: '/solarsystemsim',
    name: 'PlanetaryRevelation',
    component: () => import('../views/ProjectViews/PlanetaryRevelation.vue')
  },
  {
    path: '/abyssus',
    name: 'Abyssus',
    component: () => import('../views/ProjectViews/Abyssus.vue')
  },

  // SE Project Details pages.
  {
    path: '/portfoliosite',
    name: 'PortfolioSite',
    component: () => import('../views/ProjectViews/PortfolioSite.vue')
  },
  {
    path: '/codeanalyzer',
    name: 'CodeAnalyzer',
    component: () => import('../views/ProjectViews/CodeAnalyzer.vue')
  },
  {
    path: '/cybercar',
    name: 'CyberCar',
    component: () => import('../views/ProjectViews/CyberCar.vue')
  },
  {
    path: '/mediashop',
    name: 'MediaShop',
    component: () => import('../views/ProjectViews/MediaShop.vue')
  },
  {
    path: '/sourcecodemodeler',
    name: 'SourceCodeModeler',
    component: () => import('../views/ProjectViews/SourceCodeModeler.vue')
  },
  {
    path: '/parallelcar',
    name: 'ParallelCar',
    component: () => import('../views/ProjectViews/ParallelCar.vue')
  },

  // Misc/Research Project Details pages.
  {
    path: '/onlylead',
    name: 'OnlyLead',
    component: () => import('../views/ProjectViews/OnlyLead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
