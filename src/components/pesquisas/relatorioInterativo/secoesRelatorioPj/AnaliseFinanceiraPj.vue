<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'analise-financeira-pj',
    props: { dadosReport: Object },
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Análise financeira',
            linhas: [
              {
                bloco: [
                  { titulo: [ 'Folha de pagamento mensal presumida' ], conteudo: [ ] },
                  { titulo: [ 'Faturamento mensal presumido' ], conteudo: [ ] },
                  { titulo: [ 'Capital social presumido' ], conteudo: [ ] },
                ]
              }
            ]
          }
        ]
      }
    },
    created(){
      if (this.dadosReport.financeiro[0].folha_pagamento != null) {
        this.tables[0].linhas[0].bloco[0].conteudo[0] = 'R$ ' + this.dadosReport.financeiro[0].folha_pagamento
      }
      if (this.dadosReport.financeiro[0].faturamento_mensal != null) {
        this.tables[0].linhas[0].bloco[1].conteudo[0] = 'R$ ' + this.dadosReport.financeiro[0].faturamento_mensal
      }
      if (this.dadosReport.financeiro[0].capital_social != null) {
        this.tables[0].linhas[0].bloco[2].conteudo[0] = 'R$ ' + this.dadosReport.financeiro[0].capital_social
      }
    }
  }
</script>

<style lang="scss">
</style>
