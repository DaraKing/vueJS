<template>
<div>
    <div v-show="!loading">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item v-bind:label="$t('product')">
                <el-select v-model="form.productId"  :placeholder="$t('select-product')">
                    <el-option v-for='product in userProducts' v-bind:key="product.ProductId" :label="product.Name" :value="product.ProductId"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-bind:label="$t('start-price')">
                <el-input-number v-model="form.startPrice" :precision="2" :step="0.1" :max="10000"></el-input-number>
            </el-form-item>
            <el-form-item v-bind:label="$t('amount')">
                <el-input-number v-model="form.amount" :min="1" :max="2000"></el-input-number>
            </el-form-item>
            <el-form-item v-bind:label="$t('auction-length')">
                <el-input-number v-model="form.auctionLength" controls-position="right" :min="1" :max="24"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{ $t('create-new-auction') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div v-show="loading">
        <Loading></Loading>
    </div>
</div>
</template>

<script>
import Loading from '../Common/Loading'
import constants from '../../js/constants'
import common from '../../js/common'

export default {
  name: 'AddAuction',
  components: { Loading },
  data () {
    return {
      loading: false,
      userProducts: [],
      form: {
        productId: '',
        startPrice: '',
        amount: '',
        auctionLength: ''
      }
    }
  },
  created () {
    this.checkUserProducts()
  },
  methods: {
    checkUserProducts () {
      if (this.$store.state.userProducts) {
        this.userProducts = this.$store.state.userProducts
      }
    },
    postAuction (payload) {
      let authHeader = common.returnAuthorizationHeader()
      this.loading = true
      this.axios.post(constants.AUCTION_URL, payload, authHeader)
        .then(response => {
          console.log(response)
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.loading = false
        })
    },
    onSubmit () {
      let addAuctionPayload = {
        'UserProductId': parseInt(this.form.productId),
        'StartPrice': parseInt(this.form.startPrice),
        'Amount': parseInt(this.form.amount),
        'AuctionLengthInHours': parseInt(this.form.auctionLength)
      }
      console.log(addAuctionPayload)
      this.postAuction(addAuctionPayload)
    }
  }
}
</script>

<style scoped>

</style>
