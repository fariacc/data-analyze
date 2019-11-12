<template>
  <div class="listagem d-print-none box-shadow">
    <v-app>
      <!-- campo de Pesquisar para quando não estiver na página de "Conta" -->
      <div class="col pb-3 searchfield" v-if="itens[0].buscar == true && path != '/conta'">
        <v-text-field class="pt-1" v-model="search" append-icon="search" label="Pesquisar" single-line hide-details @input="pages"></v-text-field>
      </div>
      <v-data-table class="lista" :headers="itens[0].headers" :items="itens[0].itens" :search="search" hide-headers hide-actions :pagination.sync="itens[0].pagination">
        <template slot="items" slot-scope="props">
          <li class="opcoes-lista" @click="selecaoResultado(props.item.doc)"><!-- manda doc do selecionado para o relatorio -->
            <div class="col">
              <div v-if="secao == 'usuarios'">
                <button type="button" class="btn btn-default btn-print float-right ml-3 error"
                @click="$emit('excluirUsuarioModal', props.item)">
                  <i class="fas fa-user-times"></i> Excluir
                </button>
                <button type="button" class="btn btn-default btn-print float-right success"
                @click="$emit('alterarUsuarioModal', props.item)">
                  <i class="fas fa-user-edit"></i> Alterar
                </button>
              </div>
              <strong class="font-weight-bold name">
                {{props.item.nome}}
              </strong>
              <div v-for="(linha, key, chave) in props.item">
                <p class="small item" v-if="chave != 0">{{itens[0].headers[chave].campo}}: {{linha}}</p>
              </div>
            </div>
          </li>
        </template>
      </v-data-table>
      <!-- campos de Pesquisar e Paginação para quando estiver na página de "Conta" -->
      <div class="row mx-0" v-if="path == '/conta'">
        <div class="col-sm-12 col-md-5 col-lg-5 pb-3 searchfield" v-if="itens[0].buscar == true">
          <v-text-field class="pt-1" v-model="search" append-icon="search" label="Pesquisar" single-line hide-details @input="pages"></v-text-field>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 paginacao ml-auto">
          <v-pagination class="float-right" :total-visible="5" v-model="itens[0].pagination.page" :length="paginas[0]"></v-pagination>
        </div>
      </div>
      <div class="paginacao" v-else>
        <v-pagination v-model="itens[0].pagination.page" :total-visible="5" :length="paginas[0]"></v-pagination>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'listagem-component',
  props: { item: Array, itens: Array, path: String, secao: String },
  data(){
    return{
      paginas: [], search: ''
    }
  },
  methods: {
    pages(){
      if (this.paginas[0] == undefined) {
        this.paginas[0] = 1
      }
      for (var i = 0; i < this.itens[0].itens.length; i++) {
        if (this.itens[0].pagination.rowsPerPage == null || this.itens[0].itens.length == 0){
          this.paginas[i] = 0
        }
        this.paginas[i] = Math.ceil(this.itens[0].itens.length/this.itens[0].pagination.rowsPerPage)
      }
    },
    selecaoResultado(dado){
      this.$emit('opcaoSelecionada', dado)
    }
  },
  mounted(){
    this.pages()
  }
}
</script>

<style lang="scss">
  .listagem{
    tr{
      height: 0px!important;
    }
    .searchfield{
      background-color: #ffffff;
      border: none;
    }
    .lista{
      list-style-type: none;
      .v-table__overflow{
        width: 100%;
        .v-table{
          border: none;
          border-radius: .25rem;
        }
        .opcoes-lista{
          cursor: pointer;
          padding-top: 0.5vh;
          padding-bottom: 0.5vh;
          &:hover{
            background-color: #d6d6d6;
          }
          &.active{
            transition: 0.3s;
          }
          &:last-child{
            border: 0;
          }
          .name{
            color: #41698E;
            text-transform: uppercase;
          }
          .item{
            margin: 0;
          }
        }
      }
    }
    .paginacao{
      background-color: #ffffff;
      text-align: center;
      border: none;
      border-radius: .25rem;
      .v-pagination__item{
        &--active {
          background-color: #41698E!important;
        }
      }
    }
  }
</style>
