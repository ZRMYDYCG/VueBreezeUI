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
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../views/Card/index.vue')
  },
  {
    path: '/drawer',
    name: 'Drawer',
    component: () => import('../views/Drawer/index.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message/index.vue')
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: () => import('../views/Avatar/index.vue')
  },
  {
    path: '/empty',
    name: 'Empty',
    component: () => import('../views/Empty/index.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('../views/Badge/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
