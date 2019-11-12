<template>
  <div>
    <table-component :tables="tables" :table="tables"></table-component>
    <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
  </div>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  import GraficoComponent from '../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'relacionamento-mercado-pj',
    props: { dadosReport: Object },
    components: {
      TableComponent, GraficoComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Informações sobre quadro de funcionários',
            linhas: [
              {
                bloco: [
                  { titulo: [ 'Quantidade de funcionários' ], conteudo: [ ] }
                ]
              }
            ]
          }
        ],
        dataGrafico: [
          { width: '100%', height: '300', type: 'pie2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "caption": "Quantidade de funcionários por escolaridade",
                 "plottooltext": "<div id='nameDiv'><b>Escolaridade: </b>$label</b><b><br>Porcentagem de funcionários: </b>$percentValue<br/></div>",
                 "pieRadius": "80",
                 "labelFontSize": "12",
                 "labelFontBold": "1",
                 "paletteColors": "#9ECE02, #C4D606, #F8D808, #FFBE38, FF9859, #FF8C75, #F2726F",
                 "alignCaptionWithCanvas": "0",
                 "startingAngle":"300",
                 "useDataPlotColorForLabels": "0",
                 "theme": "fusion"
              },
              "data": [
                { "label": "Pós doutorado", "value": "260" },
                { "label": "Doutorado", "value": "260" },
                { "label": "Mestrado", "value": "290" },
                { "label": "Ensino superior", "value": "260" },
                { "label": "Ensino médio", "value": "290" },
                { "label": "Ensino fundamental", "value": "260" },
                { "label": "Analfabeto", "value": "290" }
              ]
            }
          }
        ]
      }
    },
    created(){
      if (this.dadosReport.quantidade_funcionarios != null) {
        this.tables[0].linhas[0].bloco[0].conteudo[0] = this.dadosReport.quantidade_funcionarios
      }
    }
  }
</script>

<style lang="scss">
</style>
