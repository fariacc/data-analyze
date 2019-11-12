<template>
  <div class="row sem-pesquisa">
    <div class="mx-auto">
      <h1 class="text-center font-weight-light">
        Você ainda <strong class="font-weight-bold">não</strong> realizou<br> <strong class="font-weight-bold">nenhuma</strong> pesquisa
        <i aria-hidden="true" class="fa fa-search"></i>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sem-pesquisa-component'
  }
</script>

<style lang="scss">
  .sem-pesquisa{
    align-items: center !important;
    height: 80vh;
  }
</style>
