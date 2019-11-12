<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'informacoes-importantes',
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Informações importantes',
            linhas: [
              {
                subheader: 'Remarcação de chassi',
                bloco: [
                  { titulo: [ 'Remarcação de chassi' ], conteudo: [ 'AAA-1234' ] }
                ]
              },
              {
                subheader: 'Histórico de roubo/furto',
                bloco: [
                  { titulo: [ 'Histórico de roubo/furto' ], conteudo: [ 3 ] }
                ]
              },
              {
                subheader: 'Histórico de circulação em outros estados',
                bloco: [
                  { titulo: [ 'Histórico de circulação em outros estados' ], conteudo: [ 3 ] }
                ]
              },
              {
                subheader: 'Débitos - cortesia (não tarifado)',
                bloco: [
                  { titulo: [ 'IPVA', 'Débitos DETRAN' ],   conteudo: [ 3, 4 ] },
                  { titulo: [ 'Multas', 'Débitos municipais' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'DPVAT', 'Débitos RENAINF' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Licenciamento', 'Débitos PRF' ], conteudo: [ 1, 2 ] }
                ]
              },
              {
                subheader: 'Proprietário atual',
                bloco: [
                  { titulo: [ 'Nome', 'Documento' ], conteudo: [ 3, 3 ] }
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
