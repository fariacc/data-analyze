<template>
  <table-list-component :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>
<!-- :total-visible="3" -->

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'emails-vinculados-pj',
    props: { dadosReport: Object },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            header: 'E-mails vinculados', search: '', pagination: {}, content: [ ],
            headers: [
              { text: 'E-mail', value: 'email' }, { text: 'Domínio', value: 'dominio' }, { text: 'Status', value: 'status_email' }
            ]
          }
        ]
      }
    },
    created(){
      for (var i = 0; i < this.dadosReport.emails.length; i++) {
        this.tablesList[0].content.push({
          email: this.dadosReport.emails[i].email, dominio: this.dadosReport.emails[i].dominio,
          status_email: this.dadosReport.emails[i].status
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
