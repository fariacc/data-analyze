<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'telefones-vinculados-pj',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Telefones vinculados', search: '', pagination: {}, content: [ ],
            headers: [
              { text: 'Telefone', value: 'telefone' }, { text: 'Tipo', value: 'tipo' }, { text: 'Probabilidade de contato', value: 'probabilidade' }
            ]
          }
        ]
      }
    },
    created(){
      for (var i = 0; i < this.dadosReport.telefones.length; i++) {
        this.tablesList[0].content.push({
          telefone: '(' + this.dadosReport.telefones[i].ddd + ') ' + this.dadosReport.telefones[i].telefone,
          tipo: this.dadosReport.telefones[i].tipo_telefone, probabilidade: this.dadosReport.telefones[i].fone_nota
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
