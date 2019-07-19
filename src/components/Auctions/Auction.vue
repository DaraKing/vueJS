<template>
    <div>
        <div v-show="loading">
            <Loading></Loading>
        </div>
        <div v-show="!loading">
            <el-page-header @back="goBack" v-bind:content="auction ? auction.ProductName : ''"></el-page-header>
            <el-row>
                <el-col :span="4"><Timeline v-bind:activities="activities"></Timeline></el-col>
                <el-col :span="20">
                    <el-row>
                        <el-col :span="24">
                            <Primary v-bind:data="auction"></Primary>
                        </el-col>
                        <el-col :span="24">
                            <Slider v-bind:data="auction ? auction.AuctionGallery : ''"></Slider>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
import Loading from '../Common/Loading'
import constants from '../../js/constants'
import Timeline from './Info/Timeline'
import Primary from './Info/Primary'
import Slider from './Info/Slider'
export default {
  name: 'Auction',
  components: { Slider, Primary, Timeline, Loading },
  props: ['auctionId'],
  data () {
    return {
      loading: false,
      auction: {},
      activities: []
    }
  },
  created () {
    this.fetchSingleAuction()
  },
  methods: {
    fetchSingleAuction () {
      let route = constants.SINGLE_AUCTION + this.auctionId
      this.axios.get(route)
        .then(response => {
          this.auction = response.data
          this.makeArray()
        })
        .catch(error => {
          console.log(error)
        })
    },
    goBack () {
      console.log('go back')
    },
    makeArray () {
      this.activities.push({
        'content': 'Start date',
        'timestamp': this.auction.StartDate
      },
      {
        'content': 'End date',
        'timestamp': this.auction.EndDate
      })
    }
  }
}
</script>

<style scoped>
    @import "/src/scss/Auctions/_main.scss";
</style>
