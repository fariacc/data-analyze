<template>
  <div class="opcao-consumidores" id="consumidores">
    <p class="numero-estado text-right mb-0" id="numeroConsumidores">{{formatNumber(infoConsumidor[0].consumidores)}}</p>
    <p class="fs-title text-right mb-3">Quantidade de consumidores no estado</p>
    <p class="numero-estado text-right mb-0" id="numeroAposentados">{{formatPercent(infoConsumidor[0].aposentados)}}%</p>
    <p class="fs-title text-right">Porcentagem de aposentados</p>
    <div class="card-estados">
      <card-dashboard class="row p-0 pt-3" :cards="cardsConsumidor"></card-dashboard>
    </div>
  </div>
</template>

<script>
  import CardDashboard from '../../../shared/utils/CardDashboard.vue'
  export default {
    name: 'opcao-consumidores',
    components: { CardDashboard },
    data(){
      return{
        infoConsumidor: [
          { consumidores: 4000500, aposentados: 1.9 }
        ],
        cardsConsumidor: [
          { nome: 'Programadores', icone: 'fas fa-user', total: 100, classe: 'col-sm-6 col-md-6 col-lg-6',
          corCard: 'background-color: #f39c12;', consumo: 10 },
          { nome: 'Designers', icone: 'fas fa-user', total: 150, classe: 'col-sm-6 col-md-6 col-lg-6',
          corCard: 'background-color: #00a65a;', consumo: 15 },
          { nome: 'Vendedores', icone: 'fas fa-user', total: 250, classe: 'col-sm-6 col-md-6 col-lg-6',
          corCard: 'background-color: #dd4b39;', consumo: 25 },
          { nome: 'Comerciantes', icone: 'fas fa-user', total: 500, classe: 'col-sm-6 col-md-6 col-lg-6',
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
  .card-estados{
    .info-box{
      cursor: default;
      min-height: 90px;
      .info-box-icon{
        line-height: 102px;
      }
      .info-box-content{
        padding: 14px 10px 0px 100px;
        background-color: red;
        .v-progress-linear {
          margin: 0;
        }
      }
    }
  }
</style>
