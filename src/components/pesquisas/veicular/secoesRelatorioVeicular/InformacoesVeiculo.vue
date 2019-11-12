<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'informacoes-veiculo',
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Informações sobre o veículo',
            linhas: [
              {
                subheader: 'Dados do veículo',
                bloco: [
                  { titulo: [ 'Placa', 'Cidade/UF' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Marca', 'Combustível' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Modelo', 'Cor' ],  conteudo: [ 1, 3 ] },
                  { titulo: [ 'Chassi', 'Nº de passageiros' ],   conteudo: [ 3, 4 ] },
                  { titulo: [ 'Renavam', 'Licença em exercício' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Ano de fabricação', 'Categoria' ],  conteudo: [ 1, 3 ] },
                  { titulo: [ 'Ano do modelo', 'Procedência' ],  conteudo: [ 1, 3 ] }
                ]
              },
              {
                subheader: 'Informações técnicas',
                bloco: [
                  { titulo: [ 'Tipo', 'Emissão de CRV' ],   conteudo: [ 3, 4 ] },
                  { titulo: [ 'Documento faturado', 'Espécie' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Nº do motor', 'Nº da caixa de câmbio' ],  conteudo: [ 1, 3 ] },
                  { titulo: [ 'Potência', 'Cilindradas' ],   conteudo: [ 3, 4 ] }
                ]
              },
              {
                subheader: 'Dados de carga',
                bloco: [
                  { titulo: [ 'Nº da carroceria', 'Nº de eixos' ], conteudo: [ 3, 4 ] },
                  { titulo: [ 'Peso bruto', 'Nº de eixos traseiros' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Capacidade de tração', 'Nº de eixos auxiliares' ], conteudo: [ 1, 3 ] },
                  { titulo: [ 'Capacidade de carga'], conteudo: [ 3 ] }
                ]
              },
              {
                subheader: 'Comercialização 0km',
                bloco: [
                  { titulo: [ 'Comercialização 0km' ], conteudo: [ 3 ] }
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
