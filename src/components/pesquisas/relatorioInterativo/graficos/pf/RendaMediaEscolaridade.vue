<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'renda-media-escolaridade',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'bar2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Renda média das pessoas por grau de instrução",
                "plottooltext": "<div id='nameDiv'><b>Grau de instrução: </b>$label</b><b><br>Renda média: R$ </b>$value<br/></div>",
                "xAxisName": "Grau de instrução",
                "yAxisName": "Renda média",
                "paletteColors": "#F2726F, #FF9859, #FFBE38, #C4D606, #9ECE02, #00B20E",
                "useDataPlotColorForLabels": "1",
                "valueFontColor": "#000",
                "valueFontSize": "12",
                "labelFontSize": "12",
                "labelFontBold": "1",
                "yAxisNameFontSize": "12",
                "xAxisNameFontSize": "12",
                "numberprefix": "R$",
                "theme": "fusion"
              },
              "data": [
                { "label": "Analfabeto", "value": "10" },
                { "label": "Ensino fundamental", "value": "20" },
                { "label": "Ensino médio", "value": "30" },
                { "label": "Ensino superior", "value": "40" },
                { "label": "Mestrado", "value": "50" },
                { "label": "Doutorado", "value": "60" }
              ]
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
