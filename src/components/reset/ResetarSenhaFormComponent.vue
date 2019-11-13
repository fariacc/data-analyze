<template>
  <form class="form-row mb-0 resetar-senha-form" @submit="salvarNovaSenha($event)">
    <div class="form-group col-md-12 col-lg-12" v-for="input in inputs">
      <label class="control-label">{{input.label}}</label>
      <input-component v-if="input.tipo == 'password'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
    </div>
    <span class="invalido text-danger pl-2">{{ msgValidacao }}</span>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Concluir" classe="btn btn-default"></button-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center mb-0">
      <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Redefinição de senha</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import ModalComponent from '../shared/utils/ModalComponent.vue'
  import InputComponent from '../shared/inputs/InputComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'resetar-senha-form-component',
    components: {
      InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        showModal: false, message: null, icone: null, msgValidacao: '',
        inputs: [
          { label: "Nova senha", value: null, tipo: "password", name: "novasenha", classe: "form-group col-12" },
          { label: "Confirme a nova senha", value: null, tipo: "password", name: "novaSenhaConfirm", classe: "form-group col-12" },
        ]
      }
    },
    methods:{
      salvarNovaSenha (event){
        var token = this.$route.query.t
        if ((this.inputs[0].value == this.inputs[1].value) && this.inputs[0].value != null && this.inputs[1].value != null) {
          this.msgValidacao = ''
          this.$http.post('https://linkapi', { //aqui põe a url da API
            novaSenha: this.inputs[0].value,
            token: token
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
        else{
          this.msgValidacao = 'Digite senhas válidas'
        }
        event.preventDefault()
      }
    }
  }
</script>

<style lang="scss">
  .resetar-senha-form{
    .link{
      color: #41698E;
      &:hover{
        color: #213345!important;
        text-decoration: none!important;
      }
    }
  }
</style>
