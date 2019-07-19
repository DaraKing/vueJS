<template>
    <div>
        <div class="upload-text">
            {{ $t('add-more-images') }}
        </div>
        <div class="file-upload">
            <el-upload
                    class="avatar-uploader"
                    v-bind:action="'http://dev.ito.ba/ekomarketapi/api/auctions/' + auctionId + '/gallery'"
                    :show-file-list="false"
                    :headers="headerInfo"
                    :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddAuctionImage',
  props: ['auctionId'],
  data () {
    return {
      imageUrl: '',
      file: '',
      requestUrl: '',
      headerInfo: {
        'Content-Type': 'multipart/form-data'
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./src/scss/Auctions/_main.scss";
</style>
