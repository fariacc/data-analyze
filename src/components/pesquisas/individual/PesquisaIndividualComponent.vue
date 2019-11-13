<template>
  <div class="pesquisa-individual">
    <navbar-interna-component @enviarInfosUser="enviaInfosUser"></navbar-interna-component>
    <div class="row mx-0 bg-cinza">
      <div class="col-sm-12 col-md-12 col-lg-3">
        <pesquisa-individual-form class="d-print-none" :token="token" :path="path" :tipoPesquisa="tipoPesquisa"
        @enviarLeads="enviaLeads" @enviarCompleted="enviaCompleted"></pesquisa-individual-form>
        <listagem-individual v-show="encontrado && completed" ref="listagemindividual" :token="token" :path="path"
        @abrirReport="adicionarTab"></listagem-individual>
        <loading-component v-show="completed == false"></loading-component>
        <p class="texto-grafico-contador text-center box-shadow card p-1" v-show="encontrado == false && completed == true">
          Não foram encontrados resultados para a pesquisa realizada
        </p>
      </div>
      <relatorio-interativo ref="relatoriointerativo" v-show="selecionado" :tabsRelatorio="tabsRelatorio"
      :dadosReport="dadosReport" :dadosUsuario="dadosUsuario"></relatorio-interativo>
      <div class="col-sm-12 col-md-12 col-lg-9" v-show="!selecionado">
        <resumo-component :path="path" :count="count" :informacoesGrafico="dadosGrafico"></resumo-component>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../../shared/NavbarInternaComponent.vue'
  import RelatorioInterativo from '../relatorioInterativo/RelatorioInterativo.vue'
  import LoadingComponent from '../../shared/utils/LoadingComponent.vue'
  import PesquisaIndividualForm from './PesquisaIndividualForm.vue'
  import ResumoComponent from '../ResumoComponent.vue'
  import InputComponent from '../../shared/inputs/InputComponent.vue'
  import ListagemIndividual from './ListagemIndividual.vue'
  import GraficosInterativoPf from '../relatorioInterativo/graficos/pf/GraficosInterativoPf.vue'
  import GraficosInterativoPj from '../relatorioInterativo/graficos/pj/GraficosInterativoPj.vue'
  export default {
    name: 'pesquisa-individual-component',
    components: {
      NavbarInternaComponent, PesquisaIndividualForm, LoadingComponent, ResumoComponent, InputComponent,
      ListagemIndividual, RelatorioInterativo, GraficosInterativoPj, GraficosInterativoPf
    },
    data(){
      return{
        path: null, token: null, encontrado: null, selecionado: false, dadosUsuario: null, dadosReport: null, count: null,
        dadosGrafico: null, listagem: null, completed: null,
        tabsRelatorio: [//dados que alimentam o menu superior do relatório interativo
          { nome: 'Relatório geral', classe: 'tab-pane fade show active', href: '#relatorioGeral',
          ariacontrols: 'relatorioGeral', classea: 'nav-link show active' },
          { nome: 'Análise mercadológica', classe: 'tab-pane fade', href: '#analiseMercadologica',
          ariacontrols: 'analiseMercadologica', classea: 'nav-link show' },
          { nome: 'Análise de vínculos', classe: 'tab-pane fade', href: '#analiseVinculos',
          ariacontrols: 'analiseVinculos', classea: 'nav-link show' }
        ]
      }
    },
    methods: {
      enviaInfosUser(dadosUser){
        this.dadosUsuario = dadosUser
      },
      enviaCompleted(completed){
        this.completed = completed
      },
      enviaLeads(leads){
        if (leads.length > 0) {
          this.$refs.listagemindividual.montarListagem(leads)
          this.encontrado = true
          this.completed = true
        }
        else{
          this.completed = true
          this.encontrado = false
        }
      },
      adicionarTab(dados){
        this.selecionado = true
        this.dadosReport = dados
        if (this.path == '/individualpf') {
          this.$refs.relatoriointerativo.addItem(dados.cpf)//disparar o evento 'addItem' de AbasComponent, com this.doc de parâmetro
        }
        else {
          this.$refs.relatoriointerativo.addItem(dados.cnpj)//disparar o evento 'addItem' de AbasComponent, com this.doc de parâmetro
        }
      },
      parametrosGraficoInicial(){
        var request = {
          data: [
            { parametros: { }, filtros: { } }
          ],
          preferencias: [ ], tipoPesquisa: this.tipoPesquisa, token: this.token
        }
        this.requisicaoGraficos(request)
      },
      requisicaoGraficos(request){
        this.dadosGrafico = response.data.data
        this.count = '53.000.964'
      }
    },
    mounted(){
      this.parametrosGraficoInicial()
    },
    created(){
      this.enviaInfosUser()
      this.path = this.$route.path
      this.token = sessionStorage.getItem('token')
      if (this.path == '/individualpj'){
        this.tipoPesquisa = 'PJ'
      }
      else{
        this.tipoPesquisa = 'PF'
      }
    }
  }
</script>

<style lang="scss">
  .pesquisa-individual{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
    .nav-analises{
      .nav-tabs{
        .nav-item{
          width: 50%;
          .nav-link{
            border: none;
            font-size: 0.8rem;
            background-color: transparent;
            &:hover, &.active{
              border-bottom: 2px solid #213345;
            }
          }
        }
      }
    }
  }
</style>
