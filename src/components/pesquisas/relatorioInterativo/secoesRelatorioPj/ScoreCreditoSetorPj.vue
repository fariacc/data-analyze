<template>
  <div>
    <div class="header mb-1">Score de crédito do setor</div>
    <div class="row">
      <grafico-component class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mr-auto" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 ml-auto">
        <p class="mt-4">
          De cada 100 empresas classificadas com este score, é provável que 50% (50 empresas) tornem-se inadimplentes nos próximos
          6 meses. O score de crédito é um sistema de avaliação que mede a probabilidade de uma pessoa se tornar inadimplente.
          Trata-se de um cálculo matemático baseado em um modelo de análise de cobertura nacional em que "0 - Demonstra maior risco"
          e "1000 - Demonstra menor risco".
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import GraficoComponent from '../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'score-credito-empresa-pj',
    props: { dadosReport: Object },
    components: {
      GraficoComponent
    },
    data(){
      return{
        dataGrafico: [
          {
            width: '100%', height: '170', type: 'angulargauge', dataFormat: 'json',
            dataSource: {
              "chart": {
                "labelFontSize": "13", "labelFontBold": "1", "valueFontSize": "15", "valueFontBold": "1", "lowerLimit": "0",
                "upperLimit": "1000", "theme": "fusion", "gaugeOuterRadius": "100", "gaugeInnerRadius": "70", "showValue": "1",
                "showtooltip": "1", "gaugefillmix": "{dark-5},{light+50},{dark-10}",
              },
              "colorRange": {
                "color": [
                  { "minValue": "0", "maxValue": "299", "code": "#F2726F" },
                  { "minValue": "300", "maxValue": "599", "code": "#FFBE38" },
                  { "minValue": "600", "maxValue": "899", "code": "#9ECE02" },
                  { "minValue": "900", "maxValue": "1000", "code": "#00B20E" }
                ]
              },
              "dials": {
                "dial": [
                  { "value": "81" }
                ]
              }
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
