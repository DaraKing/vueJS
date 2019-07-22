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
      let removeUrl = constants.REMOVE_PRODUCT_URL + productId
      this.axios.delete(removeUrl)
        .then(response => {
          this.products.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchUserProducts (nameFilter) {
      this.loading = false
      let initialFetch = nameFilter === undefined || nameFilter === null
      let userProductsRequest = common.returnUserProducts(nameFilter)

      userProductsRequest.then(response => {
        this.products = response.data
        if (initialFetch) {
          common.setProducts(response.data)
        }
      })
        .catch(error => {
          console.log(error)
        })
      this.products = JSON.parse(localStorage.getItem('user_products'))
    },
    toggleSearch () {
      this.fetchUserProducts(this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/common";
@import "src/scss/Products/user-products";
</style>
