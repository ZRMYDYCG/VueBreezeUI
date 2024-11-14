import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/index.vue'
import Avatar from '../views/avatar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/avatar',
        name: 'avatar',
        component: Avatar
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
