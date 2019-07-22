<template>
    <div>
        <div v-show="!loading">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item v-bind:label="$t('email-address')">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item v-bind:label="$t('password')">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{ $t('login') }}</el-button>
                    <el-button>{{ $t('cancel') }}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-show="loading">
            <Loading></Loading>
        </div>
    </div>
</template>

<script>

import common from '../../js/common'
import constants from '../../js/constants'
import Loading from '../Common/Loading'

export default {
  name: 'Login',
  components: {
    Loading
  },
  data () {
    return {
      loading: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    callLoginAPi () {
      let body = common.returnLoginBody(this.form.email, this.form.password)
      this.axios.post(constants.LOGIN_URL, body)
        .then(response => {
          if (response.status === constants.HTTP_STATUS_OK) {
            this.loading = false
            common.setTokens(response.data)
            this.$router.push('/')
          }
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },
    onSubmit () {
      if (this.form.email === '') {
        this.$message(constants.EMPTY_EMAIL_INPUT)
        return
      }
      if (!common.validateEmail(this.form.email)) {
        this.$message(constants.INVALID_EMAIL)
        return
      }
      this.callLoginAPi()
    }
  }
}
</script>

<style scoped>

</style>
