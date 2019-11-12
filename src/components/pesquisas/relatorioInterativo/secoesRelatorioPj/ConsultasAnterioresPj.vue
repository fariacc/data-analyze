<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'consultas-anteriores-pj',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Histórico de consultas anteriores', search: '', pagination: {}, content: [ ],
            headers: [
              { text: 'Empresa', value: 'empresa' }, { text: 'Última consulta', value: 'ultimaconsulta' },
              { text: 'Quantidade', value: 'quantidade' }
            ]
          }
        ]
      }
    },
    created(){
      for (var i = 0; i < this.dadosReport.quemConsultou.length; i++) {
        this.tablesList[0].content.push({
          empresa: this.dadosReport.quemConsultou[i].empresa,
          ultimaconsulta: this.dadosReport.quemConsultou[i].ultima_consulta,
          quantidade: this.dadosReport.quemConsultou[i].quantidade_consulta
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
