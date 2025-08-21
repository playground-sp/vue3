import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page3 from '@/views/Page3.vue'
import Page4 from '@/views/Page4.vue'
import Page5 from '@/views/Page5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    { path: './page3', name: 'page3', component: Page3, },
    { path: './page4', name: 'page4', component: Page4, },
    { path: './page5', name: 'page5', component: Page5, },
  ],
})

export default router
