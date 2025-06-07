import Vue from 'vue'
import VueRouter from 'vue-router'
import Games from '../views/Games.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Games
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },
  {
    path: '/software',
    name: 'Softwares',
    component: () => import('../views/Softwares.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  
  // Gamedev Project Details pages.
  {
    path: '/vaultofdarkness',
    name: 'VaultOfDarkness',
    component: () => import('../views/ProjectViews/VaultOfDarkness.vue')
  },
  {
    path: '/metroidvania',
    name: 'Metroidvania',
    component: () => import('../views/ProjectViews/Metroidvania.vue')
  },
  {
    path: '/planetaryrevelation',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
