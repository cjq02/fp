import Vue from "vue"
import Vuetify from 'vuetify'
import { createRouter } from './router'
import 'vuetify/dist/vuetify.css'
import './assets/stylus/main.styl'
import './scss/main.scss'
import NavComponent from "./components/nav.vue"


Vue.use(Vuetify)

const app = new Vue({
  router: createRouter(),
  components: {
    NavComponent
  }
}).$mount('#app');