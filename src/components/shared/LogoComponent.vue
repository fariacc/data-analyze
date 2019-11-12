<template>
  <router-link class="navbar-brand" :to="rota">
    <img class="brand d-none d-md-flex d-lg-flex d-xl-flex" src="../../../src/assets/data-analyzer-logo.png" alt="Company logo">
    <img class="logo d-sm-flex d-md-none d-lg-none d-xl-none" src="../../../src/assets/data-analyzer-logo.png" alt="Company logo">
  </router-link>
</template>

<script>
  export default {
    name: 'logo-component',
    props: {
      rota: String
    }
  }
</script>

<style lang="scss">
  a.navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  img {
    &.brand{
      width: 25vw;
      padding: 0.6em;
    }
    &.logo{
      width: 12vw;
      padding: 0.4em;
    }
  }
</style>
