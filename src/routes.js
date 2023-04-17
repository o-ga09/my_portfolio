import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/self-introduction.vue'
import Skill from './pages/Skill.vue'
import Portfolio from './pages/Portfolio.vue'
import Blog from './pages/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'self-introduction',
      component: Home
    },
    {
      path: '/Skills',
      name: 'self-introduction',
      component: Skill
    },
    {
      path: '/Portfolio',
      name: 'self-introduction',
      component: Portfolio
    },
        {
      path: '/Blog',
      name: 'self-introduction',
      component: Blog
    }
  ]
})
