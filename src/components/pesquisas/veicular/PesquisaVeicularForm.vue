<template>
  <div class="form-pesquisa-veicular box-shadow">
    <ul-component classediv="nav-form" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabs" :item="tabs" :items="tabs"></ul-component>
    <form class="card tab-content text-center">
      <div class="tab-pane fade show active" id="pesquisaDadosVeiculo" role="tabpanel">
        <radio-component @pegaCampo="pegarCampo" labelradio="Buscar por:" :opcoes="opcoesVeicular" :opcao="opcoesVeicular" name="campoVeicular"></radio-component>
        <div class="form-group col-md-12 col-lg-12" v-if="opcoesVeicular.value != null">
          <label labelinput="dadoPesquisa" class="control-label text-left">Informação:</label>
          <the-mask v-if="opcoesVeicular.value == 'placa'" class="form-control" v-model="dadoPesquisa" name="placa" mask="AAA-####" @change.native="validarDado(dadoPesquisa, campoSelecionado)"/>
          <the-mask v-else="opcoesVeicular.value == 'chassi'" class="form-control" v-model="dadoPesquisa" name="chassi" mask="XXXXXXXXXXXXXXXXX" @change.native="validarDado(dadoPesquisa, campoSelecionado)"/>
          <span class="text-left text-danger">{{ msgValidacao }}</span>
        </div>
      </div>
      <div class="tab-pane fade" id="pesquisaDadosProprietario" role="tabpanel">
        <radio-component @pegaCampo="pegarCampo" labelradio="Buscar por:" :opcoes="opcoesProprietario" :opcao="opcoesProprietario" name="campoProprietario"></radio-component>
        <div class="form-group col-md-12 col-lg-12" v-if="opcoesProprietario.value != null">
          <label labelinput="dadoPesquisa" class="control-label text-left">Informação:</label>
          <the-mask v-if="opcoesProprietario.value == 'cpf'" class="form-control" v-model="dadoPesquisa" name="cpf" mask="###.###.###-##" @change.native="validarDado(dadoPesquisa, campoSelecionado)"/>
          <the-mask v-else="opcoesProprietario.value == 'cnpj'" class="form-control" v-model="dadoPesquisa" name="cnpj" mask="##.###.###/####-##" @change.native="validarDado(dadoPesquisa, campoSelecionado)"/>
          <span class="text-left text-danger">{{ msgValidacao }}</span>
        </div>
      </div>
      <div class="container-fluid">
        <button-component tipo="button" rotulo="Pesquisa Online" classe="btn btn-default btn-inteiro" @click.native="gerarRelatorio('online')"></button-component>
        <button-component tipo="button" rotulo="Pesquisa Offline" classe="btn btn-default btn-inteiro" @click.native="gerarRelatorio('offline')"></button-component>
      </div>
    </form>
  </div>
</template>

<script>
  import RadioComponent from '../../shared/inputs/RadioComponent.vue'
  import InputComponent from '../../shared/inputs/InputComponent.vue'
  import ButtonComponent from '../../shared/ButtonComponent.vue'
  import UlComponent from '../../shared/utils/UlComponent.vue'
  import CPF from 'gerador-validador-cpf'
  export default {
    name: 'pesquisa-veicular-form',
    components: {
      RadioComponent, InputComponent, ButtonComponent, UlComponent
    },
    data(){
      return{
        dadoPesquisa: null, campoSelecionado: null, showModal: false, preco: null, msgValidacao: null, isValida: null,
        opcoesVeicular: [
          { label: "Placa", value: "placa", checked: false },
          { label: "Chassi", value: "chassi", checked: false }
        ],
        opcoesProprietario: [
          { label: "CPF", value: "cpf", checked: false },
          { label: "CNPJ", value: "cnpj", checked: false }
        ],
        tabs: [
          { nome: 'Dados veiculares', href: '#pesquisaDadosVeiculo', ariacontrols: 'pesquisaDadosVeiculo', classea: 'nav-link show active' },
          { nome: 'Dados do proprietário', href: '#pesquisaDadosProprietario', ariacontrols: 'pesquisaDadosProprietario', classea: 'nav-link show' }
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
      validarDado (dado, campo){//emite um alerta se o CPF ou CNPJ forem inválidos
        if (campo == 'cpf'){
          if (!CPF.validate(dado)){
            this.msgValidacao = 'Insira um CPF válido'
            this.pesquisaInvalida()
          }
          else{
            this.msgValidacao = null
            this.pesquisaValida(11.00)
          }
        }
        else if (campo == 'cnpj'){
          if (!this.isCNPJ(dado)){
            this.msgValidacao = 'Insira um CNPJ válido'
            this.pesquisaInvalida()
          }
          else{
            this.msgValidacao = null
            this.pesquisaValida(11.00)
          }
        }
        else if (campo == 'chassi'){
          if (dado.length != 17){
            this.msgValidacao = 'Insira um chassi válido'
            this.pesquisaInvalida()
          }
          else{
            this.msgValidacao = null
            this.pesquisaValida(25.00)
          }
        }
        else{
          if (dado.length != 7){
            this.msgValidacao = 'Insira uma placa válida'
            this.pesquisaInvalida()
          }
          else{
            this.msgValidacao = null
            this.pesquisaValida(25.00)
          }
        }
      },
      pegarCampo(selecao){//pega qual opção de pesquisa foi selecionada
        this.msgValidacao = null
        this.dadoPesquisa = null
        this.pesquisaInvalida()
        this.campoSelecionado = selecao
      },
      pesquisaInvalida(){
        this.message = 'Preencha todos os campos corretamente'
        this.icone = 'text-danger far fa-lg fa-times-circle'
        this.isValida = 'invalida'
        this.preco = null
      },
      pesquisaValida(preco){
        this.message = 'O valor pesquisado de '+ this.campoSelecionado + ' é: ' + this.dadoPesquisa
        this.isValida = 'valida'
        this.icone = null
        this.msgValidacao = null
        this.preco = preco
      },
      gerarRelatorio(validade){
        if (!this.campoSelecionado && !this.dadoPesquisa) {
          this.pesquisaInvalida()
        }
        if (validade == 'online'){
          this.$emit('abreModal', this.message, this.icone, validade + this.isValida, this.preco)
        }
        else if (validade == 'offline'){
          this.$emit('abreModal', this.message, this.icone, validade + this.isValida, 0.00)
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-pesquisa-veicular{
    .nav-tabs{
      .nav-item{
        width: 50%;
        font-size: 0.75rem;
      }
    }
    .tab-pane{
      label{
        font-weight: bold;
        font-size: 0.85rem;
      }
    }
    .card.tab-content{
      border-top: none!important;
      border-top-left-radius: 0!important;
      border-top-right-radius: 0!important;
    }
  }
</style>
