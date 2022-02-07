import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/user/Login.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
