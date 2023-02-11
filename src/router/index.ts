import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { menuList } from '@/settings'

const routes: Array<RouteRecordRaw> = [
  ...menuList
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router