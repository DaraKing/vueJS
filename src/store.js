import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
    userProducts: JSON.parse(localStorage.getItem('user_products'))
  },
  mutations: {
    changeTokens (state, tokens) {
      state.accessToken = tokens.accessToken
      state.refreshToken = tokens.refreshToken
    },
    changeUserProducts (state, products) {
      state.userProducts = products
    }
  },
  actions: {
    changeTokens (context) {
      context.commit('changeTokens')
    },
    changeUserProducts (context) {
      context.commit('changeUserProducts')
    }
  }
})
