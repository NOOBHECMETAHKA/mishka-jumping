import './assets/main.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(PrimeVue).mount('#app');
