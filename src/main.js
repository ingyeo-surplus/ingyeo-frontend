import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App).use(router).use(store).use(VueToast, { position: 'top', duration: 1500 }).mount('#app');
