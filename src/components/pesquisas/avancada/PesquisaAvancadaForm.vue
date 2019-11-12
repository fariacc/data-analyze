<template>
  <div class="form-pesquisa box-shadow">
    <ul-component v-if="path == '/avancadapf'" classediv="nav-form" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsPf" :item="tabsPf" :items="tabsPf"></ul-component>
    <ul-component v-else classediv="nav-form" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsPj" :item="tabsPj" :items="tabsPj"></ul-component>
    <accordion-component v-for="(accordion, key) in accordions" :titulo="accordion.titulo" :idcontent="accordion.idcontent" :heading="accordion.heading" :datatarget="accordion.alvo" :ariacontrols="accordion.ariacontrols">
      <div slot="content">
        <div class="drag-drop text-center" v-if="key == 0">
          <p class="pt-2">Arraste seu arquivo ou clique para fazer o upload. <strong>Somente formato CSV.</strong></p>
          <i class="fas fa-upload fa-4x pb-3"></i>
        </div>
        <form class="tab-content text-center" v-else>
          <div class="tab-pane fade show active" id="pesquisaAvancada">
            <div class="form-group col-md-12 col-lg-12" v-if="path == '/avancadapf'" v-for="(input, key) in inputsPf">
              <label labelinput="dadoPesquisa" class="control-label text-left">{{input.label}}</label>
              <tags-input placeholder="Insira e pesquise apertando 'ENTER'" v-if="input.tipo == 'tagsinput'"
              class="" v-model="input.value" :name="input.name" @input="parametrosGraficos"></tags-input>
              <checkbox-component v-else-if="input.tipo == 'checkbox'" @input="parametrosGraficos"
              :input="input"></checkbox-component>
              <multiselect-component v-else-if="input.tipo == 'multiselect'" :input="input" :multiple="true"
              @input="parametrosGraficos" :ufSelecionado="ufSelecionado"></multiselect-component>
              <vue-numeric class="form-control" :min="0" separator="." v-else-if="input.tipo == 'idade'"
              :max="10000000" v-model="input.value" :name="input.name" @change.native="parametrosGraficos"></vue-numeric>
              <money v-else-if="input.tipo == 'renda'" class="form-control" v-model="input.value"
              v-bind="money" @change.native="parametrosGraficos"></money>
            </div>
            <div class="form-group col-md-12 col-lg-12" v-if="path == '/avancadapj'" v-for="(input, key) in inputsPj">
              <label labelinput="dadoPesquisa" class="control-label text-left">{{input.label}}</label>
              <tags-input placeholder="Insira e pesquise apertando 'ENTER'" v-if="input.tipo == 'tagsinput'"
              class="" v-model="input.value" :name="input.name" @input="parametrosGraficos"></tags-input>
              <checkbox-component v-else-if="input.tipo == 'checkbox'" @input="parametrosGraficos"
              :input="input"></checkbox-component>
              <multiselect-component v-else-if="input.tipo == 'multiselect'" :input="input" :multiple="true"
              @input="parametrosGraficos" :ufSelecionado="ufSelecionado"></multiselect-component>
              <vue-numeric class="form-control" :min="0" separator="." v-else-if="input.tipo == 'funcionario'"
              :max="10000000" v-model="input.value" :name="input.name" @change.native="parametrosGraficos"></vue-numeric>
              <money v-else-if="input.tipo == 'faturamento'" class="form-control" v-model="input.value"
              v-bind="money" @change.native="parametrosGraficos"></money>
            </div>
          </div>
        </form>
      </div>
    </accordion-component>
    <div class="container-fluid card">
      <button-component :disabled="botaoDisabled" tipo="button" rotulo="Pesquisar" classe="btn btn-default btn-inteiro" @click.native="gerarPesquisa('interativo')"></button-component>
      <button-component :disabled="botaoDisabled" tipo="button" rotulo="Gerar Leads" classe="btn btn-default btn-inteiro" @click.native="gerarPesquisa('leads')"></button-component>
    </div>
  </div>
</template>

