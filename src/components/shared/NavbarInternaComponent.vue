<template>
  <div>
    <nav class="navbar navbar-bankscore-2">
      <div class="container-fluid px-1">
        <logo-component rota="/"></logo-component>
        <menu-superior-component :opcao="opcoesMenu" :opcoes="opcoesMenu"></menu-superior-component>
        <message-area-component></message-area-component>
        <b-dropdown right :text="usuario" class="my-2 mr-0 menu-direita">
          <!-- itens no mobile -->
          <b-dropdown-item v-for="(opcao, key) in opcoesMenu" :to="opcao.route" v-if="key < 2" class="d-lg-none d-xl-none d-md-inline-flex">
            <i :class="opcao.icon" aria-hidden="true"></i>&ensp;{{opcao.nome}}
          </b-dropdown-item>
          <!-- subitens no mobile -->
          <div class="d-lg-none d-xl-none d-md-inline-flex" v-for="(opcao, key) in opcoesMenu">
            <b-dropdown-header v-if="key > 1">
              <i :class="opcao.icon" aria-hidden="true"></i>&ensp;{{opcao.nome}}
            </b-dropdown-header>
            <b-dropdown-item v-for="(subopcao, key) in opcao.subopcoes" :to="subopcao.route">
              {{subopcao.nome}}
            </b-dropdown-item>
          </div>
          <!-- itens no pc -->
          <b-dropdown-divider class="d-lg-none d-xl-none d-lg-inline-block"></b-dropdown-divider>
          <b-dropdown-item v-for="(opcao, key) in opcoesDropdown" :to="opcao.route" v-if="key != 1" :key="opcao.index">&ensp;{{opcao.nome}}</b-dropdown-item>
          <b-dropdown-item v-else :key="opcao.index" @click="logout()">&ensp;{{opcao.nome}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
  import LogoComponent from './LogoComponent.vue'
  import MessageAreaComponent from './utils/MessageAreaComponent.vue'
  import MenuSuperiorComponent from './MenuSuperiorComponent.vue'
  export default {
    name: 'navbar-interna-component',
    components: {
      LogoComponent, MessageAreaComponent, MenuSuperiorComponent
    },
    data(){
      return{
        usuario: null, token: null,
        dadosUsuario: { idCompany: 1, name: 'Username', token: '12345' },
        opcoesMenu: [
          { nome: "Dashboard", route: '/home', icon: 'fas fa-globe-americas' },
          { nome: "Sobre Veículos", route: '/veiculos', icon: 'fas fa-car' },
          { nome: "Para crescer", icon: 'fas fa-chart-line',
            subopcoes: [
              { nome: "Pesquisa avançada PF", route: '/avancadapf', icon: 'fas fa-users' },
              { nome: "Pesquisa avançada PJ", route: '/avancadapj', icon: 'fas fa-city' }
            ]
          },
          { nome: "Para encontrar", icon: 'fas fa-search',
            subopcoes: [
              { nome: "Pesquisa individual PF", route: '/individualpf', icon: 'fas fa-user' },
              { nome: "Pesquisa individual PJ", route: '/individualpj', icon: 'fas fa-building' }
            ]
          }
        ],
        opcoesDropdown: [
          { nome: 'Minha conta', route: '/conta'}, {nome: 'Sair', route: '/sair' },
        ],
      }
    },
    methods: {
      logout(){
        sessionStorage.clear()
        this.$router.push('/login')
      },
      requisicaoUser(){
        this.token = sessionStorage.getItem('token') //pega a info de "token"
        if (this.token == null) {
          this.logout()
        }
        else{
          this.$emit('enviarInfosUser', this.dadosUsuario, this.token)
          this.usuario = 'Username'
        }
      }
    },
    created(){
      this.requisicaoUser()
    },
    mounted(){
      setInterval(function(){
        this.requisicaoUser()
      }.bind(this), 5000)
    }
  }
</script>

<style lang="scss">
  .navbar {
    position: top!important;
    width: 100%;
    background-color: #213345;
    padding: 0!important;
  	box-shadow: none;
    .menu-direita{
      .dropdown-toggle{
        background-color: transparent!important;
        border: 0;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: bold;
        color: #EE4C5B;
        &:after{
          color: #ffffff;
        }
      }
    }
    .dropdown-divider{
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .dropdown-menu{
      font-size: 0.9rem;
      .dropdown-item {
        color: #213345;
        background-color: transparent;
        padding: 0.4rem 0.6rem 0.4rem 0.6rem;
        &:hover{
          background-color: #e9ecef;
        }
      }
    }
  }
</style>
