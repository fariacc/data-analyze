<template>
  <div class="minha-conta">
    <navbar-interna-component @enviarInfosUser="enviaInfosUser"></navbar-interna-component>
    <conta-header :token="token"></conta-header>
    <conta-content :dadosUsuario="dadosUsuario" :path="path" :token="token"></conta-content>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import ContaHeader from './ContaHeader.vue'
  import ContaContent from './gerenciar/ContaContent.vue'
  export default {
    name: 'conta-component',
    components: {
      NavbarInternaComponent, ContaHeader, ContaContent
    },
    data(){
      return{
        dadosUsuario: null, path: null, token: null
      }
    },
    methods:{
      enviaInfosUser(dadosUser, token){
        this.dadosUsuario = dadosUser
        this.token = token
      }
    },
    created(){
      this.enviaInfosUser()
      this.path = this.$route.path
    }
  }
</script>

<style lang="scss">
  .minha-conta{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
  }
</style>
