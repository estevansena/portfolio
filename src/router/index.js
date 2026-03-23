import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'


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
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
