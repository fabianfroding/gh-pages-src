import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GameProjects',
    component: () => import('../views/GameProjects.vue'),
  },
  {
    path: '/software',
    name: 'Software',
    component: () => import('../views/SoftwareProjects.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/ResearchProjects.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
  // Gamedev Project Details pages.
  {
    path: '/abyssus',
    name: 'Abyssus',
    component: () => import('../views/ProjectViews/Abyssus.vue')
  },
  {
    path: '/catseye',
    name: 'Cats Eye',
    component: () => import('../views/ProjectViews/CatsEye.vue')
  },
  {
    path: '/lms',
    name: 'Last Man Sitting',
    component: () => import('../views/ProjectViews/LMS.vue')
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
    path: '/vod',
    name: 'VaultOfDarkness',
    component: () => import('../views/ProjectViews/VaultOfDarkness.vue')
  },

  // SE Project Details pages.
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
    path: '/parallelcar',
    name: 'ParallelCar',
    component: () => import('../views/ProjectViews/ParallelCar.vue')
  },
  {
    path: '/sourcecodemodeler',
    name: 'SourceCodeModeler',
    component: () => import('../views/ProjectViews/SourceCodeModeler.vue')
  },
  
  // Research Project Details pages.
  {
    path: '/onlylead',
    name: 'OnlyLead',
    component: () => import('../views/ProjectViews/OnlyLead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}
})

export default router
