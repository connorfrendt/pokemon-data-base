<template>
  <div id="app">
      <Header />
      <RouterView></RouterView>
  </div>
</template>

<script>
import Header from './Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  background: rgba(255, 0, 0, 0.4);
}
</style>