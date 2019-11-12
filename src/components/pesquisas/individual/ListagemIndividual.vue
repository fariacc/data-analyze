<template>
  <div class="col-sm-12 col-md-12 col-lg-12 px-0 mt-2">
    <listagem-component ref="listagem" v-if="path == '/individualpf'" @opcaoSelecionada="parametrosReport" :item="listagemPF"
    :itens="listagemPF" :path="path"></listagem-component>
    <listagem-component ref="listagem" v-else-if="path == '/individualpj'" @opcaoSelecionada="parametrosReport" :item="listagemPJ"
    :itens="listagemPJ" :path="path"></listagem-component>
  </div>
</template>

<script>
  import ListagemComponent from '../../shared/utils/ListagemComponent.vue'
  export default {
    name: 'listagem-individual',
    props: { path: String, token: String },
    components: { ListagemComponent },
    data(){
      return{
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
      parametrosReport(dado){
        if (this.path == '/individualpf') {//pesquisa individual PF
          var request = {
            data: [
              { parametros: { cpf: [dado] } }
            ],
            entity: 15, cobrar: false, tipoPesquisa: 'PF', token: this.token
          }
        }
        else{//pesquisa individual PJ
          var request = {
            data: [
              { parametros: { cnpj: [dado] } }
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
      montarListagem(listagem){
        if (this.path == '/individualpf') {
          this.listagemPF[0].itens = []//limpa a listagem pros resultados da nova pesquisa
          for (var i = 0; i < listagem.length; i++) {
            if (listagem[i].cidades == null && listagem[i].uf_principal == null) {
              listagem[i].cidades = 'N/A'
              listagem[i].uf_principal = 'N/A'
            }
            this.listagemPF[0].itens.push({
              nome: listagem[i].nome, doc: listagem[i].cpf,
              renda: 'R$ ' + listagem[i].renda, mae: listagem[i].nome_mae,
              cidadeuf: listagem[i].cidades + '/' + listagem[i].uf_principal
            })
          }
        }
        else {
          this.listagemPJ[0].itens = []
          for (var i = 0; i < listagem.length; i++) {
            this.listagemPJ[0].itens.push({
              nome: listagem[i].razao, doc: listagem[i].cnpj,
              faturamento: 'R$ ' + listagem[i].faturamento,
              cidadeuf: listagem[i].cidade_principal + '/' + listagem[i].uf_principal
            })
          }
        }
        this.$refs.listagem.pages()
      }
    }
  }
</script>

<style lang="scss">
</style>
