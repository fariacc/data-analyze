<template>
  <table-list-component ref="tables" :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  export default {
    name: 'table-pagamentos',
    props: { token: String },
    components: {
      TableListComponent
    },
    data(){
      return{
        tablesList: [
          {
            search: '', pagination: { descending: true, rowsPerPage: 5 },
            content: [
              {
                pagamento: '20/11/2018', vencimento: '15/11/2018', valorplano: 'R$ 1590,00', valorextra: 'R$ 400,50',
                valortotal: 'R$ 1990,50', situacao: 'Sim', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/12/2018', vencimento: '15/12/2018', valorplano: 'R$ 1590,00', valorextra: 'R$ 10,00',
                valortotal: 'R$ 1600,00', situacao: 'Sim', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/01/2019', vencimento: '15/01/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 300,50',
                valortotal: 'R$ 1890,50', situacao: 'Sim', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/02/2019', vencimento: '15/02/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 0,00',
                valortotal: 'R$ 1590,00', situacao: 'Não', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/03/2019', vencimento: '15/03/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 200,50',
                valortotal: 'R$ 1790,50', situacao: 'Não', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/04/2019', vencimento: '15/04/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 400,50',
                valortotal: 'R$ 1990,50', situacao: 'Sim', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/05/2019', vencimento: '15/05/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 100,50',
                valortotal: 'R$ 1690,50', situacao: 'Sim', linkboleto: 'https://www.seulink.com/'
              },
              {
                pagamento: '20/06/2019', vencimento: '15/06/2019', valorplano: 'R$ 1590,00', valorextra: 'R$ 600,00',
                valortotal: 'R$ 2190,00', situacao: 'Não', linkboleto: 'https://www.seulink.com/'
              }
            ],
            headers: [
              { text: 'Data de pagamento', value: 'pagamento' }, { text: 'Data de vencimento', value: 'vencimento' },
              { text: 'Valor do plano', value: 'valorplano' }, { text: 'Valores extras', value: 'valorextra' },
              { text: 'Valor total', value: 'valortotal' }, { text: 'Situação', value: 'situacao' },
              { text: 'Link do boleto', value: 'linkboleto' }
            ]
          }
        ]
      }
    },
    watch:{
      token(){
        this.$refs.tables.pages()
      }
    }
  }
</script>

<style lang="scss">
  .informacoes-pagamentos{
    .table-pagamentos{
      margin-top: 2vh;
      .header{
        padding: 0;
      }
      .v-table__overflow{
        table.v-table{
          max-width: 99.9%;
          thead{
            tr{
              th{
                white-space: nowrap;
                display: table-cell;
                font-size: 0.8rem;
                padding: 0 3vw;
                width: fit-content;
                text-align: center!important;
              }
            }
          }
          tbody{
            tr{
              td{
                width: inherit;
                font-size: 0.8rem;
                padding: 0 0.25vw;
                text-align: center;
                &:first-child{
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
