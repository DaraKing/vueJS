<template>
    <div>
        <div id="auctions-header">
            <span class="auction-title">
                {{ $t('active-auctions') }}
            </span>
            <el-tooltip class="item" effect="dark" v-bind:content="$t('create-auction')" placement="top">
                <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true" circle></el-button>
            </el-tooltip>

            <el-dialog
                    v-bind:title="$t('create-new-auction')"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <AddAuction></AddAuction>
            </el-dialog>
        </div>
        <el-divider></el-divider>
        <ActiveAuctions></ActiveAuctions>
    </div>
</template>

<script>
import ActiveAuctions from '../components/Auctions/ActiveAuctions'
import AddAuction from '../components/Auctions/AddAuction'
export default {
  name: 'Auctions',
  components: { AddAuction, ActiveAuctions },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm(this.$t('dialog-closing'))
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="scss">
@import "../scss/Auctions/main";
</style>
