import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import TechStack from '../views/TechStack.vue'

const routes = [
  {
    path: '/Home',
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
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
