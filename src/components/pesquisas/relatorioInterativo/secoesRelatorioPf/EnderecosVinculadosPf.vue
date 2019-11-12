<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'enderecos-vinculados-pf',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Endereços vinculados', search: '', pagination: {}, content: [ ],
            headers: [
              { text: 'Endereço', value: 'endereco' }, { text: 'Bairro', value: 'bairro' }, { text: 'Cidade', value: 'cidade' },
              { text: 'UF', value: 'uf' }, { text: 'CEP', value: 'cep' }
            ]
          }
        ]
      }
    },
    created(){
      this.tablesList[0].content.push({
        endereco: this.dadosReport.endereco, bairro: this.dadosReport.bairro,
        cidade: this.dadosReport.cidade, uf: this.dadosReport.uf,
        // cep: this.dadosReport.enderecos[0].cep
      })
    }
  }
</script>

<style lang="scss">
</style>
