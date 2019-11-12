<template>
  <div>
    <div class="row mx-0">
      <logo-relatorio-component></logo-relatorio-component>
      <a href="javascript:window.print()" class="btn btn-default btn-print d-print-none">Imprimir</a>
    </div>
    <p class="texto-alerta mb-1">
      <slot name="content"></slot>
    </p>
    <table-component :tables="tables" :table="tables"></table-component>
  </div>
</template>

<script>
  import LogoRelatorioComponent from './LogoRelatorioComponent.vue'
  import TableComponent from '../shared/tables/TableComponent.vue'
  export default {
    name: 'header-relatorio-component',
    props: { dadosUsuario: Object },
    components: {
      LogoRelatorioComponent, TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Informação do usuário',
            linhas: [
              {
                bloco: [
                  { titulo: [ 'CNPJ', 'Razão social' ], conteudo: [ ] },
                  { titulo: [ 'Data', 'Hora' ], conteudo: [ ] }
                ]
              }
            ]
          }
        ]
      }
    },
    created(){
      // console.log(this.dadosUsuario);
    }
  }
</script>

<style lang="scss">
</style>
