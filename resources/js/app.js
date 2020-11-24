import Vue from 'vue'
import '@/js/plugins/axios'
import App from '@/js/views/App.vue'
import router from '@/js/routes'
import { Swiper,  Autoplay, Navigation, Pagination} from 'swiper'
import i18n from '@/js/i18n'
import store from '@/js/store'
Swiper.use([Autoplay, Navigation, Pagination])
Vue.config.productionTip = false
Vue.component('sandTime', ()=> import('@haiku/burf-sandtime/vue.js'))
Vue.component('Title', ()=> import('@haiku/burf-title/vue'))
new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app')
