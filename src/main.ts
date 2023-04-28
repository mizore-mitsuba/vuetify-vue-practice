/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// Rooting
import router from './router';
import store from './store/index';

// Python
import axios from 'axios';

const vuetify = createVuetify({});

const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');
