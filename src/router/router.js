import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/user/Login.vue';
import Army from '../components/army/Army.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/army', component: Army },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
