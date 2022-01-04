import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
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
    path: '/celestialzenith',
    name: 'CelestialZenith',
    component: () => import('../views/ProjectViews/CelestialZenith.vue')
  },
  {
    path: '/bloodline',
    name: 'Bloodline',
    component: () => import('../views/ProjectViews/Bloodline.vue')
  },
  {
    path: '/planetaryrevelation',
    name: 'PlanetaryRevelation',
    component: () => import('../views/ProjectViews/PlanetaryRevelation.vue')
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
    path: '/sourcecodemodeler',
    name: 'SourceCodeModeler',
    component: () => import('../views/ProjectViews/SourceCodeModeler.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
