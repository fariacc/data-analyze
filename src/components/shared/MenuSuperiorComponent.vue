<template>
  <ul class="mr-auto navbar-nav menu-superior d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
    <li v-for="(opcao, key) in opcoes" v-if="key <= 1" class="d-none nav-item text-center d-lg-inline-block d-xl-inline-block">
      <router-link class="nav-link" data-placement="right" :to="opcao.route">
        <i :class="opcao.icon" aria-hidden="true"></i>
        {{ opcao.nome }}
      </router-link>
    </li>
    <b-dropdown v-for="(opcao, key) in opcoes" v-if="key > 1" class="d-none d-lg-inline-block d-xl-inline-block">
      <template v-if="key == 2" slot="button-content">&#x1f4c8; {{opcao.nome}}</template>
      <template v-if="key == 3" slot="button-content">&#x1f50d; {{opcao.nome}}</template>
      <b-dropdown-item v-for="(subopcao, key) in opcao.subopcoes" :to="subopcao.route" :key="subopcao.index">
        <i :class="subopcao.icon" aria-hidden="true"></i>&ensp;{{subopcao.nome}}
      </b-dropdown-item>
      <b-dropdown-divider class="d-lg-none d-xl-none d-lg-inline-block"></b-dropdown-divider>
    </b-dropdown>
  </ul>
</template>

<script>
  export default {
    name: 'menu-superior-component',
    props: {
      opcao: Array, opcoes: Array
    }
  }
</script>

<style lang="scss">
  .menu-superior{
    .dropdown{
      .dropdown-toggle{
        margin-right: 1.5vw;
        background-color: transparent!important;
        border: 0;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: bold;
        color: #ffffff;
        padding: 0;
        &:after{
          content: none;
        }
        &:hover{
          border-bottom: 2px solid #EE4C5B;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
    .nav-item{
      margin-right: 1.5vw;
      font-size: 0.8em;
      font-weight: bold;
      text-transform: uppercase;
      a{
        color: #ffffff;
        &:hover{
          padding: 0;
          color: #ffffff;
          border-bottom: 2px solid #EE4C5B;
        }
      }
    }
  }
</style>
