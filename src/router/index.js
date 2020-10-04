import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from "@/views/Category";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery/:id',
    name: 'category',
    component: Category,
  },
  {
    path: '/user/:id',
    name: 'photo-card',
    component: () => import(/* webpackChunkName: "userCard" */ '../views/User_photo')
  },
  {
    path: '/user-card/:id',
    name: 'about-user',
    component: () => import(/* webpackChunkName: "userCard" */ '../views/About_user')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
