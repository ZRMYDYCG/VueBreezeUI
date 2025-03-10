import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/Button/index.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../views/Alert/index.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/Icon/index.vue')
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import('../views/Collapse/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
