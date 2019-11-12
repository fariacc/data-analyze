<template>
  <div class="register-component">
    <div class="row">
      <banner-component></banner-component>
      <div class="col-md-8 col-lg-8">
        <div class="conta">
          <h2>Crie a sua conta</h2>
          <register-form-component></register-form-component>
          <div class="form-group col-md-12 col-lg-12 text-center mb-0">
            <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import RegisterFormComponent from './RegisterFormComponent.vue'
  export default {
    name: 'register-template',
    components: {
      BannerComponent, RegisterFormComponent
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.$router.push('/perfil')//se o usuario está logado e tenta acessar a pagina de registro, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-component{
    min-width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100%;
    .conta{
      width: 50%;
      height: 75%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .link{
      color: #41698E;
      &:hover{
        color: #213345!important;
        text-decoration: none!important;
      }
    }
    h2 {
      color: #41698E;
      font-weight: 900;
      text-align: center;
    }
  }
</style>
