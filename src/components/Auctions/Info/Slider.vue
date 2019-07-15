<template>
<div id="auction-slider">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(image,index) in data" :key="index">
            <el-image
                    style="width: 100%; height: 100%"
                    :src="image"
                    fit="cover"></el-image>
            <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['data']
}
</script>

<style scoped>

</style>
