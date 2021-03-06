import cons from './constants'
import axios from 'axios'
import store from '../store'

function validateEmail (email) {
  // eslint-disable-next-line
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function setTokens (data) {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)
  let tokens = {
    'accessToken': data.access_token,
    'refreshToken': data.refresh_token
  }
  store.commit('changeTokens', tokens)
}

function returnLoginBody (username, password) {
  return 'grant_type=password&username=' + username + '&password=' + password
}

function returnRefreshTokenBody () {
  let refreshToken = localStorage.getItem('refresh_token')
  return 'grant_type=refresh_token&refresh_token=' + refreshToken
}

function returnUserProducts (nameFilter) {
  let query = returnFilterQuery(nameFilter)
  let url = cons.USER_PRODUCTS_URL + query

  return axios.get(url)
}

function returnFilterQuery (nameFilter) {
  let query = ''
  if (nameFilter) {
    query = '?nameFilter=' + nameFilter
  }
  return query
}

function setProducts (data) {
  localStorage.setItem('user_products', JSON.stringify(data))
  store.commit('changeUserProducts', data)
}

export default {
  validateEmail,
  returnLoginBody,
  setTokens,
  // refreshToken,
  // returnAuthorizationHeader,
  returnFilterQuery,
  setProducts,
  returnRefreshTokenBody,
  returnUserProducts
}
