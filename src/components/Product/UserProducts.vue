<template>
<div>
    <div v-show="loading">
        <Loading></Loading>
    </div>
    <div v-show="!loading">
        <div class="search-header">
            <el-input class="search-input" placeholder="Please input" v-model="input"></el-input>
            <el-button icon="el-icon-search" @click="toggleSearch" circle></el-button>
        </div>
        <el-row>
            <el-col :span="6" v-for="(product, index) in products" :key="index" :offset="index%3 > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://picsum.photos/id/237/200/300" class="image">
                    <div style="padding: 14px;">
                        <span class="product-name">{{ product.Name }}</span>
                        <div class="bottom">
                            <span class="product-description">{{ product.Description }}</span>
                        </div>
                    </div>
                    <div class="button-area">
                        <el-button @click="deleteFromUser(product.ProductId, index)" type="primary" icon="el-icon-delete" circle></el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import constants from '../../js/constants'
import common from '../../js/common'
import Loading from '../Common/Loading'
export default {
  name: 'UserProducts',
  components: { Loading },
  data () {
    return {
      loading: true,
      input: '',
      products: []
    }
  },
  mounted () {
    this.fetchUserProducts()
  },
  methods: {
    deleteFromUser (productId, index) {
      let authHeader = common.returnAuthorizationHeader()
      if (authHeader == null) {
        this.$message('You are not logged in !')
        return
      }
      let removeUrl = constants.REMOVE_PRODUCT_URL + productId
      this.axios.delete(removeUrl, authHeader)
        .then(response => {
          this.products.splice(index, 1)
        })
        .catch(error => {
          if (error.response.status === constants.HTTP_UNAUTHORIZED) {
            let refreshErr = common.refreshToken()
            if (refreshErr != null) {
              // this.$router.push('auth')
              console.log(refreshErr)
            } else {
              this.deleteFromUser(productId)
            }
          }
        })
    },
    fetchUserProducts (nameFilter) {
      let query = ''
      if (nameFilter) {
        query = '?nameFilter=' + nameFilter
      }
      let authHeader = common.returnAuthorizationHeader()
      if (authHeader == null) {
        this.$message('You are not logged in !')
        return
      }
      this.loading = false
      let url = constants.USER_PRODUCTS_URL + query
      this.axios.get(url, authHeader)
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          if (error.response.status === constants.HTTP_UNAUTHORIZED) {
            let refreshErr = common.refreshToken()
            if (refreshErr != null) {
              // this.$router.push('auth')
              console.log(refreshErr)
            } else {
              this.fetchUserProducts()
            }
          }
        })
    },
    toggleSearch () {
      this.fetchUserProducts(this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/Products/user-products";
</style>
