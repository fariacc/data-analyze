<template>
  <div>
    <div class="header">Índice de relacionamento com o mercado</div>
    <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
  </div>
</template>

<script>
  import GraficoComponent from '../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'relacionamento-mercado-pj',
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
                "subcaption": "Índice que reflete o número de operações (alteração no contrato social, abertura ou solicitação de cadastro de crédito, consulta ao CNPJ, etc) que a empresa tem feito nos últimos 12 meses.",
                "showTickMarks": "0", "showValue": "0", "lowerLimit": "0", "upperLimit": "1000", "theme": "fusion", "gaugefillmix": "{dark-15},{light+70},{dark-10}",
                "pointerbghovercolor": "#ffffff", "pointerhoverradius": "12", "showborderonhover": "1", "pointerborderhoverthickness": "2",
              },
              "colorRange": {
                "color": [
                  { "minValue": "0", "maxValue": "200", "label": "Altíssimo", "code": "#F2726F" },
                  { "minValue": "201", "maxValue": "400", "label": "Alto", "code": "#FFBE38" },
                  { "minValue": "401", "maxValue": "600", "label": "Médio", "code": "#F8D808" },
                  { "minValue": "601", "maxValue": "800", "label": "Baixo", "code": "#9ECE02" },
                  { "minValue": "801", "maxValue": "1000", "label": "Baixíssimo", "code": "#00B20E" }
                ]
              },
              "pointers": {
                "pointer": [
                  { "value": "500", "tooltext": "Índice estimado do relacionamento dessa empresa com o mercado" }
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
