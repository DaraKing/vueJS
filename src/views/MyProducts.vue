<template>
    <div id="products-container">
        <el-tabs tab-position="left" style="height: 100%">
            <el-tab-pane v-bind:label="$t('my-products')">
                <UserProducts></UserProducts>
            </el-tab-pane>
            <el-tab-pane v-bind:label="$t('add-product')">
                <AddProduct></AddProduct>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import UserProducts from '../components/Product/UserProducts'
import AddProduct from '../components/Product/AddProduct'
export default {
  name: 'MyProducts',
  components: { AddProduct, UserProducts },
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/Products/products";
@import "../scss/Products/user-products";
</style>
