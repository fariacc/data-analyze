<template>
  <form class="login-form-component form-row mb-0">
    <div class="col-md-12 col-lg-12">
      <div class="form-group">
        <label class="control-label" for="cpf">CPF</label>
        <the-mask class="form-control" v-model="usuario.cpf" :mask="['###.###.###-##']" required/>
      </div>
      <div class="form-group">
        <label class="control-label" for="senha">Senha</label>
        <input-component classeinput="form-control" tipoinput="password" v-model="usuario.senha"></input-component>
      </div>
      <div class="form-group">
        <router-link to="/reset" class="mr-auto reset">Esqueci minha senha</router-link>
      </div>
      <div class="form-group text-center">
        <button-component @click.native.prevent="login()" tipo="submit" rotulo="Entrar" classe="btn btn-default"></button-component>
      </div>
      <div class="form-group text-center">
        <p>Não possui conta?<router-link to="/register" class="link"><strong> Cadastre-se</strong></router-link></p>
      </div>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Login</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import CPF from 'gerador-validador-cpf'
  import InputComponent from '../shared/inputs/InputComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import ModalComponent from '../shared/utils/ModalComponent.vue'
  export default {
    name: 'login-form-component',
    components: {
      InputComponent, ButtonComponent, PComponent, ModalComponent
    },
    data () {
      return {
        usuario: { cpf: null, senha: null }, showModal: null, message: null
      }
    },
    methods: {
      login () {
        if ((CPF.validate(this.usuario.cpf) == true) && this.usuario.senha) {
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
          sessionStorage.setItem('token', '12345')
          this.$router.push('/home') // redireciona o usuário pra página principal
        }
        else {
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
  .login-form-component{
    .reset{
      font-size: 0.9rem;
      color: #41698E;
      &:hover{
        color: #213345;
        text-decoration: none;
      }
    }
    .link{
      color: #41698E;
      &:hover{
        color: #213345!important;
        text-decoration: none!important;
      }
    }
  }
</style>
