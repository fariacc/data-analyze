<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'telefones-vinculados-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Telefones vinculados', search: '', pagination: {},
            headers: [
              { text: 'Telefone', value: 'telefone' }, { text: 'Probabilidade de contato', value: 'probabilidade' }
            ],
            content: [
              { telefone: '(21) 01234adsa56', probabilidade: 'Altíssima' },
              { telefone: '(21) asddas', probabilidade: 'Altíssima' },
              { telefone: '(21) 01234dasd56', probabilidade: 'Altíssima' },
              { telefone: '(21) 01234aaa56', probabilidade: 'Altíssima' },
              { telefone: '(21) 0123456', probabilidade: 'Altíssima' },
              { telefone: '(21) 1234567', probabilidade: 'Altíssima' },
              { telefone: '(21) 2345678', probabilidade: 'Altíssima' },
              { telefone: '(21) 3456789', probabilidade: 'Altíssima' },
              { telefone: '(21) 4567890', probabilidade: 'Altíssima' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
