<template>
  <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'pessoas-faixa-etaria-igual',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'bar2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Número de pessoas na mesma faixa etária do pesquisado",
                "plottooltext": "<div id='nameDiv'><b>Faixa etária: </b>$label</b><b><br>Número de pessoas: </b>$value<br/></div>",
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
