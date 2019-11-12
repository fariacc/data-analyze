<template>
  <div class="dashboard" id="dashboard">
    <navbar-interna-component></navbar-interna-component>
    <categorias-dashboard @enviarOpcao="enviaOpcao"></categorias-dashboard>
    <content-dashboard :opcao="opcaoSelecionada"></content-dashboard>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import CategoriasDashboard from './CategoriasDashboard.vue'
  import ContentDashboard from './estadosDashboard/ContentDashboard.vue'
  export default {
    name: 'dashboard-component',
    components: {
      NavbarInternaComponent, CategoriasDashboard, ContentDashboard
    },
    data(){
      return{
        opcaoSelecionada: 'Consumidores'
      }
    },
    methods: {
      enviaOpcao(dado){
        this.opcaoSelecionada = dado
      }
    }
  }
</script>

<style lang="scss">
  .dashboard{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
  }
</style>
