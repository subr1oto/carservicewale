import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'

import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'mdb-ui-kit/css/mdb.min.css';

import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";



// import CountUp from 'vue-countup-v3'
// import 'animate.css';

// import jquery from 'jquery';

createApp(App).use(router).component("v-select", vSelect).mount('#app')