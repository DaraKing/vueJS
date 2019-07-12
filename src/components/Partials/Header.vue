<template>
    <div id="header">
        <el-menu
                :router="true"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#f5f5f5"
                default-active="1"
                active-text-color="#b2ebf2">
            <el-menu-item index="1" :route="{name: 'home'}">
                {{ $t('products') }}
            </el-menu-item>
            <el-menu-item index="2" :route="{name: 'myProducts'}">
                {{ $t('my-products') }}
            </el-menu-item>
            <el-menu-item index="3" :route="{name: 'auctions'}">
                {{ $t('auctions') }}
            </el-menu-item>
            <LocaleChanger></LocaleChanger>
        </el-menu>
    </div>
</template>

<script>
import LocaleChanger from './LocaleChanger'
export default {
  name: 'Header',
  components: { LocaleChanger },
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style scoped>

</style>
