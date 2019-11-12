<template>
  <div>
    <div class="header">Análise da classe de risco de inadimplência do setor</div>
    <grafico-component classedivlinha="mx-auto grafico" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
  </div>
</template>

<script>
  import GraficoComponent from '../../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'analise-classe-risco-setor-pj',
    props: { dadosReport: Object },
    components: {
      GraficoComponent
    },
    data(){
      return{
        dataGrafico: [
          {
            width: '100%', height: '250', type: 'bar2d', dataFormat: 'json',
            dataSource: {
              "chart": {
                "plottooltext": "<div id='nameDiv'><b>Classe de risco: </b>$label</b><b><br>Empresas: </b>$value<br/></div>",
                "paletteColors": "#555555, #00B20E, #9ECE02, #C4D606, #F8D808, #FFBE38, FF9859, #FF8C75, #F2726F",
                "labelFontSize": "12.9", "labelFontBold": "1", "theme": "fusion", "valueFontColor": "#000", "valueFontSize": "12",
                "valueFontBold": "1","gaugefillmix": "{dark-15},{light+70},{dark-10}"
              },
              "data": [
                { "label": "Não classificadas", "value": "26" },
                { "label": "Sem classificação de inadimplência", "value": "25" },
                { "label": "Até 30 dias de inadimplência", "value": "89" },
                { "label": "Até 60 dias de inadimplência", "value": "12" },
                { "label": "Até 90 dias de inadimplência", "value": "25" },
                { "label": "Até 120 dias de inadimplência", "value": "54" },
                { "label": "Até 150 dias de inadimplência", "value": "10" },
                { "label": "Até 180 dias de inadimplência", "value": "8" },
                { "label": "Mais de 180 dias de inadimplência", "value": "15" }
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
