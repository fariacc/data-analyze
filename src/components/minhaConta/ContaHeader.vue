<template>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <div class="card box-shadow">
      <h3 class="text-center m-0">
        <p class="my-1"><strong>Data Analyzer</strong></p>
      </h3>
      <v-app class="col-12">
        <p class="m-0 text-center texto-grafico-contador">
          Até o momento sua empresa consumiu <strong>{{empresa[0].consumo}}%</strong> do limite
        </p>
        <v-progress-linear class="mt-1 col-6 mx-auto p-0" :color="empresa[0].color" v-model="empresa[0].consumo"></v-progress-linear>
      </v-app>
    </div>
    <ul-component class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsConta" :item="tabsConta" :items="tabsConta"></ul-component>
  </div>
</template>

<script>
  import UlComponent from '../shared/utils/UlComponent.vue'
  export default {
    name: 'conta-header',
    props: { token: String },
    components: {
      UlComponent
    },
    data(){
      return{
        empresa: [
          { consumo: 65, color: null }
        ],
        tabsConta: [
          { nome: 'Usuários', href: '#usuarios', ariacontrols: 'usuarios', classea: 'nav-link show active' },
          { nome: 'Planos', href: '#planos', ariacontrols: 'planos', classea: 'nav-link show' },
          { nome: 'Histórico', href: '#historico', ariacontrols: 'historico', classea: 'nav-link show' },
          { nome: 'Pagamentos', href: '#pagamentos', ariacontrols: 'pagamentos', classea: 'nav-link show' },
          { nome: 'Empresa', href: '#empresa', ariacontrols: 'empresa', classea: 'nav-link show' }
        ]
      }
    },
    methods: {
      corConsumo(){
        if (this.empresa[0].consumo >= 0 && this.empresa[0].consumo <= 20) {
          this.empresa[0].color = '#00B20E'
        }
        else if (this.empresa[0].consumo > 20 && this.empresa[0].consumo <= 40) {
          this.empresa[0].color = '#C4D606'
        }
        else if (this.empresa[0].consumo > 40 && this.empresa[0].consumo <= 60) {
          this.empresa[0].color = '#FFBE38'
        }
        else if (this.empresa[0].consumo > 60 && this.empresa[0].consumo <= 80) {
          this.empresa[0].color = '#FF9859'
        }
        else{
          this.empresa[0].color = '#F2726F'
        }
      }
    },
    watch:{
      token(){
        this.corConsumo()
      }
    }
  }
</script>

<style lang="scss">
  .minha-conta{
    .nav-tabs{
      padding-bottom: 1vh;
      .nav-item{
        width: 20%;
        .nav-link{
          border: none;
          font-size: 0.8rem;
          background-color: transparent;
          &:hover, &.active{
            border-bottom: 2px solid #213345;
          }
        }
      }
    }
    .application{
      background: none;
    }
  }
</style>
