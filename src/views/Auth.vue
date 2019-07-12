<template>
    <div id="auth-container">
        <div id="locale-changer">
            <LocaleChanger></LocaleChanger>
        </div>
        <div>
            <el-tabs type="card" @tab-click="handleClick" stretch>
                <el-tab-pane v-bind:label="$t('login')">
                    <Login></Login>
                </el-tab-pane>
                <el-tab-pane v-bind:label="$t('register')">
                    <Register></Register>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import LocaleChanger from '../components/Partials/LocaleChanger'

export default {
  name: 'Auth',
  components: {
    LocaleChanger,
    Login,
    Register
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/common";
#auth-container {
    height: 100%;
    @extend %flex-center;
}
#locale-changer {
    position: absolute;
    right: 0;
    top: 0;
}
</style>
