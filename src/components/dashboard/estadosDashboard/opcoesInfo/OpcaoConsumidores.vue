<template>
  <div class="" id="consumidores">
    <p class="numero-estado text-right mb-0" id="numeroConsumidores">{{formatNumber(infoConsumidor[0].consumidores)}}</p>
    <p class="fs-title text-right mb-3">Quantidade de consumidores no estado</p>
    <p class="numero-estado text-right mb-0" id="numeroAposentados">{{formatPercent(infoConsumidor[0].aposentados)}}%</p>
    <p class="fs-title text-right">Porcentagem de aposentados</p>
    <cards-estados class="p-0 pt-3" :cards="cardsConsumidor"></cards-estados>
  </div>
</template>

<script>
  import CardsEstados from '../CardsEstados.vue'
  export default {
    name: 'opcao-consumidores',
    components: { CardsEstados },
    data(){
      return{
        infoConsumidor: [
          { consumidores: 4000500, aposentados: 1.9 }
        ],
        cardsConsumidor: [
          { nome: 'Programadores', icone: 'fas fa-user', total: 100, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #f39c12;', consumo: 10 },
          { nome: 'Designers', icone: 'fas fa-user', total: 150, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #00a65a;', consumo: 15 },
          { nome: 'Vendedores', icone: 'fas fa-user', total: 250, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #dd4b39;', consumo: 25 },
          { nome: 'Comerciantes', icone: 'fas fa-user', total: 500, classe: 'col-sm-6 col-md-4 col-lg-6',
           corCard: 'background-color: #00c0ef;', consumo: 50 }
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
