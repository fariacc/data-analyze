<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'analise-financeira-pf',
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
                  { titulo: [ 'Renda mensal presumida' ], conteudo: [ ] },
                  { titulo: [ 'Classe social' ], conteudo: [ ] }
                ]
              }
            ]
          }
        ]
      }
    },
    created(){
      if (this.dadosReport.financeiro[0].renda != null) {
        this.tables[0].linhas[0].bloco[0].conteudo[0] = 'R$ ' + this.dadosReport.financeiro[0].renda
      }
      // if (this.dadosReport.financeiro[0].classe_social != null) {
      //   this.tables[0].linhas[0].bloco[1].conteudo[0] = 'R$ ' + this.dadosReport.financeiro[0].classe_social
      // }
    }
  }
</script>

<style lang="scss">
</style>
