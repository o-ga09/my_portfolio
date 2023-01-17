import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/announce',
      name: 'announce',
      component: () => import('./pages/Announce.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('./pages/Policy.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('./pages/Feedback.vue')
    },
    {
      path: '/',
      name: 'self-introduction',
      component: () => import('./pages/self-introduction.vue')
    }
  ]
})