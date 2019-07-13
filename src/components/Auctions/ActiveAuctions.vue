<template>
<div>
    <el-table
            :data="auctions"
            height="250"
            style="width: 100%">
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
                prop="StartDate"
                label="Start date">
        </el-table-column>
        <el-table-column
                prop="EndDate"
                label="End date">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: 'ActiveAuctions',
  data () {
    return {
      loading: false,
      auctions: [
        {
          Id: 1,
          AuctionName: 'neka aukcija',
          Amount: 12,
          WeightType: 3,
          CurrentPrice: 20,
          ImageUrl: 'https://picsum.photos/id/100/2500/1656',
          StartDate: '2019-07-13T16:58:29.994Z',
          EndDate: '2019-07-13T16:58:29.994Z',
          UserId: '1',
          WinnerId: 'Johan Sebastian Bach',
          OwnerFullName: 'Cotton Joe',
          AuctionLocation: 'Milvoki'
        },
        {
          Id: 2,
          AuctionName: 'neka druga aukcija',
          Amount: 15,
          WeightType: 3,
          CurrentPrice: 50,
          ImageUrl: 'https://picsum.photos/id/1000/5626/3635',
          StartDate: '2019-07-15T16:58:29.994Z',
          EndDate: '2019-07-15T16:58:29.994Z',
          UserId: '2',
          WinnerId: 'Darko Milichich',
          OwnerFullName: 'Cotton Joe',
          AuctionLocation: 'Milvoki'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
