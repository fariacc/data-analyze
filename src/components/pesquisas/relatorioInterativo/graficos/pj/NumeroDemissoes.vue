<template>
  <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
</template>

<script>
  import GraficoComponent from '../../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'numero-demissoes',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { classediv: 'box-shadow', width: '100%', height: '400', type: 'msarea', dataFormat: 'json',
          dataSource: {
            "chart": {
              "theme": "fusion", "caption": "Número de demissões", "paletteColors": "#681817, #FF8373",
              "yAxisName": "Contratações", "xAxisName": "Ano"
            },
            "categories": [
              {
                "category": [
                  { "label": "2012" }, { "label": "2013" }, { "label": "2014" }, { "label": "2015" },
                  { "label": "2016" }, { "label": "2017" }, { "label": "2018" }
                ]
              }
            ],
            "dataset": [
              {
                "seriesname": "Grupo econômico",
                "data": [
                  { "value": "15123" }, { "value": "14233" }, { "value": "25507" }, { "value": "9110" },
                  { "value": "15529" }, { "value": "20803" }, { "value": "19202" }
                ]
              },
              {
                "seriesname": "Empresa",
                "data": [
                  { "value": "13400" }, { "value": "12800" }, { "value": "22800" }, { "value": "12400" },
                  { "value": "15800" }, { "value": "19800" }, { "value": "21800" }
                ]
              }
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
