<template>
  <div class="info-estados ml-auto pr-3">
    <div class="py-0 col-sm-12 col-md-12 col-lg-12">
      <p class="nome-estado text-right mb-0" id="nomeEstado">Rio Grande do Sul</p>
      <hr class="mt-1 mb-2">
      <opcao-consumidores v-if="opcao == 'Consumidores'"></opcao-consumidores>
      <opcao-empresas v-else-if="opcao == 'Empresas'"></opcao-empresas>
      <opcao-veiculos v-else-if="opcao == 'Veículos'"></opcao-veiculos>
    </div>
  </div>
</template>

<script>
  import OpcaoConsumidores from './opcoesInfo/OpcaoConsumidores.vue';
  import OpcaoEmpresas from './opcoesInfo/OpcaoEmpresas.vue';
  import OpcaoVeiculos from './opcoesInfo/OpcaoVeiculos.vue';
  export default {
    name: 'informacoes-dashboard',
    props: { opcao: String },
    components: {
      OpcaoConsumidores, OpcaoEmpresas, OpcaoVeiculos
    }
  }
</script>

<style lang="scss">
  .info-estados{
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
  .nome-estado{
    font-size: 2.5rem;
    font-weight: bold;
    color: #213345;
    text-transform: uppercase;
  }
  .numero-estado{
    font-size: 2rem;
    font-weight: bold;
    color: #213345;
  }
</style>
