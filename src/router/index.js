import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 1. Import ProjectsView directly at the top
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // 2. Use the imported component directly instead of lazy-loading
      component: ProjectsView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'), // Lazy-loaded
    },
    {
      path: '/python-django-resume',
      name: 'python-resume',
      component: () => import('../views/PythonResumeView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactView.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
