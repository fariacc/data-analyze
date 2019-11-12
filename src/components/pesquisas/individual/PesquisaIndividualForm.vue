<template>
  <div class="form-pesquisa box-shadow mb-3">
    <ul-component v-if="path == '/individualpf'" classediv="nav-form" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsPf" :item="tabsPf" :items="tabsPf"></ul-component>
    <ul-component v-else classediv="nav-form" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsPj" :item="tabsPj" :items="tabsPj"></ul-component>
    <form class="card tab-content text-center">
      <div class="tab-pane fade show active" id="pesquisaIndividual">
        <radio-component v-if="path == '/individualpf'" @input="pegarCampo" labelradio="Buscar por:" :opcoes="opcoesPFIndividual" :opcao="opcoesPFIndividual" name="campoIndividual"></radio-component>
        <radio-component v-else @input="pegarCampo" labelradio="Buscar por:" :opcoes="opcoesPJIndividual" :opcao="opcoesPJIndividual" name="campoIndividual"></radio-component>
        <div class="form-group col-md-12 col-lg-12" v-if="opcoesPJIndividual.value != null || opcoesPFIndividual.value != null">
          <label labelinput="dadoPesquisa" class="control-label text-left">Informação:</label>
          <!-- radio buttons de PF -->
          <the-mask v-if="opcoesPFIndividual.value == 'cpf'" class="form-control" v-model="dadoPesquisa[0].cpf" name="cpf"
          mask="###.###.###-##" @change.native="validarDado(dadoPesquisa[0].cpf, campoSelecionado)"/>
          <the-mask v-else-if="opcoesPFIndividual.value == 'cep'" class="form-control" v-model="dadoPesquisa[0].cep" name="cep"
          mask="#####-###" @change.native="validarDado(dadoPesquisa[0].cep, campoSelecionado)"/>
          <the-mask v-else-if="opcoesPFIndividual.value == 'telefone'" class="form-control" v-model="dadoPesquisa[0].telefone"
          name="telefone" mask="##-#########" @change.native="validarDado(dadoPesquisa[0].telefone, campoSelecionado)"/>
          <!-- radio buttons de PJ -->
          <the-mask v-else-if="opcoesPJIndividual.value == 'cnpj'" class="form-control" v-model="dadoPesquisa[0].cnpj" name="cnpj"
          mask="##.###.###/####-##" @change.native="validarDado(dadoPesquisa[0].cnpj, campoSelecionado)"/>
          <the-mask v-else-if="opcoesPJIndividual.value == 'cep'" class="form-control" v-model="dadoPesquisa[0].cep" name="cep"
          mask="#####-###" @change.native="validarDado(dadoPesquisa[0].cep, campoSelecionado)"/>
          <the-mask v-else-if="opcoesPJIndividual.value == 'telefone'" class="form-control" v-model="dadoPesquisa[0].telefone"
          name="telefone" mask="##-#########" @change.native="validarDado(dadoPesquisa[0].telefone, campoSelecionado)"/>
          <input-component v-else classeinput="form-control" tipoinput="text" v-model="dadoPesquisa[0].nomechave"
          @change.native="validarDado(dadoPesquisa[0].nomechave, campoSelecionado)"></input-component>
          <span class="text-left text-danger">{{ msgValidacao }}</span>
        </div>
      </div>
      <div class="container-fluid">
        <button-component :disabled="botaoDisabled" tipo="button" rotulo="Pesquisar" classe="btn btn-default btn-inteiro"
        @click.native="parametrosListagem"></button-component>
      </div>
    </form>
  </div>
</template>

