<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'bloqueios-diversos',
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Bloqueios diversos',
            linhas: [
              {
                subheader: 'Bloqueios diversos',
                bloco: [
                  { titulo: [ 'Restrição judicial', 'Alerta de roubo/furto' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Restrição judicial na BIN', 'Situação do veículo' ], conteudo: [ 1, 2 ] }
                ]
              },
              {
                subheader: 'Restrições na base estadual',
                bloco: [
                  { titulo: [ 'Data de modificação', 'Baixado da circulação' ],   conteudo: [ 3, 4 ] },
                  { titulo: [ 'Bloqueio', 'Restrição 4' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Averbação' ],  conteudo: [ 1 ] }
                ]
              },
              {
                subheader: 'Gravames',
                bloco: [
                  { titulo: [ 'Gravames' ], conteudo: [ 3 ] }
                ]
              },
              {
                subheader: 'Alienação',
                bloco: [
                  { titulo: [ 'Alienação' ], conteudo: [ 3 ] }
                ]
              },
              {
                subheader: 'Comunicação de venda',
                bloco: [
                  { titulo: [ 'Comunicação de venda' ], conteudo: [ 3 ] }
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
