import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/index.vue' 

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'episode',
    path: '/episode/:guid',
    component: () => import('@/pages/episode/index.vue')
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})