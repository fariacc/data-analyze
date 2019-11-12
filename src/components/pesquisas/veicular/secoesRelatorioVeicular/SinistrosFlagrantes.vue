<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'sinistros-flagrantes',
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Sinistros e flagrantes',
            linhas: [
              {
                subheader: 'Perda total (não contempla RNS)',
                bloco: [
                  { titulo: [ 'Perda total (não contempla RNS)' ], conteudo: [ 354615151 ] },
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
