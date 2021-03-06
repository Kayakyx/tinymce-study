import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      // route level code-splitting
      component: () => import('./views/Tinymce.vue')
    },
    {
      path: '/tinymce4',
      name: 'tinymce4',
      // route level code-splitting
      component: () => import('./views/Tinymce4.vue')
    },
    {
      path: '/tinymcevue',
      name: 'tinymcevue',
      // route level code-splitting
      component: () => import('./views/TinymceVue.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      component: () => import('./views/Edit.vue')
    }
  ]
})
