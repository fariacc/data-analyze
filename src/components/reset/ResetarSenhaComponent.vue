<template>
  <div class="row m-0 resetar-senha">
    <banner-component></banner-component>
    <div class="col-md-8 col-lg-8">
      <div class="conta">
        <h2 class="text-center">Recuperação de senha</h2>
        <p class="fs-title mb-5">Insira a nova senha abaixo</p>
        <resetar-senha-form-component></resetar-senha-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import ResetarSenhaFormComponent from './ResetarSenhaFormComponent.vue'
  export default {
    name: 'resetar-senha-component',
    components: {
      BannerComponent, ResetarSenhaFormComponent
    },
    created(){
      var token = sessionStorage.getItem('token') //pega a info de "usuario"
      if (token){
        this.$router.push('/home')//se o usuario está logado e tenta acessar a pagina de registro, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resetar-senha{
    .conta{
      width: 45%;
      height: 60%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      h2 {
        color: #41698E;
        font-weight: 900;
      }
    }
  }
</style>
