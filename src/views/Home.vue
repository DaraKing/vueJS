<template>
  <div class="header">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '../components/Partials/Header'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
