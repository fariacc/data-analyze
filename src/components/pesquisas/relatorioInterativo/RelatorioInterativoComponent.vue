<template>
  <div class="relatorio-interativo-component bg-cinza interativo">
    <navbar-interna-component @enviarInfosUser="enviaInfosUser"></navbar-interna-component><!-- menu superior da aplicação -->
    <div class="row mx-0">
      <listagem-interativo :path="path" :infoLeads="infoLeads" :dadosListagem="listagem"
      @abrirReport="adicionarTab"></listagem-interativo>
      <relatorio-interativo v-show="completed" ref="relatoriointerativo" :dadosUsuario="dadosUsuario"
      :tabsRelatorio="tabsRelatorio" :dadosReport="dadosReport"></relatorio-interativo>
      <loading-component v-show="!completed"></loading-component>
    </div>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../../shared/NavbarInternaComponent.vue'
  import LoadingComponent from '../../shared/utils/LoadingComponent.vue'
  import ListagemInterativo from './ListagemInterativo.vue'
  import RelatorioInterativo from './RelatorioInterativo.vue'
  export default {
    name: 'relatorio-interativo-component',
    components: {
      NavbarInternaComponent, LoadingComponent, ListagemInterativo, RelatorioInterativo
    },
    data(){
      return{
        path: null, labelTab: null, id: 0, infoLeads: null, listagem: null, dadosUsuario: null, dadosReport: null,
        completed: null,
        tabsRelatorio: [//dados que alimentam o menu superior do relatório interativo
          { nome: 'Relatório geral', classe: 'tab-pane fade show active', href: '#relatorioGeral',
          ariacontrols: 'relatorioGeral', classea: 'nav-link show active' },
          { nome: 'Análise mercadológica', classe: 'tab-pane fade', href: '#analiseMercadologica',
          ariacontrols: 'analiseMercadologica', classea: 'nav-link' },
          { nome: 'Análise de vínculos', classe: 'tab-pane fade', href: '#analiseVinculos',
          ariacontrols: 'analiseVinculos', classea: 'nav-link' }
        ]
      }
    },
    methods: {
      enviaInfosUser(dadosUser){
        this.dadosUsuario = dadosUser
      },
      adicionarTab(dados){
        if (this.path == '/interativopf') {
          this.$refs.relatoriointerativo.addItem(dados.cpf)
        }
        else{
          this.$refs.relatoriointerativo.addItem(dados.cnpj)//disparar o evento 'addItem' de AbasComponent, com this.doc de parâmetro
        }
        this.dadosReport = dados
        this.completed = true
      }
    },
    created(){
      this.enviaInfosUser()
      this.path = this.$route.path
      if (this.$route.params.infoLeads != null) {
        this.listagem = this.$route.params.infoLeads
      }
      else{
        this.listagem = this.$route.params.listagem
      }
      if (this.listagem == null){//se a listagem tiver vazia, força pra home
        this.$router.push('/home')
      }
      this.completed = false
    }
  }
</script>

<style lang="scss">
  .relatorio-interativo-component{
    width: 100%;
    height: 100%;
  }
  .transparente{
    background-color: transparent!important;
  }
</style>
