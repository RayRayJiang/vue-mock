import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/drama',
    name: 'Drama',
    component: () => import('../views/Drama.vue'),
  },


]

const router = new VueRouter({
  routes
})

export default router
