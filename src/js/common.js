import constants from 'constants'

function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function setTokens (data) {
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)
}

function returnLoginBody (username, password) {
  return 'grant_type=password&username=' + username + '&password=' + password
}

function returnRefreshTokenBody () {
  let refreshToken = localStorage.getItem('refresh_token')
  return 'grant_type=refresh_token&refresh_token=' + refreshToken
}

function refreshToken () {
  let body = returnRefreshTokenBody()
  this.axios.get(constants.LOGIN_URL, body)
    .then(response => {
      if (response.status === constants.HTTP_STATUS_OK) {
        setTokens(response.data)
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export default {
  validateEmail,
  returnLoginBody,
  setTokens,
  refreshToken
}
