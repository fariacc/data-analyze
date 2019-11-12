<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'participacao-empresas-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Participação em empresas', search: '', pagination: {},
            headers: [
              { text: 'CNPJ', value: 'cnpj' }, { text: 'Empresa', value: 'empresa' },
              { text: 'Participação', value: 'participacao' }, { text: 'Data da entrada', value: 'entrada' }
            ],
            content: [
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' },
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' },
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' },
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' },
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' },
              { cnpj: '(21) 0123456', empresa: 'Altíssima', participacao: '(21) 0123456', entrada: 'da' }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
