<template>
    <div id="locale-changer">
        <el-select v-model="$i18n.locale" size="mini">
            <el-option
                    v-for="(lang, i) in langs"
                    :key="`Lang${i}`"
                    :value="lang">
                {{ lang }}
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data () {
    return { langs: ['hr', 'en'] }
  }
}
</script>

<style lang="scss" scoped>
#locale-changer {
    width: 100px;
    float: right;
    display: flex;
    align-items: center;
}

#locale-changer > div {
    background: transparent;
    color: #fff;
}
</style>
