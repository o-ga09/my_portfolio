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
      path: '/',
      name: 'self-introduction',
      component: Home
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skill
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
        {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
