<template>
  <div class="resumo">
    <ul-component classediv="nav-analises" class="d-print-none" role="tablist" classeul="nav nav-tabs" classeli="nav-item" :classea="tabsInter" :item="tabsInter" :items="tabsInter"></ul-component>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="analiseMacroeconomica" role="tabpanel">
        <p-component classe="card text-center texto-grafico-contador mx-0 box-shadow">
          <span slot="conteudo">
            Foram encontrados <strong>{{formatNumber(count)}}</strong> registros ao total
          </span>
        </p-component>
        <graficos-resumo-pf :dadosGraficos="informacoesGrafico" v-if="path == '/individualpf' || path == '/avancadapf'"></graficos-resumo-pf>
        <graficos-resumo-pj :dadosGraficos="informacoesGrafico" v-else-if="path == '/individualpj' || path == '/avancadapj'"></graficos-resumo-pj>
      </div>
      <div class="tab-pane fade" id="analiseDeGeolocalizacao" role="tabpanel">
        <google-maps-component class="box-shadow"></google-maps-component>
      </div>
    </div>
  </div>
</template>

<script>
  import GraficosResumoPf from './resumo/graficos/pf/GraficosResumoPf.vue'
  import GraficosResumoPj from './resumo/graficos/pj/GraficosResumoPj.vue'
  import UlComponent from '../shared/utils/UlComponent.vue'
  import GoogleMapsComponent from '../shared/utils/GoogleMapsComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  export default {
    name: 'resumo-component',
    props: { informacoesGrafico: Object, count: Number, path: String },
    components: {
      GraficosResumoPf, GoogleMapsComponent, UlComponent, GraficosResumoPj, PComponent
    },
    data(){
      return{
        showModal: false, habilitarBotao: false, iconeModal: null, messageModal: null,
        tabsInter: [
          { nome: 'Análise Macroeconômica', href: '#analiseMacroeconomica', ariacontrols: 'analiseMacroeconomica', classea: 'nav-link show active' },
          { nome: 'Análise de Geolocalização', href: '#analiseDeGeolocalizacao', ariacontrols: 'analiseDeGeolocalizacao', classea: 'nav-link show' }
        ]
      }
    },
    methods: {
      formatNumber(value){
        if (value != null) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
      }
    },
    watch: {
      informacoesGrafico(){}
    }
  }
</script>

<style lang="scss">
  .resumo{
    background-color: #ececec;
    .nav-analises{
      .nav-tabs{
        .nav-item{
          width: 50%;
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
    }
  }
</style>
