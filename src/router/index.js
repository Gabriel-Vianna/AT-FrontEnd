import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComoChegar from '../views/ComoChegar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/como-chegar',
    name: 'ComoChegar',
    component: ComoChegar
  }
]

const router = new VueRouter({
  routes
})

export default router
