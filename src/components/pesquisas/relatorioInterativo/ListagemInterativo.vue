<template>
  <div class="col-sm-12 col-md-12 col-lg-3">
    <listagem-component @opcaoSelecionada="parametrosReport"
    v-if="path == '/interativopf'" :item="listagemPF" :itens="listagemPF" :path="path"></listagem-component>
    <listagem-component @opcaoSelecionada="parametrosReport"
    v-else-if="path == '/interativopj'" :item="listagemPJ" :itens="listagemPJ" :path="path"></listagem-component>
  </div>
</template>

<script>
  import ListagemComponent from '../../shared/utils/ListagemComponent.vue'
  export default {
    name: 'listagem-interativo',
    props: { path: String, dadosListagem: Array },
    components: { ListagemComponent },
    data(){
      return{
        token: null,
        listagemPF: [//dados que alimentam o menu lateral com a listagem (ListagemComponent)
          {
            buscar: true, pagination: { rowsPerPage: 10 }, itens: [ ],
            headers: [
              { campo: 'Nome', value: 'nome' }, { campo: 'CPF', value: 'doc' }, { campo: 'Renda presumida', value: 'renda' },
              { campo: 'Nome da mãe', value: 'mae' }, { campo: 'Cidade/UF', value: 'cidadeuf' }
            ]
          }
        ],
        listagemPJ: [//dados que alimentam o menu lateral com a listagem (ListagemComponent)
          {
            buscar: true, pagination: { rowsPerPage: 10 }, itens: [ ],
            headers: [
              { campo: 'Nome', value: 'nome' }, { campo: 'CNPJ', value: 'doc' },
              { campo: 'Faturamento', value: 'faturamento' }, { campo: 'Cidade/UF', value: 'cidadeuf' }
            ]
          }
        ]
      }
    },
    methods:{
      parametrosReportInicial(){
        if (this.path == '/interativopf') {
          this.parametrosReport(this.dadosListagem[0].cpf)
        }
        else{
          this.parametrosReport(this.dadosListagem[0].cnpj)
        }
        this.montarListagem()
      },
      parametrosReport(dado){
        if (this.path == '/interativopf') {//pesquisa avançada PF
          var request = {
            data: [
              {
                parametros: { cpf: [dado] },
              }
            ],
            entity: 15, cobrar: false, tipoPesquisa: 'PF', token: this.token
          }
        }
        else{//pesquisa avançada PJ
          var request = {
            data: [
              {
                parametros: { cnpj: [dado] },
              }
            ],
            entity: 16, cobrar: false, tipoPesquisa: 'PJ', token: this.token
          }
        }
        this.requisicaoReport(request)
      },
      requisicaoReport(request){ //requisicao para pegar os dados da listagem lateral
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/report', request, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
          this.$emit('abrirReport', response.data.data)
        })
      },
      montarListagem(){
        for (var i = 0; i < this.dadosListagem.length; i++) {
          if (this.path == '/interativopf') {
            this.listagemPF[0].itens.push({
              nome: this.dadosListagem[i].nome, doc: this.dadosListagem[i].cpf,
              renda: 'R$ ' + this.dadosListagem[i].renda, mae: this.dadosListagem[i].nome_mae,
              cidadeuf: this.dadosListagem[i].cidades + '/' + this.dadosListagem[i].uf_principal
            })
          }
          else{
            this.listagemPJ[0].itens.push({
              nome: this.dadosListagem[i].razao, doc: this.dadosListagem[i].cnpj,
              faturamento: 'R$ ' + this.dadosListagem[i].faturamento,
              cidadeuf: this.dadosListagem[i].cidade_principal + '/' + this.dadosListagem[i].uf_principal
            })
          }
        }
      }
    },
    created(){
      this.token = sessionStorage.getItem('token')
      this.parametrosReportInicial()
    }
  }
</script>

<style lang="scss">
</style>
