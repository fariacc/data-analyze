<template>
  <modal-component @close="$emit('showModal', false)">
    <h3 slot="header" v-if="path == '/avancadapf'">Pesquisa Avançada PF</h3>
    <h3 slot="header" v-else>Pesquisa Avançada PJ</h3>
    <div slot="body" v-if="completed == true">
      <loading-component></loading-component>
    </div>
    <div slot="body" v-else class="text-center">
      <div class="row" v-if="validade && step == 1">
        <div class="col-sm-12 col-md-12 col-lg-6 my-auto">
          <form class="text-left">
            <label class="control-label text-left"><strong>Linhas</strong></label>
            <vue-numeric v-if="pesquisa == 'interativo' && validade" class="form-control" :min="1" :max="100000" separator="." v-model="linhasPesquisa[0].consumir" @input="calcularPesquisa"></vue-numeric>
            <vue-numeric v-else-if="pesquisa == 'leads' && validade" class="form-control" :min="1" :max="1000" separator="." v-model="linhasPesquisa[0].consumir" @input="calcularPesquisa"></vue-numeric>
          </form>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <h6 class="mb-1 pb-4 px-1">
            <span class="text-info float-left">Total de linhas disponíveis</span>
            <strong class="text-info float-right">{{linhasPesquisa[0].disponiveis}}</strong>
          </h6>
          <h6 class="mb-1 pb-4 px-1">
            <span class="text-danger float-left">Total de linhas excedidas</span>
            <strong class="text-danger float-right">{{linhasPesquisa[0].excedidas}}</strong>
          </h6>
          <div class="price-info pt-1">
            <h6 class="text-light mb-1 pb-4 px-1">
              <span class="float-left mb-1 pb-4">Preço consulta</span>
              <strong class="float-right">{{linhasPesquisa[0].preco}}</strong>
            </h6>
          </div>
        </div>
      </div>
      <div class="row" v-else-if="validade && step == 2">
        <div class="col-12">
          <checkbox-component v-if="path == '/avancadapf'" :input="input" v-for="(input, key) in inputsLeadsPf"
          @input="$emit('enviarFiltros', inputsLeadsPf[0].value)"></checkbox-component>
          <checkbox-component v-else-if="path == '/avancadapj'" :input="input" v-for="(input, key) in inputsLeadsPj"
          @input="$emit('enviarFiltros', inputsLeadsPj[0].value)"></checkbox-component>
        </div>
      </div>
      <div v-else-if="!validade">
        <p><i :class="icone" aria-hidden="true"></i><strong> {{texto}}</strong></p>
      </div>
    </div>
    <h5 slot="footer" v-if="pesquisa == 'leads' && completed == null">
      <button v-if="step == 1" tipo="button" class="btn btn-default-2" @click="$emit('showModal', false)">Cancelar</button>
      <button v-else-if="step == 2" tipo="button" class="btn btn-default-2" @click="step = 1">Anterior</button>
      <button v-if="step == 1" tipo="button" class="btn btn-default" @click="step = 2">Continuar</button>
      <button v-else-if="path == '/avancadapf' && validade" tipo="button" class="btn btn-default" @click="gerarPesquisa('pesquisapf', $event)">Confirmar</button>
      <button v-else-if="path == '/avancadapj' && validade" tipo="button" class="btn btn-default" @click="gerarPesquisa('pesquisapj', $event)">Confirmar</button>

    </h5>
    <h5 slot="footer" v-else-if="pesquisa == 'interativo' && completed == null">
      <button tipo="button" class="btn btn-default-2" @click="$emit('showModal', false)">Cancelar</button>
      <button v-if="path == '/avancadapf' && validade" tipo="button" class="btn btn-default" @click="gerarPesquisa('pesquisapf', $event)">Confirmar</button>
      <button v-else-if="path == '/avancadapj' && validade" tipo="button" class="btn btn-default" @click="gerarPesquisa('pesquisapj', $event)">Confirmar</button>
    </h5>
  </modal-component>
</template>

