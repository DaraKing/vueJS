import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    refreshToken: '',
    user: null
  },
  mutations: {
    changeTokens (state, tokens) {
      state.accessToken = tokens.accessToken
      state.refreshToken = tokens.refreshToken
    },
    changeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    changeTokens (context) {
      context.commit('changeTokens')
    },
    changeUser (context) {
      context.commit('changeUser')
    }
  }
})
