import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Resume from '../components/Resume.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/resume', component: Resume },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
