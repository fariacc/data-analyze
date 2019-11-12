<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'aquisicoes-investimentos-pf',
    props: { dadosReport: Object },
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Valor presumido para aquisições/investimentos',
            linhas: [
              {
                bloco: [ { titulo: [ null ], conteudo: [ 'Valor mensal estimado que esta pessoa possui para utilizar consumo de bens e/ou investimentos diversos. Este valor é calculado baseado em uma estimativa da possível renda líquida que esta pessoa dispõe.' ] } ]
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
