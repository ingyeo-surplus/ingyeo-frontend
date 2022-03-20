import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/user/Login.vue';
import Army from '../components/army/Army.vue';
import Register from '../components/user/Register.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/army', component: Army },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
