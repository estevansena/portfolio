import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import TechStack from '../views/TechStack.vue'
import ContactMe from '../views/ContactMe.vue'
import Download from '../views/Download.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/About',
    component: About
  },
  {
    path: '/Projects',
    component: Projects
  },
  {
    path: '/TechStack',
    component: TechStack
  },
  {
    path: '/ContactMe',
    component: ContactMe
  },
  {
    path: '/Download',
    component: Download
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
