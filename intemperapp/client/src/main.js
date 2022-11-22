import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// eslint-disable-next-line import/extensions
import '@splidejs/vue-splide/css';

import 'bootstrap';

createApp(App).use(router).mount('#app');
