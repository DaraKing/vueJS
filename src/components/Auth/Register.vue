<template>
    <div>
        <div v-show="!loading">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="First name" prop="firstName">
                    <el-input v-model="ruleForm.firstName"></el-input>
                </el-form-item>
                <el-form-item label="Last name" prop="lastName">
                    <el-input v-model="ruleForm.lastName"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="Password"  prop="password">
                    <el-input v-model="ruleForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="Repeat your password"  prop="passwordRepeat">
                    <el-input v-model="ruleForm.passwordRepeat" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-show="loading">
            <Loading></Loading>
        </div>
    </div>
</template>

<script>

import constants from '../../js/constants'
import Loading from '../Common/Loading'

export default {
  name: 'Register',
  components: {
    Loading
  },
  data () {
    let validatePass = (rule, value, callback) => {
      if (this.ruleForm.passwordRepeat !== '') {
        this.$refs.ruleForm.validateField('checkPass')
      }
      callback()
    }
    let validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error(constants.PASSWORD_DONT_MATCH))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: ''
      },
      rules: {
        firstName: [
          { required: true, message: constants.EMPTY_FIRST_NAME, trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: constants.EMPTY_LAST_NAME, trigger: 'blur' }
        ],
        email: [
          { required: true, message: constants.EMPTY_EMAIL_INPUT, trigger: 'blur' },
          { type: 'email', message: constants.INVALID_EMAIL, trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: constants.EMPTY_PASSWORD, trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        passwordRepeat: [
          { required: true, message: constants.EMPTY_PASSWORD, trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    callRegisterApi () {
      this.loading = true
      let registrationPayload = {
        'FullName': this.ruleForm.firstName + this.ruleForm.lastName,
        'Email': this.ruleForm.email,
        'Password': this.ruleForm.password
      }
      this.axios.post(constants.REGISTER_URL, registrationPayload)
        .then(response => {
          if (response.status === constants.HTTP_STATUS_OK) {
            this.loading = false
            this.$router.go(0)
          }
          console.log(response)
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.callRegisterApi()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
