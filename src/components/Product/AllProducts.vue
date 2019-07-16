<template>
<div class="all-products">
    <el-row>
        <el-col :span="6">{{ $t('product-picture') }}</el-col>
        <el-col :span="4">{{ $t('product-name') }} </el-col>
        <el-col :span="4">{{ $t('product-sort') }} </el-col>
        <el-col :span="8">{{ $t('product-description') }}</el-col>
        <el-col :span="2">{{ $t('give-me-product') }}</el-col>
    </el-row>
    <el-row v-for="product in paginatedData()" v-bind:key="product.Id">
            <el-col :span="6">
                <div class="product-information">
                    {{ product.Image }}
                </div>
            </el-col>
            <el-col :span="4">
                <div class="product-information">
                    {{ product.Name }}
                </div>
            </el-col>
            <el-col :span="4">
                <div class="product-information">
                    {{ product.Sort }}
                </div>
            </el-col>
            <el-col :span="8">
                <div class="product-information">
                    {{ product.Description }}
                </div>
            </el-col>
            <el-col :span="2">
                <div class="product-information">
                    <el-button @click="addProduct(product.Id)" type="primary">{{ $t('yes') }}</el-button>
                </div>
            </el-col>
    </el-row>
    <div class="buttons">
        <button :disabled="pageNumber==0" @click="prevPage">
            {{ $t('next') }}
        </button>
        <button :disabled="pageNumber >= pageCount() -1" @click="nextPage">
            {{ $t('previous') }}
        </button>
    </div>
</div>
</template>

<script>
import constants from '../../js/constants'
import common from '../../js/common'
export default {
  name: 'Products',
  data () {
    return {
      loading: false,
      pageNumber: 0,
      pageSize: 10,
      products: []
    }
  },
  mounted () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.axios.get(constants.PRODUCTS_URL)
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    },
    pageCount () {
      let l = this.products.length
      let s = this.pageSize
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.pageSize
      const end = start + this.pageSize
      return this.products.slice(start, end)
    },
    addProduct (productId) {
      let apiUrl = constants.ADD_PRODUCT_URL + productId
      let authHeader = common.returnAuthorizationHeader()
      if (authHeader == null) {
        this.$message('You are not logged in !')
        return
      }
      this.axios.post(apiUrl, null, authHeader)
        .then(response => {
          console.log(response.status)
        })
        .catch(error => {
          if (error.response.status === constants.HTTP_UNAUTHORIZED) {
            let refreshErr = common.refreshToken()
            if (refreshErr != null) {
              this.$router.push('auth')
            } else {
              this.addProduct()
            }
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/Products/all-products";

</style>
