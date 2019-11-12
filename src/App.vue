<template>
  <div id="app">
    <transition name="page">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .page-enter, .page-leave-active{
    opacity: 0;
  }
  .page-enter-active, .page-leave-active{
    transition: opacity .5s;
  }
  // *{
  //   font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  // }
</style>
