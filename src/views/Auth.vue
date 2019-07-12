<template>
    <div id="auth-container">
        <div>
            <el-tabs type="card" @tab-click="handleClick" stretch>
                <el-tab-pane label="Login">
                    <Login></Login>
                </el-tab-pane>
                <el-tab-pane label="Register">
                    <Register></Register>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

export default {
  name: 'Auth',
  components: {
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
</style>
