import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token')
  },
  mutations: {
    changeTokens (state, tokens) {
      state.accessToken = tokens.accessToken
      state.refreshToken = tokens.refreshToken
    }
  },
  actions: {
    changeTokens (context) {
      context.commit('changeTokens')
    }
  }
})
