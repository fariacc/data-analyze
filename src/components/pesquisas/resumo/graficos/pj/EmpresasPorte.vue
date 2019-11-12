<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'empresas-porte',
    props: { dadosDosGraficos: Object },
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'pie2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de empresas por porte",
                "plottooltext": "<div id='nameDiv'><b>Porte: </b>$label</b><b><br>Número de empresas: </b>$value<br/></div>",
                "valueFontColor": "#000000",
                "pieRadius": "100",
                "labelFontSize": "12",
                "labelFontBold": "1",
                "paletteColors": "#FF8373, #55D8FE, #A3A0FB, #5FE3A1, #0075C2",
                "alignCaptionWithCanvas": "0",
                "startingAngle":"300",
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
        this.setDataGrafico(this.dadosDosGraficos.porte)
      }
    }
  }
</script>

<style lang="scss">
</style>
