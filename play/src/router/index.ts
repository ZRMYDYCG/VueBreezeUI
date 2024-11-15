import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/index.vue'
import Avatar from '../views/avatar.vue'
import Card from '../views/card.vue'
import BackTop from '../views/backtop.vue'

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
      },
      {
        path: '/card',
        name: 'card',
        component: Card
      },
      {
        path: '/backtop',
        name: 'backtop',
        component: BackTop
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
