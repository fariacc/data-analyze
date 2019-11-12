<template>
  <div>
    <numero-contratacoes class="mb-3"></numero-contratacoes>
    <numero-demissoes></numero-demissoes>
  </div>
</template>

<script>
  import NumeroContratacoes from './NumeroContratacoes.vue'
  import NumeroDemissoes from './NumeroDemissoes.vue'
  export default {
    name: 'graficos-interativo-pj',
    components: {
      NumeroContratacoes, NumeroDemissoes
    }
  }
</script>

<style lang="scss">
</style>
