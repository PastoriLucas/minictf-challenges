import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.use(Buefy)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.$cookies.set('flag', atob('Y3RmbGFne1RoZV9jb29raWVfaXNfYV9saWV9'));

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')