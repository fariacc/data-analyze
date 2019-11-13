<template>
  <div class="secao">
    <div v-for="(table, key) in tables">
      <div class="header">{{ table.header }}</div>
      <v-app>
        <v-data-table :headers="table.headers" :items="table.content" :search="table.search" hide-actions :pagination.sync="table.pagination">
          <template slot="items" slot-scope="props">
            <td v-for="(header, key) in table.headers">
              <p class="m-0" v-if="props.item[header.value] == null || props.item[header.value] == 'undefined'">N/A</p>
              <p class="m-0" v-else-if="table.headers[key].value != 'status' && table.headers[key].value != 'acoes' && table.headers[key].value != 'linkboleto'">
                {{ props.item[header.value] }}
              </p>
              <!-- usado apenas no component 'GerenciarHistorico' -->
              <v-icon color="success" class="mr-2" v-if="table.headers[key].value == 'status' && path == '/conta' && props.item[header.value] == 'fas fa-check-circle'">
                {{ props.item[header.value] }}
              </v-icon>
              <v-icon color="error" class="mr-2" v-else-if="table.headers[key].value == 'status' && path == '/conta' && props.item[header.value] == 'fas fa-times-circle'">
                {{ props.item[header.value] }}
              </v-icon>
              <v-icon class="mr-2" color="blue-grey darken-2" v-else-if="table.headers[key].value == 'acoes' && path == '/conta'" @click="$router.push('/interativopf')">
                {{ props.item[header.value] }}
              </v-icon>
              <router-link class="link" v-else-if="table.headers[key].value == 'linkboleto' && path == '/conta'" :to="props.item[header.value]">Link</router-link>
              <!--  -->
            </td>
          </template>
        </v-data-table>
        <div class="row mx-0 paginationdiv">
          <v-card-title class="col-sm-12 col-md-5 col-lg-5 pt-0 mr-auto pb-2">
            <v-text-field v-model="table.search" append-icon="search" label="Pesquisar" single-line hide-details @input="pages"></v-text-field>
          </v-card-title>
          <div class="col col-sm-12 col-md-7 col-lg-7 pt-2 paginacao">
            <v-pagination v-model="table.pagination.page" class="float-right" :total-visible="5" :length="paginas[key]"></v-pagination>
          </div>
        </div>
      </v-app>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table-list-component',
    props: { table: Array, tables: Array },
    data(){
      return{
        paginas: [], path: null
      }
    },
    methods: {
      pages(){
        if (this.paginas[0] == undefined) {
          this.paginas[0] = 1
        }
        for (var i = 0; i < this.table[0].content.length; i++) {
          if (this.table[0].pagination.rowsPerPage == null || this.table[0].pagination.totalItems == null){
            this.paginas[i] = 0
          }
          this.paginas[i] = Math.ceil(this.table[0].content.length/this.table[0].pagination.rowsPerPage)
        }
      }
    },
    mounted(){
      this.pages()
      this.path = this.$route.path
    }
  }
</script>

<style lang="scss">
  .application--wrap{
    min-height: 0;
    .paginationdiv{
      .paginacao{
        background-color: transparent;
        text-align: center;
        .v-pagination__item{
          &--active {
            background-color: #41698E!important;
          }
        }
      }
    }
  }
  .v-table__overflow{
    // width: 100.1%;
    table.v-table{
      -webkit-print-color-adjust: exact;
      width: 100%;
      thead{
        tr{
          height: 3.8vh;
        }
        th {
          background-color: #41698E;
          color: #ffffff!important;
        }
        i{
          color: #ffffff!important;
        }
      }
      tbody{
        tr{
          td{
            background-color: #ececec;
            border-right: 1px solid #ffffff;
            border-top: 1px solid #ffffff;
            height: 3.5vh;
            -webkit-print-color-adjust: exact;
          }
        }
      }
    }
  }
</style>
