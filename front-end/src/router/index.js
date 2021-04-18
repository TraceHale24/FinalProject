import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddHike from '../views/AddHike.vue'
import AddNewHike from '../views/AddNewHike.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addNewHike',
    name: 'AddNewHike',
    component: AddNewHike
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/addHike',
    name: 'AddHike',
    component:AddHike
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
