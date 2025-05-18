import './assets/main.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'vue-toast-notification/dist/theme-default.css';
import "@mdi/font/css/materialdesignicons.css";


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ToastPlugin from 'vue-toast-notification';

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: 'rgb(227 151 91)',
    'primary-darken-1': '#3700B3',
    secondary: 'rgb(0 100 107)',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
  theme: {

    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  }
})


app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(ToastPlugin);

app.mount('#app');
