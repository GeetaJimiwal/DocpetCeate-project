import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogsView from '../views/DogsView.vue'
import PetView from '../views/PetView.vue'
import CatsView from '../views/CatsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dog',
    name: 'dog',
    component: DogsView
  },
  {
    path: '/cats',
    name: 'cats',
    component: CatsView
  },
  {
    path: '/pets/:id',
    name: 'pet',
    component: PetView
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
