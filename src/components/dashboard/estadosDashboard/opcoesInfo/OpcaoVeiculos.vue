<template>
  <div class="" id="veiculos">
    <p class="numero-estado text-right mb-0">{{formatNumber(infoVeiculos[0].veiculosEstado)}}</p>
    <p class="fs-title text-right mb-3">Veículos no estado</p>
    <p class="numero-estado text-right mb-0">{{formatPercent(infoVeiculos[0].veiculosPessoa)}}%</p>
    <p class="fs-title text-right">Porcentagem de pessoas com veículos</p>
    <div class="card-estados">
      <card-dashboard class="row p-0 pt-3" :cards="cardsVeiculos"></card-dashboard>
    </div>
  </div>
</template>

<script>
  import CardDashboard from '../../../shared/utils/CardDashboard.vue'
  export default {
    name: 'opcao-veiculos',
    components: { CardDashboard },
    data(){
      return{
        infoVeiculos: [
          { veiculosEstado: 12171254, veiculosPessoa: 3.8 }
        ],
        cardsVeiculos: [
          { nome: 'Renault', icone: 'fas fa-car', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #f39c12;', consumo: 20 },
          { nome: 'Ford', icone: 'fas fa-car', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #00a65a;', consumo: 20 },
          { nome: 'Honda', icone: 'fas fa-car', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #dd4b39;', consumo: 50 },
          { nome: 'Hyundai', icone: 'fas fa-car', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
           corCard: 'background-color: #00c0ef;', consumo: 80 }
        ]
      }
    },
    methods: {
      formatNumber(value){
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      formatPercent(value){
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    }
  }
</script>

<style lang="scss">
</style>
