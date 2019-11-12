<template>
  <div class="" id="empresas">
    <p class="numero-estado text-right mb-0">R$ {{formatNumber(infoEmpresas[0].pibEstado)}}</p>
    <p class="fs-title text-right mb-3">PIB do estado</p>
    <p class="numero-estado text-right mb-0">{{formatPercent(infoEmpresas[0].pibNacional)}}%</p>
    <p class="fs-title text-right">Participação no PIB nacional</p>
    <cards-estados class="p-0 pt-3" :cards="cardsEmpresas"></cards-estados>
  </div>
</template>

<script>
  import CardsEstados from '../CardsEstados.vue'
  export default {
    name: 'opcao-empresas',
    components: { CardsEstados },
    data(){
      return{
        infoEmpresas: [
          { pibEstado: 121212, pibNacional: 25.6 }
        ],
        cardsEmpresas: [
          { nome: 'Agricultura', icone: 'fas fa-building', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #f39c12;', consumo: 20 },
          { nome: 'Advocacia', icone: 'fas fa-building', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #00a65a;', consumo: 20 },
          { nome: 'Bancos', icone: 'fas fa-building', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
          corCard: 'background-color: #dd4b39;', consumo: 50 },
          { nome: 'Escolas', icone: 'fas fa-building', total: 1000, classe: 'col-sm-6 col-md-4 col-lg-6',
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
