import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueResponsiveness } from 'vue-responsiveness'
import PrimeVue from 'primevue/config';

createApp(App).use(PrimeVue).use(store).use(router).mount('#app')
