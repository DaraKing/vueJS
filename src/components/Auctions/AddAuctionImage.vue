<template>
    <div>
        <div class="upload-text">
            {{ $t('add-more-images') }}
        </div>
        <div class="container">
            <div class="large-12 medium-12 small-12 cell">
                <label>File
                    <input type="file" id="files" ref="files" v-on:change="handleFilesUpload"/>
                </label>
                <button v-on:click="submitFiles">Submit</button>
            </div>
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
      files: '',
      headerInfo: {
        'Content-Type': 'multipart/form-data'
      }
    }
  },
  methods: {
    submitFiles () {
      let file = this.files[0]

      let formData = new FormData()
      formData.append('file', file)

      console.log(file)

      let url = 'http://dev.ito.ba/ekomarketapi/api/auctions/' + this.auctionId + '/gallery'
      this.axios.post(url, formData,
        {
          headers: {
            'Content-Type': file.type
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function () {
          console.log('FAILURE!!')
        })
    },

    handleFilesUpload () {
      this.files = this.$refs.files.files
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "./src/scss/Auctions/_main.scss";
</style>
