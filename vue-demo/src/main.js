// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/fontIcon/iconfont.js'
import Iconsvg from './components/iconSvg.vue'
import axios from 'axios'
import Vuex from 'vuex'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import ElementUI from 'element-ui';

Vue.component('Iconsvg', Iconsvg);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(GeminiScrollbar)
Vue.use(Vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})