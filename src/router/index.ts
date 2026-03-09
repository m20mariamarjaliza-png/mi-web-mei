import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import ProjectsPage from '../pages/home/ProjectsPage.vue'
import AboutPage from '../pages/home/AboutPage.vue'
import ContactPage from '../pages/home/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage }
  ]
})

export default router