<template>
<div>
    <div v-show="loading">
        <Loading></Loading>
    </div>
    <div v-show="!loading">
        <el-row>
            <el-col :span="8" v-for="(product, index) in products" :key="index" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img v-bind:src="product.Picture" class="image">
                    <div style="padding: 14px;">
                        <span>{{ product.Name }}</span>
                        <el-divider></el-divider>
                        <div class="bottom clearfix">
                            <time class="product-description">{{ product.Description }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import constants from '../../js/constants'
import Loading from '../Common/Loading'
export default {
  name: 'UserProducts',
  components: { Loading },
  data () {
    return {
      loading: true,
      products: [
        {
          ProductId: 1,
          UserProductId: 2,
          Name: 'first product',
          Sort: 'asc',
          ProductType: 'test',
          Description: 'lorem ipsumarka sit dorot amet kijamet',
          Picture: 'https://picsum.photos/id/1020/4288/2848',
          IsAddedToUser: true
        },
        {
          ProductId: 1,
          UserProductId: 2,
          Name: 'second product',
          Sort: 'asc',
          ProductType: 'test',
          Description: 'drugi desc',
          Picture: 'https://picsum.photos/id/1024/1920/1280',
          IsAddedToUser: true
        }
      ]
    }
  },
  mounted () {
    this.fetchUserProducts()
  },
  methods: {
    fetchUserProducts () {
      // console.log(constants.USER_PRODUCTS_URL)
      this.loading = false
      // this.axios.get(constants.USER_PRODUCTS_URL)
      //   .then(response => {
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/Products/user-products";
</style>
