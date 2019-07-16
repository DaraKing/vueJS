import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'
import Vuex from 'vuex'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  computed: {
    accessToken () {
      return store.state.accessToken
    },
    refreshToken () {
      return store.state.refreshToken
    },
    user () {
      return store.state.user
    }
  },
  render: h => h(App)
}).$mount('#app')

i18n.locale = 'en'
i18n.locale = 'hr'
