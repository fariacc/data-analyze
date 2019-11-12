<template>
  <form class="text-center filtrar-historico">
    <div class="row">
      <div class="form-group col-sm-12 col-md-3 col-lg-3" v-for="(input, key) in inputs">
        <label labelinput="dadoPesquisa" class="control-label text-left">{{input.label}}</label>
        <input-component v-if="input.tipo == 'text'" :disabled="input.disabled" classeinput="form-control"
        :tipoinput="input.tipo" v-model="input.value"></input-component>
        <radio-component class="mt-3" v-else-if="input.tipo == 'radio'" v-model="input.value" :opcoes="input.options"
        :opcao="input.options" :name="input.name"></radio-component>
        <date-picker-component v-else-if="input.tipo == 'date'" @enviarData="enviaData" v-model="input.value"></date-picker-component>
      </div>
      <div class="col-sm-1 col-md-1 col-lg-1 my-auto">
        <button type="button" class="btn btn-default box-shadow" @click="filtrarHistorico">
          <i class="fas fa-filter"></i> Filtrar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import InputComponent from '../../../shared/inputs/InputComponent.vue'
  import RadioComponent from '../../../shared/inputs/RadioComponent.vue'
  import DatePickerComponent from '../../../shared/utils/DatePickerComponent.vue'
  export default {
    name: 'filtrar-historico-form',
    props: { dadosUsuario: Object, token: String },
    components: {
      InputComponent, RadioComponent, DatePickerComponent
    },
    data(){
      return{
        inputs: [
          { label: "Usuário", value: null, tipo: "text", name: "usuario" },
          {
            label: "Report", value: null, name: "report", tipo: "radio",
            options: [
              { label: "Leads", value: 1 }, { label: "Report PF", value: 2 }, { label: "Report PJ", value: 3 }
            ]
          },
          { label: "Intervalo de tempo", tipo: "date", name: "dataintervalo", value: [ { value: null }, { value: null } ] }
        ]
      }
    },
    methods: {
      enviaData(dataInicial, dataFinal){
        this.inputs[2].value[0].value = dataInicial
        this.inputs[2].value[1].value = dataFinal
      },
      filtrarHistorico(){
        var data = {
          idCompany: this.dadosUsuario.idCompany,
          usuario: this.inputs[0].value,
          dataInicio: this.inputs[2].value[0].value,
          dataFim: this.inputs[2].value[1].value,
          token: this.token
        }
        this.$emit('enviarRequestFiltroHistorico', data)
      }
    },
    watch:{
      token(){},
      dadosUsuario(){}
    }
  }
</script>

<style lang="scss">
  .filtrar-historico{

  }
</style>
