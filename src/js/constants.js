const AUTH_ROUTE_NAME = 'auth'

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
const ADD_PRODUCT_URL = 'http://dev.ito.ba/ekomarketapi/api/user/products/add/'
const REMOVE_PRODUCT_URL = 'http://dev.ito.ba/ekomarketapi/api/user/products/remove/'
const AUCTION_URL = 'http://dev.ito.ba/ekomarketapi/api/auctions'
const SINGLE_AUCTION = 'http://dev.ito.ba/ekomarketapi/api/auctions/'
const USER_API = 'http://dev.ito.ba/ekomarketapi/api/user/profile'

export default {
  AUTH_ROUTE_NAME,
  INVALID_EMAIL,
  PASSWORD_DONT_MATCH,
  PASSWORD_WEAK,
  EMPTY_EMAIL_INPUT,
  EMPTY_FIRST_NAME,
  EMPTY_LAST_NAME,
  EMPTY_PASSWORD,
  HTTP_STATUS_OK,
  HTTP_UNAUTHORIZED,
  REGISTER_URL,
  LOGIN_URL,
  PRODUCTS_URL,
  USER_PRODUCTS_URL,
  ADD_PRODUCT_URL,
  AUCTION_URL,
  SINGLE_AUCTION,
  USER_API,
  REMOVE_PRODUCT_URL
}
