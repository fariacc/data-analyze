<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'pessoas-escolaridade-profissao',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'pie2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Número de pessoas com determinada escolaridade que exercem a mesma profissão do pesquisado",
                "plottooltext": "<div id='nameDiv'><b>Escolaridade: </b>$label</b><b><br>Porcentagem de pessoas: </b>$percentValue<br/></div>",
                "labelFontSize": "12",
                "labelFontBold": "1",
                "paletteColors": "#F2726F, #FF9859, #FFBE38, #C4D606, #9ECE02, #00B20E",
                "alignCaptionWithCanvas": "0",
                "startingAngle":"300",
                "useDataPlotColorForLabels": "0",
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
