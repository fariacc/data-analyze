<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'pessoas-sexo',
    props: { dadosDosGraficos: Object },
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'bar2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de pessoas por sexo",
                "plottooltext": "<div id='nameDiv'><b>Sexo: </b>$label</b><b><br>Número de pessoas: </b>$value<br/></div>",
                "paletteColors": "#0075c2, #e04028",
                "xAxisName": "Sexo",
                "yAxisName": "Quantidade",
                "labelFontSize": "12",
                "labelFontBold": "1",
                "valueFontSize": "12",
                "valueFontBold": "1",
                "yAxisNameFontSize": "12",
                "xAxisNameFontSize": "12",
                "placeValuesInside": "1",
                "useDataPlotColorForLabels": "1",
                "theme": "fusion"
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
        this.setDataGrafico(this.dadosDosGraficos.sexo)
      }
    }
  }
</script>

<style lang="scss">
</style>
