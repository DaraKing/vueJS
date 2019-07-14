const HOME_NAME = 'home'

/*
      ERRORS
 */
const EMPTY_EMAIL_INPUT = 'Email input is empty'
const INVALID_EMAIL = 'Invalid email address'
const PASSWORD_DONT_MATCH = "Password doesn't match"
const PASSWORD_WEAK = 'Password is weak'
const EMPTY_FIRST_NAME = 'First name input is empty'
const EMPTY_LAST_NAME = 'Last name input is empty'
const EMPTY_PASSWORD = 'Password input is empty'

/*
      STATUS CODES
 */

const HTTP_STATUS_OK = 200
const HTTP_UNAUTHORIZED = 401

/*
        API URLS
 */
const REGISTER_URL = 'http://dev.ito.ba/ekomarketapi/api/account/register'
const LOGIN_URL = 'http://dev.ito.ba/ekomarketapi/token'
const PRODUCTS_URL = 'http://dev.ito.ba/ekomarketapi/api/products'
const USER_PRODUCTS_URL = 'http://dev.ito.ba/ekomarketapi/api/user/products'
const ADD_PRODUCT_URL = 'http://dev.ito.ba/ekomarketapi/api/user/products/add'
const ADD_AUCTION = 'http://dev.ito.ba/ekomarketapi/api/auctions'

export default {
  HOME_NAME,
  INVALID_EMAIL,
  PASSWORD_DONT_MATCH,
  PASSWORD_WEAK,
  EMPTY_EMAIL_INPUT,
  EMPTY_FIRST_NAME,
  EMPTY_LAST_NAME,
  EMPTY_PASSWORD,
  HTTP_STATUS_OK,
  REGISTER_URL,
  LOGIN_URL,
  PRODUCTS_URL,
  USER_PRODUCTS_URL,
  ADD_PRODUCT_URL,
  ADD_AUCTION
}
