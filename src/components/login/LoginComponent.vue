<template>
  <div class="login-component">
    <div class="row">
      <banner-component></banner-component>
      <div class="col-md-8 col-lg-8">
        <div class="conta">
          <h2>Entre na sua conta</h2>
          <login-form-component></login-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import LoginFormComponent from './LoginFormComponent.vue'
  export default {
    name: 'login-component',
    components: {
      BannerComponent, LoginFormComponent
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.$router.push('/perfil')//se o usuario está logado e tenta acessar a pagina de login, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-component{
    min-height: 100vh;
    max-height: 100%;
    min-width: 100vw;
    max-width: 100%;
    .conta{
      width: 50%;
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
        text-align: center;
      }
    }
  }
</style>