<script>
  import LoadingComponent from '../../shared/utils/LoadingComponent.vue'
  import ModalComponent from '../../shared/utils/ModalComponent.vue'
  import InputComponent from '../../shared/inputs/InputComponent.vue'
  import CheckboxComponent from '../../shared/inputs/CheckboxComponent.vue'
  export default {
    name: 'modal-pesquisa-avancada',
    props: { count: Number, pesquisa: String, icone: String, validade: Boolean, path: String },
    components: {
      LoadingComponent, ModalComponent, InputComponent, CheckboxComponent
    },
    data(){
      return{
        step: 1, completed: null,
        linhasPesquisa: [ { consumir: '', disponiveis: 100, excedidas: 0, preco: 0 } ],
        inputsLeadsPf: [
          {
            label: "Filtros", value: [], tipo: "checkbox", name: "filtros",
            options: [
              { text: 'CPF', value: 'cpf' }, { text: 'Nome completo', value: 'nome' }, { text: 'Sexo', value: 'sexo' },
              { text: 'Data de nascimento', value: 'nascimento' }, { text: 'Idade', value: 'idade' },
              { text: 'Endereço', value: 'endereco' }, { text: 'Telefone', value: 'telefone' },
              { text: 'E-mail', value: 'email' }, { text: 'Escolaridade', value: 'escolaridade' },
              { text: 'Profissão', value: 'cbo' },  { text: 'Renda', value: 'renda' },
              { text: 'Classe social', value: 'classesocial' }, { text: 'Nome da mãe', value: 'mae' },
              { text: 'Empresário', value: 'empresario' }
            ]
          }
        ],
        inputsLeadsPj: [
          {
            label: "Filtros", value: [], tipo: "checkbox", name: "filtros",
            options: [
              { text: 'CNPJ', value: 'cnpj' }, { text: 'Razão social', value: 'razao' },
              { text: 'Nome fantasia', value: 'fantasia' }, { text: 'Ramo de atuação', value: 'cnae' },
              { text: 'Faturamento aproximado', value: 'faturamento' }, { text: 'Porte', value: 'porte' },
              { text: 'Número de funcionários', value: 'funcionarios' }, { text: 'Decisores', value: 'decisores' },
              { text: 'Endereço', value: 'endereco' }, { text: 'E-mail', value: 'email' },
              { text: 'Telefone', value: 'telefone' }
            ]
          }
        ]
      }
    },
    methods: {
      formatPercent(value){
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      gerarPesquisa(tipoPesquisa, event){
        this.completed = true
        if (this.pesquisa == 'interativo'){//se é pesquisa do interativo
          if (tipoPesquisa == 'pesquisapf'){
            this.$emit('gerarInterativo', this.linhasPesquisa[0], this.inputsLeadsPf[0].value)
          }
          else{
            this.$emit('gerarInterativo', this.linhasPesquisa[0], this.inputsLeadsPj[0].value)
          }
        }
        else{//se é pesquisa de leads
          if (tipoPesquisa == 'pesquisapf'){
            if (this.inputsLeadsPf[0].value.length != 0) {
              this.$emit('gerarLeads', this.linhasPesquisa[0], this.inputsLeadsPf[0].value)
              this.step = 2
            }
            else{
              event.preventDefault()
            }
          }
          else{
            if (this.inputsLeadsPj[0].value.length != 0) {
              this.$emit('gerarLeads', this.linhasPesquisa[0], this.inputsLeadsPj[0].value)
              this.step = 2
            }
            else{
              event.preventDefault()
            }
          }
        }
      },
      calcularPesquisa(){
        if (this.linhasPesquisa[0].consumir > this.linhasPesquisa[0].disponiveis) {
          this.linhasPesquisa[0].excedidas = (this.linhasPesquisa[0].disponiveis - this.linhasPesquisa[0].consumir)*-1
        }
        else{
          this.linhasPesquisa[0].excedidas = 0
        }
        this.linhasPesquisa[0].preco = this.formatPercent(this.linhasPesquisa[0].excedidas*0.1)
      }
    },
    created(){
      this.linhasPesquisa[0].consumir = this.count
    }
  }
</script>

<style lang="scss">
</style>
