<template>
  <div class="gerenciar-planos">
    <p class="m-0 text-center texto-grafico-contador card box-shadow">
      <strong>Gerenciamento de planos</strong>
    </p>
    <plan-card-component @alterarPlanoModal="alteraPlanoModal"></plan-card-component>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Contratação de plano</h3>
      <h5 class="text-center" slot="body">{{ mensagemModal }}</h5>
    </modal-component>
  </div>
</template>

<script>
  import PlanCardComponent from './PlanCardComponent.vue'
  import ModalComponent from '../../../shared/utils/ModalComponent.vue'
  export default {
    name: 'gerenciar-planos',
    components: {
      PlanCardComponent, ModalComponent
    },
    data(){
      return{
        mensagemModal: null, showModal: false
      }
    },
    methods:{
      alteraPlanoModal(mensagem){
        this.mensagemModal = mensagem
        this.showModal = true
      }
    }
  }
</script>

<style lang="scss">
</style>
