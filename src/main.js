import './assets/css/app.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos'
import 'aos/dist/aos.css'


const app = createApp(App)
import feather from 'feather-icons'
feather.replace()


app.use(router)
app.use(VueScrollTo)
app.use(AOS)
AOS.init()

app.mount('#app')

// Update the theme index.html based on what's selected

document.querySelector('body').classList.add("bg-primary-night-dark")