<script>
  import RadioComponent from '../../shared/inputs/RadioComponent.vue'
  import InputComponent from '../../shared/inputs/InputComponent.vue'
  import CheckboxComponent from '../../shared/inputs/CheckboxComponent.vue'
  import MultiselectComponent from '../../shared/inputs/MultiselectComponent.vue'
  import ButtonComponent from '../../shared/ButtonComponent.vue'
  import UlComponent from '../../shared/utils/UlComponent.vue'
  import AccordionComponent from '../../shared/utils/AccordionComponent.vue'
  import CPF from 'gerador-validador-cpf'
  export default {
    name: 'pesquisa-avancada-form',
    props: { parametrosAnterioresGraficos: Object },
    components: {
      RadioComponent, InputComponent, MultiselectComponent, ButtonComponent, UlComponent,
      CheckboxComponent, AccordionComponent
    },
    data(){
      return{
        path: null, tipoPesquisa: null, dadoPesquisa: null, campoSelecionado: null, isValida: null,
        token: null, ufSelecionado: null, botaoDisabled: true,
        money: { decimal: ',', thousands: '.', prefix: 'R$ ', precision: 2, masked: false }, pesquisa: null,
        tabsPf: [
          { nome: 'Pesquisa Avançada PF', href: '#pesquisaAvancada', ariacontrols: 'pesquisaAvancada', classea: 'nav-link show active' },
        ],
        tabsPj: [
          { nome: 'Pesquisa Avançada PJ', href: '#pesquisaAvancada', ariacontrols: 'pesquisaAvancada', classea: 'nav-link show active' },
        ],
        inputsPf: [
          { label: "Nome", value: [], tipo: "tagsinput", name: "nome" },
          { label: "UF", value: [], name: "uf", tipo: "multiselect", catalog: "uf" },
          { label: "Cidade", value: [], name: "cidade", disabled: "disabled", tipo: "multiselect", catalog: "cidade" },
          { label: "CEP", value: [], tipo: "tagsinput", name: "cep" },
          { label: "Escolaridade", value: [], tipo: "multiselect", name: "escolaridade", catalog: "escolaridade" },
          { label: "Profissão", value: [], tipo: "multiselect", name: "cboform", catalog: "cbo" },
          {
            label: "Sexo", value: [], tipo: "checkbox", name: "sexo",
            options: [ { text: "Feminino", value: "F" }, { text: "Masculino", value: "M" } ]
          },
          { label: "Idade mínima", value: '', name: "idademinima", tipo: "idade" },
          { label: "Idade máxima", value: '', name: "idademaxima", tipo: "idade" },
          { label: "Renda mensal presumida mínima", value: '', name: "rendaminima", tipo: "renda" },
          { label: "Renda mensal presumida máxima", value: '', name: "rendamaxima", tipo: "renda" }
        ],
        inputsPj: [
          { label: "Palavra chave", value: [], tipo: "tagsinput", name: "razao" },
          { label: "UF", value: [], name: "uf", tipo: "multiselect", catalog: "uf" },
          { label: "Cidade", value: [], name: "cidade", disabled: "disabled", tipo: "multiselect", catalog: "cidade" },
          { label: "CEP", value: [], tipo: "tagsinput", name: "cep" },
          { label: "Ramo de atuação", value: [], tipo: "multiselect", name: "cnaeform", catalog: "cnae" },
          {
            label: "Porte da empresa", value: [], tipo: "checkbox", name: "porte",
            options: [
              { text: "Micro", value: 1 }, { text: "Pequeno", value: 2 }, { text: "Médio", value: 3 },
              { text: "Grande", value: 4 }, { text: "MEI", value: 5 }
            ]
          },
          { label: "Número mínimo de funcionários", value: '', name: "funcionariominimo", tipo: "funcionario" },
          { label: "Número máximo de funcionários", value: '', name: "funcionariomaximo", tipo: "funcionario" },
          { label: "Faturamento anual mínimo aproximado", value: '', name: "faturamentominima", tipo: "faturamento" },
          { label: "Faturamento anual máximo aproximado", value: '', name: "faturamentomaxima", tipo: "faturamento" },
          { label: "Situação cadastral", value: [], name: "situacao", tipo: "multiselect", catalog: "njur" },
          {
            label: "Preferências", value: [], tipo: "checkbox", name: "preferencias",
            options: [
              { text: "100% telefones", value: "telefones" }, { text: "100% e-mails", value: "emails" },
              { text: "100% matrizes", value: "matrizes" }, { text: "100% filiais", value: "filiais" }
            ]
          }
        ],
        accordions: [
          { titulo: "Enriquecimento", heading: "headingEnriquecimento", alvo: "#collapseEnriquecimento",
            ariacontrols: "collapseEnriquecimento", idcontent: "collapseEnriquecimento" },
          { titulo: "Formulário", heading: "headingFormulario", alvo: "#collapseFormulario",
            ariacontrols: "collapseEnriquecimento", idcontent: "collapseFormulario" }
        ]
      }
    },
    methods: {
      habilitarCidade(request){
        this.ufSelecionado = request.data[0].parametros.ufform
        if (this.ufSelecionado.length > 0) {
          this.inputsPf[2].disabled = false
          this.inputsPj[2].disabled = false
        }
        else{
          this.inputsPf[2].disabled = true
          this.inputsPj[2].disabled = true
        }
      },
      requisicaoGraficos(request){
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/chart', request, {//resultados dos gráficos
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.$emit('enviarInfoGrafico', response.data.data, request)
        })
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/count', request, {//total de resultados
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.$emit('enviarCount', response.data.data.total)
        })
        //requisicao para checar se algum parametro está sendo enviado
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/validRequest', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.data.status == 1) {
            this.botaoDisabled = false
          }
          else if (response.data.status == 3){
            this.botaoDisabled = true
          }
        })
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
      parametrosGraficos(){
        if (this.path == '/avancadapj') {//pesquisa avançada PJ
          var request = {
            data: [
              {
                parametros: {
                  razao: this.inputsPj[0].value, ufform: this.inputsPj[1].value, cidadeform: this.inputsPj[2].value,
                  cep: this.inputsPj[3].value, cnaeform: this.inputsPj[4].value, porte: this.inputsPj[5].value,
                  funcionariosform: [this.inputsPj[6].value, this.inputsPj[7].value],
                  faturamentoform: [this.inputsPj[8].value, this.inputsPj[9].value],
                  situacaoCadastral: this.inputsPj[10].value
                },
                filtros: { }
              }
            ],
            preferencias: [this.inputsPj[11].value], tipoPesquisa: this.tipoPesquisa, token: this.token
          }
        }
        else{//pesquisa avançada PF
          var request = {
            data: [
              {
                parametros: {
                  nomeform: this.inputsPf[0].value, ufform: this.inputsPf[1].value, cidadeform: this.inputsPf[2].value,
                  cep: this.inputsPf[3].value, escolaridadeform: this.inputsPf[4].value, cboform: this.inputsPf[5].value,
                  sexoform: this.inputsPf[6].value, idadeform: [this.inputsPf[7].value, this.inputsPf[8].value],
                  rendaform: [this.inputsPf[9].value, this.inputsPf[10].value]
                },
                filtros: { }
              }
            ],
            preferencias: [ ], tipoPesquisa: this.tipoPesquisa, token: this.token
          }
        }
        this.requisicaoGraficos(request)
        this.habilitarCidade(request)
      },
      gerarPesquisa(pesquisa){
        this.pesquisa = pesquisa
        this.pesquisaValida()
        this.$emit('geraPesquisa', this.message, this.icone, this.isValida, this.pesquisa, true)
      },
      pesquisaInvalida(){
        this.message = 'Preencha todos os campos corretamente'
        this.icone = 'text-danger far fa-lg fa-times-circle'
        this.isValida = false
      },
      pesquisaValida(){
        this.message = 'O valor pesquisado de '+ this.campoSelecionado + ' é: ' + this.dadoPesquisa
        this.icone = null
        this.isValida = true
      },
      receberPesquisaAnterior(){
        if (this.parametrosAnterioresGraficos.tipoPesquisa == 'PF') {
          this.inputsPf[0].value = this.parametrosAnterioresGraficos.data[0].parametros.nomeform
          this.inputsPf[1].value = this.parametrosAnterioresGraficos.data[0].parametros.ufform
          this.inputsPf[2].value = this.parametrosAnterioresGraficos.data[0].parametros.cidadeform
          this.inputsPf[3].value = this.parametrosAnterioresGraficos.data[0].parametros.cep
          this.inputsPf[4].value = this.parametrosAnterioresGraficos.data[0].parametros.escolaridadeform
          this.inputsPf[5].value = this.parametrosAnterioresGraficos.data[0].parametros.cboform
          this.inputsPf[6].value = this.parametrosAnterioresGraficos.data[0].parametros.sexoform
          this.inputsPf[7].value = this.parametrosAnterioresGraficos.data[0].parametros.idadeform[0]
          this.inputsPf[8].value = this.parametrosAnterioresGraficos.data[0].parametros.idadeform[1]
          this.inputsPf[9].value = this.parametrosAnterioresGraficos.data[0].parametros.rendaform[0]
          this.inputsPf[10].value = this.parametrosAnterioresGraficos.data[0].parametros.rendaform[1]
        }
        else{
          this.inputsPj[0].value = this.parametrosAnterioresGraficos.data[0].parametros.razao
          this.inputsPj[1].value = this.parametrosAnterioresGraficos.data[0].parametros.ufform
          this.inputsPj[2].value = this.parametrosAnterioresGraficos.data[0].parametros.cidadeform
          this.inputsPj[3].value = this.parametrosAnterioresGraficos.data[0].parametros.cep
          this.inputsPj[4].value = this.parametrosAnterioresGraficos.data[0].parametros.cnaeform
          this.inputsPj[5].value = this.parametrosAnterioresGraficos.data[0].parametros.porte
          this.inputsPj[6].value = this.parametrosAnterioresGraficos.data[0].parametros.funcionariosform[0]
          this.inputsPj[7].value = this.parametrosAnterioresGraficos.data[0].parametros.funcionariosform[1]
          this.inputsPj[8].value = this.parametrosAnterioresGraficos.data[0].parametros.faturamentoform[0]
          this.inputsPj[9].value = this.parametrosAnterioresGraficos.data[0].parametros.faturamentoform[1]
          this.inputsPj[10].value = this.parametrosAnterioresGraficos.data[0].parametros.situacaoCadastral
        }
      }
    },
    mounted(){
      this.path = this.$route.path
      if (this.path == '/avancadapj'){
        this.tipoPesquisa = 'PJ'
      }
      else{
        this.tipoPesquisa = 'PF'
      }
      this.token = sessionStorage.getItem('token')
      this.parametrosGraficoInicial()
    },
    created(){
      if (this.parametrosAnterioresGraficos != undefined){
        this.receberPesquisaAnterior()
      }
    }
  }
</script>

<style lang="scss">
  .form-pesquisa{
    .nav-form{
      .nav-tabs{
        .nav-item{
          width: 100%;
          .nav-link{
            font-size: 0.8rem;
            cursor: default;
          }
        }
      }
    }
  }
</style>
