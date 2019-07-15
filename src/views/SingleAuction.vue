<template>
    <Auction v-bind:auction-id="$route.params.auctionId"></Auction>
</template>

<script>
import Auction from '../components/Auctions/Auction'
export default {
  name: 'SingleAuction',
  components: { Auction }
}
</script>

<style scoped>

</style>
