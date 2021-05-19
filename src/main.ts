import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@/assets/css/tailwind.scss';
import globalStore, { GlobalStoreKey } from './store/index';
import '@/plugins/chartjs';

const app = createApp(App);
app.provide(GlobalStoreKey, globalStore());
app.use(globalStore).use(router).mount('#app');
