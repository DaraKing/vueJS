<template>
    <div id="add-product">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item v-bind:label="$t('product-name')">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item v-bind:label="$t('product-type')">
                <el-input v-model="form.type"></el-input>
            </el-form-item>
            <el-form-item v-bind:label="$t('product-description')">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item v-bind:label="$t('product-picture')">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{ $t('create') }}</el-button>
                <el-button>{{ $t('cancel') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      form: {
        name: '',
        desc: '',
        type: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "src/scss/upload-input";
    @import "src/scss/Products/add-product";
</style>
