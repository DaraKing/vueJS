<template>
<div>
    <div class="search-header">
        <el-input class="search-input" placeholder="Please input" v-model="input"></el-input>
        <el-button icon="el-icon-search" @click="toggleSearch" circle></el-button>
    </div>
    <el-table
            :data="auctions"
            height="250"
            style="width: 100%"
            @row-click="rowClick">
        <el-table-column
                prop="AuctionName"
                label="Auction name"
                width="180">
        </el-table-column>
        <el-table-column
                prop="CurrentPrice"
                label="Current price"
                width="180">
        </el-table-column>
        <el-table-column
                :formatter="formDate"
                prop="StartDate"
                label="Start date">
        </el-table-column>
        <el-table-column
                :formatter="formDate"
                prop="EndDate"
                label="End date">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import constants from '../../js/constants'
import common from '../../js/common'

export default {
  name: 'ActiveAuctions',
  data () {
    return {
      loading: false,
      input: '',
      auctions: []
    }
  },
  created () {
    this.fetchActiveAuctions()
  },
  methods: {
    formDate (row) {
      if (row.StartDate !== '') {
        let date = new Date(row.StartDate)
        return date.toUTCString()
      } else {
        let date = new Date(row.EndDate)
        return date.toUTCString()
      }
    },
    fetchActiveAuctions (nameFilter) {
      let query = common.returnFilterQuery(nameFilter)
      let url = constants.AUCTION_URL + query
      this.axios.get(url)
        .then(response => {
          this.auctions = response.data.Result
        })
        .catch(error => {
          console.log(error)
        })
    },
    rowClick (row) {
      this.$router.push({ name: 'singleAuction', params: { auctionId: row.Id } })
    },
    toggleSearch () {
      this.fetchActiveAuctions(this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/common";
</style>
