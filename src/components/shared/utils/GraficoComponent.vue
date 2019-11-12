<template>
  <div :class="classedivlinha">
    <div :class="data.classediv" v-for="(data, key) in dataGrafico">
      <fusioncharts :type="data.type" :width="data.width" :height="data.height" :dataFormat="data.dataFormat"
      :dataSource="data.dataSource" :events="data.events"></fusioncharts>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grafico-component',
    props: {
      dataGrafico: Array, data: Array, classediv: Array, classedivlinha: String
    }
  }
</script>

<style lang="scss">
  .grafico{
    width: 100%;
    margin-bottom: 1.2vh;
  }
</style>
