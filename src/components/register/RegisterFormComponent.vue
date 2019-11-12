<template>
  <form class="register-form-component form-row mb-0" @submit="register(usuario.cpf, $event)">
    <div class="form-group col-md-12 col-lg-12">
      <label class="control-label" for="cpf">CPF</label>
      <the-mask class="form-control" v-model="usuario.cpf" @change.native="validarCPF(usuario.cpf, $event)" name="cpf" :mask="['###.###.###-##']" required/>
      <span class="invalido text-danger">{{ msgValidacao }}</span>
    </div>
    <div class="form-group col-md-12 col-lg-12">
      <label class="control-label" for="nome">Nome</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.nome"></input-component>
    </div>
    <div class="form-group col-md-4 col-lg-4">
      <label class="control-label" for="telefone">Telefone</label>
      <the-mask class="form-control" type="tel" v-model="usuario.telefone" name="telefone" :mask="['(##) #####-####']" required/>
    </div>
    <div class="form-group col-md-8 col-lg-8">
      <label class="control-label" for="email">E-mail</label>
      <input-component classeinput="form-control" tipoinput="email" v-model="usuario.email"></input-component>
    </div>
    <div class="form-group col-md-6 col-lg-6">
      <label class="control-label" for="senha">Senha</label>
      <input-component classeinput="form-control" tipoinput="password" v-model="usuario.senha"></input-component>
    </div>
    <div class="form-group col-md-6 col-lg-6">
      <label class="control-label" for="senhaConfirm">Confirmar senha</label>
      <input-component classeinput="form-control" tipoinput="password" v-model="usuario.senhaConfirm"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Salvar" classe="btn btn-default"></button-component>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Crie a sua conta</h3>
      <h5 slot="body" class="text-center">
        <i :class="icone" aria-hidden="true"></i> {{message}}
      </h5>
      <div slot="footer" v-show="irLogin == 1">
        <button tipo="button" class="btn btn-default" @click="irParaLogin">Acessar conta</button>
      </div>
    </modal-component>
  </form>
</template>

<script>
  import axios from 'axios';
  import CPF from 'gerador-validador-cpf'
  import InputComponent from '../shared/inputs/InputComponent.vue'
  import ModalComponent from '../shared/utils/ModalComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'register-form-component',
    components: {
      InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        usuario: { cpf: null, nome: null, telefone: null, email: null, senha: null, senhaConfirm: null },
        msgValidacao: '', showModal: false, icone: null, message: null, irLogin: null
      }
    },
    methods: {
      irParaLogin(){
        this.showModal = false
        this.$router.push('/login')
      },
      validarCPF (cpf, event){
        if (!CPF.validate(cpf)){
          event.preventDefault()
          this.msgValidacao = 'Insira um CPF válido'
        }
        else{
          this.msgValidacao = ''
          return true;
        }
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      register (cpf, event){
        if ((CPF.validate(this.usuario.cpf) == true) && this.usuario.nome && this.usuario.telefone && this.validEmail(this.usuario.email) && (this.usuario.senha == this.usuario.senhaConfirm)) {
          this.showModal = true
          this.message = 'Registro feito com sucesso'
          this.icone = 'text-success far fa-lg fa-check-circle'
          this.irLogin = 1
        }
        else{
          this.irLogin = 0
          this.showModal = true
          this.message = 'Preencha todos os campos corretamente'
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
        event.preventDefault()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-form-component{
    .invalido{
      font-size: 0.9rem;
    }
  }
</style>
