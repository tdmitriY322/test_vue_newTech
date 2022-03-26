import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '@/views/Start'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: Start
  },
  {
    path: '/auth',
    name: 'Authorization',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/MainPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router