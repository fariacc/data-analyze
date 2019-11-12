<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'renda-faixa-etaria',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'column2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Renda média das pessoas na mesma faixa etária do pesquisado",
                "plottooltext": "<div id='nameDiv'><b>Grau de instrução: </b>$label</b><b><br>Renda média: R$ </b>$value<br/></div>",
                "xAxisName": "Grau de instrução",
                "yAxisName": "Renda média",
                "paletteColors": "#F2726F, #FF9859, #FFBE38, #C4D606, #00B20E",
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
                { "label": "Criança", "value": "10" },
                { "label": "Jovem", "value": "20" },
                { "label": "Adulto", "value": "30" },
                { "label": "Meia idade", "value": "40" },
                { "label": "Melhor idade", "value": "50" }
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
