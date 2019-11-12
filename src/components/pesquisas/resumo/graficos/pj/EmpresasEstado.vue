<template>
  <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'empresas-estado',
    props: { dadosDosGraficos: Object },
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'column2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de empresas por estado",
                "plottooltext": "<div id='nameDiv'><b>Estado: </b>$label</b><b><br>Número de empresas: </b>$value<br/></div>",
                "valueFontColor": "#000000",
                "theme": "fusion",
                "paletteColors": "#FF8373, #55D8FE, #A3A0FB, #5FE3A1, #0075C2, #CF6BAB, #34546B, #008080, #660066, #7289da, #9fa8ab, #3b5998, #001be5, #d9005f, #d3b1dc",
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
        this.setDataGrafico(this.dadosDosGraficos.uf_num)
      }
    }
  }
</script>

<style lang="scss">
</style>
