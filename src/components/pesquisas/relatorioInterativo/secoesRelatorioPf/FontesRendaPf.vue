<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'fontes-renda-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Fontes de renda informadas em solicitações de abertura de crédito', search: '', pagination: {},
            headers: [
              { text: 'Fonte pagadora', value: 'fonte' }, { text: 'Cargo', value: 'cargo' }, { text: 'Admissão', value: 'admissao' }
            ],
            content: [
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' },
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' },
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' },
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' },
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' },
              { fonte: '(21) 0123456', cargo: 'Altíssima', admissao: '(21) 0123456' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
