<template>
  <div class="">
    <img class="brand-logo py-3" src="../../../src/assets/data-analyzer-logo.png" alt="Company logo">
  </div>
</template>

<script>
  export default {
    name: 'logo-relatorio-component',
    props: {
      rota: String
    }
  }
</script>

<style lang="scss" scoped>
  a.navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .brand-logo{
    width: 25vw;
  }
</style>
