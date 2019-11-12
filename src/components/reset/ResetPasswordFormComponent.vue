<template>
  <form class="form-row mb-0 reset-password-form" @submit="recuperarSenha">
    <div class="form-group col-md-12 col-lg-12" v-for="input in inputs">
      <label class="control-label">{{input.label}}</label>
      <input-component v-if="input.tipo == 'email'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value" @change.native="validEmail(input.value, $event)"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Recuperar senha" classe="btn btn-default"></button-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center mb-0">
      <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Recuperação de Senha</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import axios from 'axios'
  import ModalComponent from '../shared/utils/ModalComponent.vue'
  import InputComponent from '../shared/inputs/InputComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'reset-password-form-component',
    components: {
      InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        showModal: false, message: null, icone: null,
        inputs: [
          { label: "E-mail", value: null, tipo: "email", name: "email", classe: "form-group col-12" },
        ]
      }
    },
    methods: {
      validEmail (email, event) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)){
          event.preventDefault()
          this.msgValidacao = 'Insira um e-mail válido'
        }
        else{
          this.msgValidacao = ''
          return true
        }
      },
      recuperarSenha (event){
        if (this.validEmail(this.inputs[0].value)) {
          axios.post('https://samm.bankscore.com.br/rest/api/sendResetLink', { //aqui põe a url da API
            email: this.inputs[0].value,
          })
          .then(response => {
            this.showModal = true
            this.message = response.data.message
            if (response.data.status == true){
              this.icone = 'text-success far fa-lg fa-check-circle'
            }
            else if (response.data.status == false){
              this.icone = 'text-danger far fa-lg fa-times-circle'
            }
          })
        }
        event.preventDefault()
      }
    }
  }
</script>

<style lang="scss">
  .reset-password-form{
    .link{
      color: #41698E;
      &:hover{
        color: #213345!important;
        text-decoration: none!important;
      }
    }
  }
</style>
