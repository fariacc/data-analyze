<template>
  <div class="pesquisa-veicular">
    <navbar-interna-component></navbar-interna-component>
    <div class="row mx-0 bg-cinza">
      <div class="col-sm-12 col-md-12 col-lg-3">
        <pesquisa-veicular-form class="d-print-none" @abreModal="abrirModal"></pesquisa-veicular-form>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-9">
        <relatorio-veicular-component v-if="mostrarRelatorio == true"></relatorio-veicular-component>
        <sem-pesquisa-component v-if="mostrarRelatorio == false"></sem-pesquisa-component>
      </div>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Pesquisa Veicular</h3>
      <h5 slot="body" class="text-center">
        <p><i :class="iconeModal" aria-hidden="true"></i><strong> {{messageModal}}</strong></p>
        <p v-if="precoPesquisa > 0.00"><strong>A tarifa da pesquisa é: R$ {{precoPesquisa}},00</strong></p>
        <!-- <p v-else-if="precoPesquisa == 0.00"><strong>A pesquisa offline é isenta de tarifa</strong></p> -->
      </h5>
      <h5 slot="footer">
        <button tipo="button" class="btn btn-default-2" @click="showModal = false">Cancelar</button>
        <button v-if="pesquisaValida == 'onlinevalida'" tipo="button" class="btn btn-default" @click="pesquisaVeicularOnline($event)">Gerar pesquisa</button>
        <button v-else-if="pesquisaValida == 'offlinevalida'" tipo="button" class="btn btn-default" @click="pesquisaVeicularOffline($event)">Gerar pesquisa</button>
      </h5>
    </modal-component>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../../shared/NavbarInternaComponent.vue'
  import PesquisaVeicularForm from './PesquisaVeicularForm.vue'
  import SemPesquisaComponent from '../SemPesquisaComponent.vue'
  import RelatorioVeicularComponent from './RelatorioVeicularComponent.vue'
  import ModalComponent from '../../shared/utils/ModalComponent.vue'
  export default {
    name: 'pesquisa-veicular-component',
    components: {
      NavbarInternaComponent, PesquisaVeicularForm, SemPesquisaComponent, RelatorioVeicularComponent, ModalComponent
    },
    data(){
      return{
        showModal: false, messageModal: null, iconeModal: null, pesquisaValida: null, precoPesquisa: null,
        mostrarRelatorio: false
      }
    },
    methods: {
      abrirModal(texto, icone, validacao, preco){
        this.showModal = true
        this.messageModal = texto
        this.iconeModal = icone
        this.pesquisaValida = validacao
        this.precoPesquisa = preco
      },
      pesquisaVeicularOnline (event){
        this.mostrarRelatorio = true
        this.showModal = false
      },
      pesquisaVeicularOffline (event){
        this.mostrarRelatorio = true
        this.showModal = false
      }
    }
  }
</script>

<style lang="scss">
  .bg-cinza{
    background-color: #ececec;
  }
  .pesquisa-veicular{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
    .nav-tabs{
      .nav-item{
        width: 50%;
      }
    }
  }
</style>
