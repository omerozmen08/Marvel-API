import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueResponsiveness } from 'vue-responsiveness'

createApp(App).use(VueResponsiveness).use(store).use(router).mount('#app')
