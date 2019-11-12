<template>
  <div class="datepicker-trigger">
    <input class="form-control" type="text" id="datepicker-trigger" placeholder="Selecione datas" :value="formatDates(dateOne, dateTwo)">
    <AirbnbStyleDatepicker :trigger-element-id="'datepicker-trigger'" :mode="'range'" :date-one="dateOne" :date-two="dateTwo"
    @date-two-selected="val => { dateTwo = val }" @date-one-selected="val => { dateOne = val }" :fullscreen-mobile="true"/>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  export default {
    name: 'date-picker-component',
    data () {
      return {
        dateFormat: 'DD/MM/YYYY', dateOne: '', dateTwo: ''
      }
    },
    methods: {
      formatDates(dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
          formattedDates = format(dateOne, this.dateFormat)
        }
        if (dateTwo) {
          formattedDates = 'Entre ' + formattedDates + ' e ' + format(dateTwo, this.dateFormat)
        }
        this.$emit('enviarData', dateOne, dateTwo)
        return formattedDates
      }
    }
  }
</script>

<style lang="scss">
  .datepicker-trigger{
    .asd__wrapper{
      max-height: 24.5rem;
      .asd__day{
        width: 2vw!important;
        height: 2vh!important;
        line-height: 2.3rem;
      }
      .asd__month{
        padding-bottom: 0!important;
      }
      .asd__action-buttons{
        margin-bottom: 0!important;
        min-height: 40px!important;
        padding-top: 0;
      }
      .asd__keyboard-shortcuts-trigger-wrapper{
        display: none;
      }
    }
  }
</style>
