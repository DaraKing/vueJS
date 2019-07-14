<template>
    <div>
        <div v-show="loading">
            <Loading></Loading>
        </div>
        <div v-show="!loading">
            <el-row>
                <el-col :span="4"><Timeline v-bind:data="auction"></Timeline></el-col>
                <el-col :span="20"><Primary v-bind:data="auction"></Primary></el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
import Loading from '../Common/Loading'
import constants from '../../js/constants'
import Timeline from './Info/Timeline'
import Primary from './Info/Primary'
export default {
  name: 'Auction',
  components: { Primary, Timeline, Loading },
  props: ['auctionId'],
  data () {
    return {
      loading: false,
      // auction: null
      auction: {
        'AuctionId': 1,
        'AuctionGallery': [
          'https://picsum.photos/id/1002/4312/2868',
          'https://picsum.photos/id/1011/5472/3648',
          'https://picsum.photos/id/1018/3914/2935'
        ],
        'ProductName': 'Jabuka',
        'ProductSort': 'Idared',
        'CurrentPrice': 23.00,
        'StartPrice': 10.40,
        'NumberOfOffers': 7,
        'OffersPerHour': 2,
        'StartDate': '2019-07-14T12:16:45.854Z',
        'EndDate': '2019-07-14T12:16:45.854Z',
        'Amount': 9,
        'WinnerId': 'Johnny Walker',
        'UserId': '2'
      }
    }
  },
  created () {
    // this.fetchSingleAuction()
  },
  methods: {
    fetchSingleAuction () {
      let route = constants.SINGLE_AUCTION + this.auctionId
      this.axios.get(route)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
