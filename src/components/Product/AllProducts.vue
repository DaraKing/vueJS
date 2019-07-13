<template>
<div>
    <el-search-table-pagination
            type="local"
            :class="'all-products'"
            :data="products"
            :page-sizes="[10]"
            :columns="columns"
            :form-options="formOptions">
    </el-search-table-pagination>
</div>
</template>

<script>
import constants from '../../js/constants'
export default {
  name: 'Products',
  data () {
    return {
      loading: false,
      products: [],
      formOptions: {
        inline: true,
        submitBtnText: this.$t('search'),
        forms: [
          { prop: 'Name', label: this.$t('product-name') }
        ]
      },
      columns: [
        { prop: 'Name', label: 'Name', width: 180 },
        { prop: 'Sort', label: 'Sort', minWidth: 50 },
        { prop: 'Description', label: 'Description', minWidth: 180 }
      ]
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
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/Products/all-products";

</style>
