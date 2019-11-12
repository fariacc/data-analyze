<template>
  <form class="text-center">
    <div class="row">
      <div :class="input.classe" v-for="(input, key) in inputs">
        <label labelinput="dadoPesquisa" class="control-label text-left">{{input.label}}</label>
        <input-component v-if="input.tipo == 'text'" :disabled="input.disabled" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value" required></input-component>
        <the-mask v-else-if="input.tipo == 'cnpj'" class="form-control" v-model="input.value" mask="##.###.###/####-##" @change.native="validarDado(input.value, input.tipo)" required/>
        <multiselect-component v-else-if="input.tipo == 'multiselect'" :options="input.options" :input="input" required :multiple="false"></multiselect-component>
        <the-mask v-else-if="input.tipo == 'telefone'" class="form-control" v-model="input.value" mask="(##) #####-####" @change.native="validarDado(input.value, input.tipo)" required/>
        <the-mask v-else-if="input.tipo == 'cep'" class="form-control" v-model="input.value" mask="#####-###" @change.native="validarDado(input.value, input.tipo)" required/>
      </div>
    </div>
    <span class="text-danger">{{ msgValidacao }}</span>
    <strong><checkbox-component class="text-left" v-model="termosAceite[0].value" :input="termosAceite[0]"></checkbox-component></strong>
    <button type="button" class="btn btn-default box-shadow mx-auto">
      <i class="fas fa-check-circle"></i> Confirmar
    </button>
  </form>
</template>

<script>
  import InputComponent from '../../../shared/inputs/InputComponent.vue'
  import MultiselectComponent from '../../../shared/inputs/MultiselectComponent.vue'
  import CheckboxComponent from '../../../shared/inputs/CheckboxComponent.vue'
  export default {
    name: 'informacoes-pagamentos',
    components: {
      InputComponent, MultiselectComponent, CheckboxComponent
    },
    data(){
      return{
        msgValidacao: null,
        termosAceite: [
          { value: [], tipo: "checkbox", name: "termos",
            options: [ { text: "Li e aceito os termos de uso", value: true } ]
          }
        ],
        inputs: [
          { label: "Razão social", value: null, tipo: "text", name: "razao", classe: "form-group col-sm-12 col-md-6 col-lg-4" },
          { label: "CNPJ", value: null, tipo: "cnpj", name: "cnpj", classe: "form-group col-sm-12 col-md-3 col-lg-2" },
          { label: "Dia do vencimento", value: null, name: "vencimento", tipo: "multiselect",
            options: [ 5, 15, 25 ], classe: "form-group col-sm-12 col-md-3 col-lg-2" },
          { label: "Telefone", value: null, tipo: "telefone", name: "telefone", classe: "form-group col-sm-12 col-md-3 col-lg-2" },
          { label: "CEP", value: null, tipo: "cep", name: "cep", classe: "form-group col-sm-12 col-md-3 col-lg-2" },
          { label: "Estado", value: null, name: "estado", tipo: "multiselect",
            options: [ 'Mato Grosso do Sul/MS', 'Paraná/PR', 'Rio de Janeiro/RJ' ], classe: "form-group col-sm-12 col-md-6 col-lg-3" },
          { label: "Cidade", value: null, name: "cidade", tipo: "multiselect",
            options: [ 'Campinas', 'Curitiba', 'Niterói' ], classe: "form-group col-sm-12 col-md-6 col-lg-3" },
          { label: "Endereço", value: null, tipo: "text", name: "endereco", classe: "form-group col-sm-12 col-md-6 col-lg-3" },
          { label: "Número", value: null, tipo: "text", name: "numero", classe: "form-group col-sm-12 col-md-3 col-lg-1" },
          { label: "Complemento", value: null, tipo: "text", name: "complemento", classe: "form-group col-sm-12 col-md-3 col-lg-2" }
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
      validarDado (dado, campo){
        if (campo == 'cnpj'){
          if (!this.isCNPJ(dado)){
            this.msgValidacao = 'Insira um CNPJ válido'
          }
          else{
            this.msgValidacao = null
          }
        }
        else if (campo == 'cep'){
          if (dado.length != 8){
            this.msgValidacao = 'Insira um CEP válido'
          }
          else{
            this.msgValidacao = null
          }
        }
        else if (campo == 'telefone'){
          if (dado.length < 10){
            this.msgValidacao = 'Insira um telefone válido'
          }
          else{
            this.msgValidacao = null
          }
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
