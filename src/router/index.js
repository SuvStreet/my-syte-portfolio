import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: `/:locale/home`,
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/:locale/about',
    name: 'About',
    props: true,
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:locale/experience',
    name: 'Experience',
    props: true,
    component: () => import('../views/Experience.vue'),
  },
  {
    path: '/:locale/portfolio',
    name: 'Portfolio',
    props: true,
    component: () => import('../views/Portfolio.vue'),
  },
  {
    path: '/:locale/project/:id',
    name: 'Project',
    props: true,
    component: () => import('../views/Project.vue'),
  },
  {
    path: '/:locale/contact',
    name: 'Contact',
    props: true,
    component: () => import('../views/Contact.vue'),
  },
  { path: '/:notFound(.*)', redirect: `/${store.getters['i18n/getLanguage']}/home` }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

export default router
