<template>
    <div>
        My products
        <UserProducts></UserProducts>
    </div>
</template>

<script>
import UserProducts from '../components/Product/UserProducts'
export default {
  name: 'MyProducts',
  components: { UserProducts }
}
</script>

<style scoped>

</style>
