import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login.vue')
  },
  {
    path: '/load',
    name: 'load',
    component: ()=> import('@/views/load.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=> import('@/views/profile.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: ()=> import('@/views/report.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: ()=> import('@/views/notifications.vue')
  },
  {
    path: '/load-history',
    name: 'load-history',
    component: ()=> import('@/views/load-history.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
