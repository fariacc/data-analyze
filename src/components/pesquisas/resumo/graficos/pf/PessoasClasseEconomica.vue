<template>
  <grafico-component classedivlinha="grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'pessoas-classe-economica',
    props: { dadosDosGraficos: Object },
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'pie2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de pessoas por classe socioeconômica",
                "plottooltext": "<div id='nameDiv'><b>Classe socioeconômica: </b>$label</b><b><br>Número de pessoas: </b>$value<br/></div>",
                "paletteColors": "#F2726F, #FF9859, #FFBE38, #C4D606, #00B20E",
                "valueFontColor": "#000000",
                "pieRadius": "100",
                "labelFontSize": "12",
                "labelFontBold": "1",
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
        this.setDataGrafico(this.dadosDosGraficos.classe_social)
      }
    }
  }
</script>

<style lang="scss">
</style>