<script>
  import CPF from 'gerador-validador-cpf'
  import RadioComponent from '../../shared/inputs/RadioComponent.vue'
  import InputComponent from '../../shared/inputs/InputComponent.vue'
  import ButtonComponent from '../../shared/ButtonComponent.vue'
  import UlComponent from '../../shared/utils/UlComponent.vue'
  export default {
    name: 'pesquisa-individual-form',
    props: { path: String, token: String, tipoPesquisa: String },
    components: {
      RadioComponent, InputComponent, ButtonComponent, UlComponent
    },
    data(){
      return{
        dadoPesquisa: [
          { cpf: null, cep: null, telefone: null, cnpj: null, nomechave: null }
        ],
        campoSelecionado: null, msgValidacao: null, botaoDisabled: true, completed: null,
        tabsPf: [ { nome: 'Pesquisa individual PF', href: '#pesquisaIndividual', ariacontrols: 'pesquisaIndividual', classea: 'nav-link show active' } ],
        tabsPj: [ { nome: 'Pesquisa individual PJ', href: '#pesquisaIndividual', ariacontrols: 'pesquisaIndividual', classea: 'nav-link show active' } ],
        opcoesPFIndividual: [
          { label: "CPF", value: "cpf", checked: false }, { label: "CEP", value: "cep", checked: false },
          { label: "Nome", value: "nome", checked: false }, { label: "Telefone", value: "telefone", checked: false }
        ],
        opcoesPJIndividual: [
          { label: "CNPJ", value: "cnpj", checked: false }, { label: "CEP", value: "cep", checked: false },
          { label: "Palavra chave", value: "razao", checked: false }, { label: "Telefone", value: "telefone", checked: false }
        ]
      }
    },
    methods: {
      isCNPJ(cnpj) {//verifica se o CNPJ é válido ou não
        var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        if ((cnpj = cnpj.replace(/[^\d]/g,"")).length != 14 || /0{14}/.test(cnpj)){
          return false;
        }
        for (var i = 0, n = 0; i < 12;){
          n += cnpj[i] * b[++i]
        }
        if (cnpj[12] != (((n %= 11) < 2) ? 0 : 11 - n)){
          return false;
        }
        for (var i = 0, n = 0; i <= 12;){
          n += cnpj[i] * b[i++]
        }
        if (cnpj[13] != (((n %= 11) < 2) ? 0 : 11 - n)){
          return false;
        }
        return true;
      },
      pegarCampo(selecao){//pega qual opção de pesquisa foi selecionada
        this.msgValidacao = null
        this.campoSelecionado = selecao
        this.botaoDisabled = true
      },
      validarDado (dado, campo){//emite um alerta se o dado pesquisado for inválido
        if (campo == 'cpf'){
          if (!CPF.validate(dado)){
            this.msgValidacao = 'Insira um CPF válido'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cep = null
            this.dadoPesquisa[0].telefone = null
            this.dadoPesquisa[0].nomechave = null
          }
        }
        else if (campo == 'cnpj'){
          if (!this.isCNPJ(dado)){
            this.msgValidacao = 'Insira um CNPJ válido'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cep = null
            this.dadoPesquisa[0].telefone = null
            this.dadoPesquisa[0].nomechave = null
          }
        }
        else if (campo == 'cep'){
          if (dado.length != 8){
            this.msgValidacao = 'Insira um CEP válido'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cpf = null
            this.dadoPesquisa[0].cnpj = null
            this.dadoPesquisa[0].telefone = null
            this.dadoPesquisa[0].nomechave = null
          }
        }
        else if (campo == 'telefone'){
          if (dado.length < 10){
            this.msgValidacao = 'Insira um telefone válido'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cpf = null
            this.dadoPesquisa[0].cnpj = null
            this.dadoPesquisa[0].cep = null
            this.dadoPesquisa[0].nomechave = null
          }
        }
        else if (campo == 'nome'){
          if (dado.length < 2){
            this.msgValidacao = 'Insira um nome válido'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cpf = null
            this.dadoPesquisa[0].cnpj = null
            this.dadoPesquisa[0].telefone = null
            this.dadoPesquisa[0].cep = null
          }
        }
        else{
          if (dado.length < 2){
            this.msgValidacao = 'Insira uma palavra chave válida'
            this.botaoDisabled = true
          }
          else{
            this.msgValidacao = null
            this.botaoDisabled = false
            this.dadoPesquisa[0].cpf = null
            this.dadoPesquisa[0].cnpj = null
            this.dadoPesquisa[0].telefone = null
            this.dadoPesquisa[0].cep = null
          }
        }
      },
      parametrosListagem(){
        if (this.path == '/individualpf') {
          var request = {
            data: [
              {
                parametros: {
                  nomeform: [this.dadoPesquisa[0].nomechave], cep: [this.dadoPesquisa[0].cep],
                  cpf: [this.dadoPesquisa[0].cpf], telefone: [this.dadoPesquisa[0].telefone]
                },
                filtros: { }
              }
            ],
            indice: 9000, produto: 'Leads', preferencias: { }, tipoPesquisa: this.tipoPesquisa, token: this.token
          }
        }
        else{
          var request = {
            data: [
              {
                parametros: {
                  razao: [this.dadoPesquisa[0].nomechave], cep: [this.dadoPesquisa[0].cep],
                  cnpj: [this.dadoPesquisa[0].cnpj], telefone: [this.dadoPesquisa[0].telefone]
                },
                filtros: { }
              }
            ],
            indice: 9000, produto: 'Leads', preferencias: { }, tipoPesquisa: this.tipoPesquisa, token: this.token
          }
        }
        this.$emit('enviarCompleted', false)
        this.requisicaoListagem(request)
      },
      requisicaoListagem(request){
        this.$http.post('https://samm.bankscore.com.br/rest/api/new/prospect', request, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.$emit('enviarLeads', response.data.data)
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
