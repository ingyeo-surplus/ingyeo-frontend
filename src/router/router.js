import { createRouter, createWebHistory } from 'vue-router';
import routePath from './path';


const router = createRouter({
  history: createWebHistory(),
  routePath,
})

export default router;
