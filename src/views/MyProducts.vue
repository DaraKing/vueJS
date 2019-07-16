<template>
    <div id="products-container">
        <UserProducts></UserProducts>
    </div>
</template>

<script>
import UserProducts from '../components/Product/UserProducts'
export default {
  name: 'MyProducts',
  components: { UserProducts },
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
