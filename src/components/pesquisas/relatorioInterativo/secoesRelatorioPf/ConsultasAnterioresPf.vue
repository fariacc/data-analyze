<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'consultas-anteriores-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Histórico de consultas anteriores', search: '', pagination: {},
            headers: [
              { text: 'Ramo de atividade', value: 'ramo' }, { text: 'Última consulta', value: 'ultimaconsulta' },
              { text: 'Quantidade', value: 'quantidade' }
            ],
            content: [
              { ramo: null, ultimaconsulta: null, quantidade: null },
              { ramo: '(21) 0123456', ultimaconsulta: 'Altíssima', quantidade: '(21) 0123456' },
              { ramo: '(21) 0123456', ultimaconsulta: 'Altíssima', quantidade: '(21) 0123456' },
              { ramo: '(21) 0123456', ultimaconsulta: 'Altíssima', quantidade: '(21) 0123456' },
              { ramo: '(21) 0123456', ultimaconsulta: 'Altíssima', quantidade: '(21) 0123456' },
              { ramo: '(21) 0123456', ultimaconsulta: 'Altíssima', quantidade: '(21) 0123456' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
