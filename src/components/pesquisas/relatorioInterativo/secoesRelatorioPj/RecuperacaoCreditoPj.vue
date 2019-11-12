<template>
  <div>
    <div class="header">Indicador de recuperação de crédito</div>
    <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
  </div>
</template>

<script>
  import GraficoComponent from '../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'recuperacao-credito-pj',
    props: { dadosReport: Object },
    components: {
      GraficoComponent
    },
    data(){
      return{
        dataGrafico: [
          {
            width: '100%', height: '100', type: 'hlineargauge', dataFormat: 'json',
            dataSource: {
              "chart": {
                "subcaption": "A probabilidade de inadimplência associada à classe de risco em que a empresa consultada está inserida é acima de $datavalue dias de atraso",
                "showTickMarks": "0", "showValue": "0", "lowerLimit": "0", "upperLimit": "1000", "theme": "fusion", "gaugefillmix": "{dark-15},{light+70},{dark-10}",
                "pointerbghovercolor": "#ffffff", "pointerhoverradius": "12", "showborderonhover": "1", "pointerborderhoverthickness": "2",
              },
              "colorRange": {
                "color": [
                  { "minValue": "0", "maxValue": "125", "label": "H8", "code": "#F2726F" },
                  { "minValue": "126", "maxValue": "250", "label": "G7", "code": "#FF8C75" },
                  { "minValue": "251", "maxValue": "375", "label": "F6", "code": "#FF9859" },
                  { "minValue": "376", "maxValue": "500", "label": "E5", "code": "#FFBE38" },
                  { "minValue": "501", "maxValue": "625", "label": "D4", "code": "#F8D808" },
                  { "minValue": "626", "maxValue": "750", "label": "C3", "code": "#C4D606" },
                  { "minValue": "751", "maxValue": "875", "label": "B2", "code": "#9ECE02" },
                  { "minValue": "876", "maxValue": "1000", "label": "A1", "code": "#00B20E" }
                ]
              },
              "pointers": {
                "pointer": [
                  { "value": "432", "tooltext": "A probabilidade de inadimplência dessa empresa é de $datavalue dias" }
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
