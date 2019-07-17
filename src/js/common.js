import cons from './constants'
import axios from 'axios'
import store from '../store'

function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function setTokens (data) {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)
  let tokens = {
    'accessToken': data.access_token,
    'refreshToken': data.refresh_token
  }
  this.$store.commit('changeTokens', tokens)
}

// function setUserInformation (data) {
//   localStorage.setItem('user', JSON.stringify(data))
// }

function returnLoginBody (username, password) {
  return 'grant_type=password&username=' + username + '&password=' + password
}

function returnRefreshTokenBody () {
  let refreshToken = localStorage.getItem('refresh_token')
  return 'grant_type=refresh_token&refresh_token=' + refreshToken
}

function refreshToken () {
  let body = returnRefreshTokenBody()
  return axios.post(cons.LOGIN_URL, body)
    .then(response => {
      if (response.status === cons.HTTP_STATUS_OK) {
        setTokens(response.data)
      }
    })
    .catch(error => {
      console.log(error.response.data.error)
    })
}

function returnAuthorizationHeader () {
  let accessToken = localStorage.getItem('access_token')
  if (accessToken == null) {
    return null
  }
  return {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  }
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
  refreshToken,
  returnAuthorizationHeader,
  // setUserInformation
  returnFilterQuery,
  setProducts
}
