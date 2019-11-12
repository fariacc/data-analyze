<template>
  <div class="gerenciar-historico">
    <p class="m-0 text-center texto-grafico-contador card box-shadow">
      <strong>Gerenciamento de histórico</strong>
    </p>
    <div class="card box-shadow table-historico px-2 pt-2">
      <!-- <filtrar-historico-form :dadosUsuario="dadosUsuario" :token="token"
      @enviarRequestFiltroHistorico="enviaRequestFiltroHistorico"></filtrar-historico-form> -->
      <table-list-component ref="tables" :tables="tablesList" :table="tablesList" :search="tablesList" :pagination="tablesList"></table-list-component>
    </div>
  </div>
</template>

<script>
  import TableListComponent from '../../../shared/tables/TableListComponent.vue'
  // import FiltrarHistoricoForm from './FiltrarHistoricoForm.vue'
  export default {
    name: 'gerenciar-historico',
    props: { token: String },
    components: {
      TableListComponent,
      // FiltrarHistoricoForm
    },
    data(){
      return{
        tablesList: [
          {
            search: '', pagination: { rowsPerPage: 5 },
            content: [
              {
                id: 1, produto: 'Relatório interativo PF', data: '05/09/2019', usuario: 'Carolina',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 2, produto: 'Leads PJ', data: '21/09/2019', usuario: 'Mônica',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 3, produto: 'Relatório interativo PJ', data: '13/07/2019', usuario: 'Mônica',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 4, produto: 'Leads PF', data: '03/11/2019', usuario: 'Carolina',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 5, produto: 'Leads PF', data: '10/09/2019', usuario: 'Mônica',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 6, produto: 'Relatório interativo PJ', data: '05/10/2019', usuario: 'Adam',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              },
              {
                id: 7, produto: 'Leads PF', data: '16/09/2019', usuario: 'Carolina',
                status: 'fas fa-check-circle', acoes: 'fas fa-share-square', report: 'PJ'
              }
            ],
            headers: [
              { text: 'ID', value: 'id' }, { text: 'Produto', value: 'produto' },
              { text: 'Data', value: 'data' }, { text: 'Usuário', value: 'usuario' },
              { text: 'Report', value: 'report' }, { text: 'Status', value: 'status' },
              { text: 'Ações', value: 'acoes' }
            ]
          }
        ]
      }
    },
    // methods: {
      // enviaRequestFiltroHistorico(resultadoFiltro){
      //   this.requisicaoHistorico(resultadoFiltro)
      // },
      // requisicaoHistorico(){
      //   this.$refs.tables.pages()
      // }
    // },
    watch:{
      token(){
        // this.requisicaoHistorico()
        this.$refs.tables.pages()
      }
    }
  }
</script>

<style lang="scss">
  .gerenciar-historico{
    .table-historico{
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
