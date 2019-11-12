<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'pessoas-vinculadas-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Pessoas relacionadas', search: '', pagination: {},
            headers: [
              { text: 'Nome', value: 'nome' }, { text: 'Parentesco', value: 'parentesco' }, { text: 'Telefone', value: 'telefone' }
            ],
            content: [
              { nome: '(21) 0123456', parentesco: 'Altíssima', telefone: '(21) 0123456' },
              { nome: '(21) 1234567', parentesco: 'Altíssima', telefone: '(21) 1234567' },
              { nome: '(21) 2345678', parentesco: 'Altíssima', telefone: '(21) 2345678' },
              { nome: '(21) 3456789', parentesco: 'Altíssima', telefone: '(21) 3456789' },
              { nome: '(21) 4567890', parentesco: 'Altíssima', telefone: '(21) 4567890' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
