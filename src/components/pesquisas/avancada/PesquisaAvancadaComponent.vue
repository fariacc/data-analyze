<template>
  <div class="pesquisa-avancada">
    <navbar-interna-component></navbar-interna-component>
    <div class="row mx-0 bg-cinza">
      <div class="col-sm-12 col-md-12 col-lg-3">
        <pesquisa-avancada-form @enviarCount="enviaCount" @enviarInfoGrafico="enviaInfoGrafico"
        class="d-print-none" @geraPesquisa="gerarPesquisa"
        :parametrosAnterioresGraficos="parametrosAnterioresGraficos"></pesquisa-avancada-form>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-9">
        <resumo-component :path="path" :count="count" :informacoesGrafico="dadosGrafico"></resumo-component>
      </div>
    </div>
    <modal-pesquisa-avancada @showModal="mostrarModal" v-if="showModal" :pesquisa="pesquisa" :texto="texto"
    :icone="icone" :validade="validade" :count="count" :path="path" @gerarInterativo="geraInterativo"
    @enviarFiltros="enviaFiltros" @gerarLeads="parametrosLeads"></modal-pesquisa-avancada>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../../shared/NavbarInternaComponent.vue'
  import PesquisaAvancadaForm from './PesquisaAvancadaForm.vue'
  import ResumoComponent from '../ResumoComponent.vue'
  import ModalPesquisaAvancada from './ModalPesquisaAvancada.vue'
  export default {
    name: 'pesquisa-pf-avancada-component',
    components: {
      NavbarInternaComponent, PesquisaAvancadaForm, ResumoComponent, ModalPesquisaAvancada
    },
    data(){
      return{
        path: null, count: 0, dadosGrafico: null, pesquisa: null, texto: null, icone: null,
        showModal: null, validade: null, filtros: null, requisicaoGraficos: null,
        parametrosAnterioresGraficos: null
      }
    },
    methods: {
      mostrarModal(showModal){
        this.showModal = showModal
      },
      enviaInfoGrafico(dados, requisicaoGraficos){
        this.dadosGrafico = dados
        this.requisicaoGraficos = requisicaoGraficos
      },
      enviaCount(count){
        this.count = count
      },
      enviaFiltros(filtros){
        this.filtros = filtros
      },
      gerarPesquisa(texto, icone, validade, pesquisa, showModal){
        this.pesquisa = pesquisa
        this.texto = texto
        this.icone = icone
        this.validade = validade
        this.showModal = showModal
      },
      requisicaoLeads(request, parametrosAnterioresGraficos){
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/prospect', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (request.tipoPesquisa == 'PF') {
            this.$router.push({name: 'leadspf', params: { leads: response.data.data, parametrosAnterioresGraficos: parametrosAnterioresGraficos }})
          }
          else{
            this.$router.push({name: 'leadspj', params: { leads: response.data.data, parametrosAnterioresGraficos: parametrosAnterioresGraficos }})
          }
        })
      },
      parametrosLeads(linhas, filtros){
        var request = {
          data: [
            {
              parametros: this.requisicaoGraficos.data[0].parametros,
              filtros: filtros
            }
          ],
          indice: linhas.consumir,
          produto: 'Leads',
          preferencias: this.requisicaoGraficos.preferencias,
          tipoPesquisa: this.requisicaoGraficos.tipoPesquisa,
          token: this.requisicaoGraficos.token
        }
        this.requisicaoLeads(request, this.requisicaoGraficos)
      },
      geraInterativo(linhas, filtros){
        var request = {
          data: [
            {
              parametros: this.requisicaoGraficos.data[0].parametros,
              filtros: filtros
            }
          ],
          indice: linhas.consumir,
          produto: 'Leads',
          preferencias: this.requisicaoGraficos.preferencias,
          tipoPesquisa: this.requisicaoGraficos.tipoPesquisa,
          token: this.requisicaoGraficos.token
        }
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/prospect', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (request.tipoPesquisa == 'PF') {
            this.$router.push({name: 'interativopf', params: { listagem: response.data.data } })
          }
          else{
            this.$router.push({name: 'interativopj', params: { listagem: response.data.data } })
          }
        })
      }
    },
    mounted(){
      this.path = this.$route.path
    },
    created(){//recebendo os parâmetros anteriormente pesquisados quando vêm da página de Leads
      this.parametrosAnterioresGraficos = this.$route.params.parametrosAnterioresGraficos;
    }
  }
</script>

<style lang="scss">
  .pesquisa-avancada{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
    .price-info{
      background-color: #4FAB4F;
    }
  }
</style>
