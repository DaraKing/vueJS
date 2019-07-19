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
import common from './js/common'
import cons from './js/constants'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false

axios.interceptors.response.use(
  response => response,
  error => {
    console.log('ERR ', error)
    const status = error.response ? error.response.status : null
    if (status !== 401) {
      return Promise.reject(error)
    }
    let body = common.returnRefreshTokenBody()

    return axios.post(cons.LOGIN_URL, body)
      .then(response => {
        common.setTokens(response.data)
        error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token
        return axios(error.response.config)
      })
      .catch(error => {
        this.$router.push('auth')
        return Promise.reject(error)
      })
  }
)

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('access_token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

i18n.locale = 'en'
i18n.locale = 'hr'
