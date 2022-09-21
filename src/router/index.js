import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Service from '../views/Service.vue'
// import Portfolio from '../views/Portfolio.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    // component: About,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue'),
    // component: Experience,
  },
  // {
  //   path: '/service',
  //   name: 'Service',
  //   component: () => import('../views/Service.vue'),
    // component: Service,
  // },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    children: [
      {
        path: ':id',
        name: 'project',
        props: true,
        component: () => import('../components/portfolio/Project.vue'),
      }
    ]
    // component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    // component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

export default router
