<template>
  <div class="col-md-4 col-lg-4 banner">
    <div class="filter"></div>
    <div class="conta">
      <router-link to="/">
        <img class="mx-auto d-block" src="../../../src/assets/data-analyzer-logo.png" alt="Company logo">
      </router-link>
      <h1 class="text-center text-light mt-5">
        Análise de dados pronta para a sua empresa
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner-component'
  }
</script>

<style lang="scss">
  .banner{
    background-image: url('../../../src/assets/img-banner-background.jpg');
    min-height: 100vh;
    max-height: 100%;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: right ;
    background-size: cover;
    position: relative;
    .conta{
      width: 80%;
      height: 50%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      h1 {
        font-size: 1.5rem;
        font-weight: lighter;
      }
    }
    .filter {
      position: absolute;
      background-color: rgba(2,19,49,0.47);
      border: 0;
      box-shadow: none;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
    img{
      width: 100%;
    }
  }
</style>
