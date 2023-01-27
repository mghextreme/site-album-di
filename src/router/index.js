import { createRouter, createWebHistory } from 'vue-router'
import AlbumView from '../views/AlbumView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AlbumView
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/album',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
