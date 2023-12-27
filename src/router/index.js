import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// using route 'component: () =>' this generates a separate chunk (About.[hash].js) for this route
// route level code-splitting which is lazy-loaded when the route is visited. (We only load what we need)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }
  ]
})

export default router
