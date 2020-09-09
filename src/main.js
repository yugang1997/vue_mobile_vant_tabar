import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/rest.css'

import './vant/vant.js'

import './lib/mui/js/mui.min.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')