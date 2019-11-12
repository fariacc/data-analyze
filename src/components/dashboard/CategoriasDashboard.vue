<template>
  <div class="opcoes-dashboard">
    <card-dashboard class="row mx-0 bg-cinza" @selecionaOpcao="mudarOpcao" :cards="cards"></card-dashboard>
  </div>
</template>

<script>
  import CardDashboard from '../shared/utils/CardDashboard.vue'
  export default {
    name: 'opcoes-dashboard',
    components: { CardDashboard },
    data(){
      return{
        cards: [
          { nome: 'Consumidores', icone: 'fas fa-users', cor: 'background-color: #00c0ef',
          total: 1000, classe: 'col-sm-6 col-md-4 col-lg-3 ml-auto' },
          { nome: 'Empresas', icone: 'fas fa-building', cor: 'background-color: #00a65a',
          total: 1000, classe: 'col-sm-6 col-md-4 col-lg-3 text-center' },
          { nome: 'Veículos', icone: 'fas fa-car', cor: 'background-color: #f39c12',
          total: 1000, classe: 'col-sm-6 col-md-4 col-lg-3 mr-auto' }
        ]
      }
    },
    methods: {
      mudarOpcao(dado){
        this.$emit('enviarOpcao', dado)
      }
    }
  }
</script>

<style lang="scss">
  .opcoes-dashboard{
    margin-top: 1.5vh;
  }
</style>
