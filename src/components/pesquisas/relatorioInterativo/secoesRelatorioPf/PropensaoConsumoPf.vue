<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'informacoes-cadastrais-pf',
    props: { dadosReport: Object },
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Propensão de consumo',
            linhas: [
              {
                bloco: [
                  { titulo: [ 'Compras utilizando cartão de crédito', 'Investimentos/ações' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Celular pré pago', 'Seguro residencial' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'TV por assinatura residencial', 'Usuário assíduo de internet' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Possuir banda larga em casa', 'Compras via celular' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Viagens e turismo', 'Celular pós pago' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Cliente preferencial (Prime ou Black)', 'Utiliza Internet Banking' ], conteudo: [ 1, 2 ] },
                  { titulo: [ 'Utilização de e-commerce', 'Seguro automotivo' ],   conteudo: [ 'AAA-1234', 4 ] },
                  { titulo: [ 'Financiamento de veículos', 'Seguro de vida/saúde' ], conteudo: [ 1, 2 ] }
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
