<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'edital-leilao',
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Publicado em edital de notificação e/ou leilão público base',
            linhas: [
              {
                subheader: 'Publicado em edital de notificação e/ou leilão público base',
                bloco: [
                  { titulo: [ 'Leiloeiro', 'Condição do veículo' ],   conteudo: [ 3, 4 ] },
                  { titulo: [ 'Data', 'Lote' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Comitente' ], conteudo: [ 'noix' ] },
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
