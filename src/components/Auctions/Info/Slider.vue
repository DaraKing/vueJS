<template>
<div id="auction-slider">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(image,index) in data" :key="index">
            <el-image
                    style="width: 100%; height: 100%"
                    :src="baseUrl + image"
                    fit="stretch"></el-image>
            {{baseUrl + image}}
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['data'],
  data () {
    return {
      baseUrl: 'http://dev.ito.ba/ekomarketapi/',
      imagePlaceholders: [
        'https://picsum.photos/id/10/2500/1667',
        'https://picsum.photos/id/1003/1181/1772',
        'https://picsum.photos/id/1023/3955/2094'
      ]
    }
  }
}
</script>

<style scoped>

</style>
