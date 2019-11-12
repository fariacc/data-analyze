<template>
  <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'pessoas-escolaridade',
    props: { dadosDosGraficos: Object },
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'column2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de pessoas por escolaridade",
                "plottooltext": "<div id='nameDiv'><b>Escolaridade: </b>$label</b><b><br>Número de pessoas: </b>$value<br/></div>",
                "valueFontColor": "#000000",
                "theme": "fusion",
                "paletteColors": "#F2726F, #FF9859, #FFBE38, #C4D606, #9ECE02, #00B20E",
                "labelFontSize": "12",
                "labelFontBold": "1",
                "valueFontSize": "12",
                "valueFontBold": "1",
                "yAxisNameFontSize": "12",
                "xAxisNameFontSize": "12",
                "placeValuesInside": "1",
                "useDataPlotColorForLabels": "1"
              },
              "data": []
            }
          }
        ]
      }
    },
    methods: {
      setDataGrafico(arrayGraficos) {
        for (var i = 0; i < arrayGraficos.length; i++) {
          arrayGraficos[i].label = arrayGraficos[i].label.toString()
        }
        this.dataGrafico[0].dataSource.data = arrayGraficos
      }
    },
    watch: {
      dadosDosGraficos(){
        this.setDataGrafico(this.dadosDosGraficos.escolaridade)
      }
    }
  }
</script>

<style lang="scss">
</style>
