import HelloWorld from './components/HelloWorld.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HelloWorld, props: { msg: 'Hello World!' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;