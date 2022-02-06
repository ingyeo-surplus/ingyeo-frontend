import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../components/user/Login.vue';

const routes = [
  { path: '/', component: HelloWorld, props: { msg: 'Hello World!' } },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
