<template>
  <div class="row m-0 reset-password">
    <banner-component></banner-component>
    <div class="col-md-8 col-lg-8">
      <div class="conta">
        <h2 class="text-center mb-5">Recuperação de senha</h2>
        <reset-password-form-component></reset-password-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import ResetPasswordFormComponent from './ResetPasswordFormComponent.vue'
  export default {
    name: 'reset-password-component',
    components: {
      BannerComponent, ResetPasswordFormComponent
    },
    created(){
      var token = sessionStorage.getItem('token') //pega a info de "usuario"
      if (token){
        this.$router.push('/login')//se o usuario está logado e tenta acessar a pagina de registro, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reset-password{
    .conta{
      width: 45%;
      height: 50%;
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
