<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'socios-vinculados-pj',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'Sócios vinculados', search: '', pagination: {}, content: [ ],
            headers: [
              { text: 'Tipo', value: 'tipo' }, { text: 'Nome', value: 'nome' },
              { text: 'Cargo', value: 'cargo' }
            ]
            // content: [ { tipo: 'pessoa fisica', nome: 'maria', cargo: 'Altíssima' } ],
          }
        ]
      }
    },
    // created(){
    //   for (var i = 0; i < this.dadosReport.enderecos.length; i++) {
    //     this.tablesList[0].content.push({
    //       endereco: this.dadosReport.enderecos[i].tipo + ' ' + this.dadosReport.enderecos[i].logradouro + ' ' +
    //       this.dadosReport.enderecos[i].numero + ' ' + this.dadosReport.enderecos[i].complemento,
    //       bairro: this.dadosReport.enderecos[i].bairro,
    //       cidade: this.dadosReport.enderecos[i].cidade, uf: this.dadosReport.enderecos[i].uf,
    //       cep: this.dadosReport.enderecos[i].cep
    //     })
    //   }
    // }
  }
</script>

<style lang="scss">
</style>
