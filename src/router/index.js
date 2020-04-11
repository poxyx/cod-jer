import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter)
Vue.use(Vuelidate)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/restaurant-login',
    name: 'RestaurantLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestaurantLogin.vue')
  },
  {
    path: '/restaurant-register',
    name: 'RestaurantRegister',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestaurantRegister.vue')
  },
  {
    path: '/restaurant-home',
    name: 'RestaurantHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestaurantHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
