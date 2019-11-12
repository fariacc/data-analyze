<template>
  <div class="col-sm-12 col-md-6 col-lg-6 text-center">
    <grafico-component classedivlinha="mr-auto grafico mt-1" :data="dataGrafico" :dataGrafico="dataGrafico"></grafico-component>
  </div>
</template>

<script>
  import GraficoComponent from '../../shared/utils/GraficoComponent.vue'
  export default {
    name: 'grafico-dashboard',
    components: { GraficoComponent },
    data(){
      return{
        dataGrafico: [
          { width: '100%', height: '435', type: 'maps/brazil', dataFormat: 'json',
            dataSource: {
              "chart": {
                "showLegend": true,
                "caption": false,
                "fillAlpha": "100",
                "fillColor": "#71aae0",
                "bordercolor": "#000000",
                "hoverColor": "153D61",
                "showBorder": 0.5,
                "theme": "fusion",
                "borderThickness": 0.2
              },
              "colorRange": {
                "minValue": "0",
                "startLabel": "Menor quantidade",
                "endLabel": "Maior quantidade",
                "code": "F2726F",
                "color": [
                  {"maxValue": "2500", "code": "F8BD19"}, {"maxValue": "5000", "code": "00B20E"}
                ]
              },
              "data": [
                { "id":"001","value": 2834 }, { "id":"002","value": 3182 }, { "id":"003","value": 3280 },
                { "id":"004","value": 911 }, { "id":"005","value": 292 }, { "id":"006","value": 530 },
                { "id":"007","value": 2515 }, { "id":"008","value": 728 }, { "id":"009","value": 1974 },
                { "id":"010","value": 848 }, { "id":"011","value": 3278 }, { "id":"012","value": 4463 },
                { "id":"013","value": 1198 }, { "id":"014","value": 378 }, { "id":"015","value": 2610 },
                { "id":"016","value": 1200 }, { "id":"017","value": 3820 }, { "id":"018","value": 940 },
                { "id":"019","value": 2834}, { "id":"020","value": 3182 }, { "id":"021","value": 3280 },
                { "id":"022","value": 911 }, { "id":"023","value": 292 }, { "id":"024","value": 530 },
                { "id":"025","value": 2515 }, { "id":"026","value": 728 }, { "id":"027","value": 1974 }
              ]
            },
            events: {
              entityClick(evt, data) {
                document.getElementById('nomeEstado').innerHTML = data.shortLabel + ' - ' + data.label
                document.getElementById('numeroConsumidores').innerHTML = data.value
                // if (dash.__vue__.section === 'consumer') {
                //   consumer.__vue__.setUfName(dataObj.label);
                // }
                // if (dash.__vue__.section === 'companies') {
                //   company.__vue__.setUfName(dataObj.label);
                // }
                // if (dash.__vue__.section === 'veicheler') {
                //   vehicles.__vue__.setUfName(dataObj.label);
                // }
                // dash.__vue__.getStates(dataObj.id);
              }
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
