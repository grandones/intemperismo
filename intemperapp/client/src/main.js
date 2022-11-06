import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@splidejs/vue-splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

createApp(App).use(router).mount('#app');
