<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "scss/_common.scss";
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    @extend %full-height;
    background-color: $primaryBgColor;
  }

  #app {
    @extend %full-height;
    color: $primaryFontColor;
  }
</style>
