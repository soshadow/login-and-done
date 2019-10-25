import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login.vue'
import Course from '../pages/course.vue'
import Index from '../pages/index.vue'
import UserCenter from '../pages/userCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/userCenter",
    name: "userCenter",
    component: UserCenter
  },
  {
    path: "/course/:id",
    name: "course",
    component: Course
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
