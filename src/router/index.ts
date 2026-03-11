import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import ProjectsPage from '../pages/home/ProjectsPage.vue'
import ProjectDetailPage from '../pages/home/ProjectDetailPage.vue'
import ArtDrawingPage from '../pages/home/ArtDrawingPage.vue'
import PhotographyPage from '../pages/home/PhotographyPage.vue'
import TypographyPage from '../pages/home/TypographyPage.vue'
import GraphicDesignPage from '../pages/home/GraphicDesignPage.vue'
import VolumePage from '../pages/home/VolumePage.vue'
import AudiovisualesPage from '../pages/home/AudiovisualesPage.vue'
import IllustrationPage from '../pages/home/IllustrationPage.vue'
import AboutPage from '../pages/home/AboutPage.vue'
import ContactPage from '../pages/home/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { 
      path: '/projects', 
      component: ProjectsPage,
      children: [
        { path: ':id', component: ProjectDetailPage }
      ]
    },
    { path: '/art-drawing', component: ArtDrawingPage },
    { path: '/photography', component: PhotographyPage },
    { path: '/typography', component: TypographyPage },
    { path: '/graphic-design', component: GraphicDesignPage },
    { path: '/volume', component: VolumePage },
    { path: '/audiovisuales', component: AudiovisualesPage },
    { path: '/illustration', component: IllustrationPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage }
  ]
})

export default router
