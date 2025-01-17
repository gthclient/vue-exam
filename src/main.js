import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';

const app = createApp(App);

app.use(router);
app.use(store);

window.Store = store;

app.mount('#app');