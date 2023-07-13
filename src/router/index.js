// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name:'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    name:'Home',
    props:true,
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name:'about-us',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/shop',
    name:'shop',
    component: () => import('@/views/Shop.vue'),
  },
  {
    path: '/product',
    name:'product',
    props:true,
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name:'not-found',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
