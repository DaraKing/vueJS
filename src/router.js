import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import Products from './views/Products'
import MyProducts from './views/MyProducts'
import Auctions from './views/Auctions'
import Constants from './js/constants'
import SingleAuction from './views/SingleAuction'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: Products
      },
      {
        path: '/my-products',
        name: 'myProducts',
        component: MyProducts
      },
      {
        path: '/auctions',
        name: 'auctions',
        component: Auctions
      },
      {
        path: '/single-auction/:auctionId',
        name: 'singleAuction',
        component: SingleAuction
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router

// router.beforeEach((to, from, next) => {
//   if (to.name === Constants.HOME_NAME) {
//     if (!localStorage.getItem('jwt')) {
//       return next('auth')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// }) TODO: uncomment after resolve login and register
