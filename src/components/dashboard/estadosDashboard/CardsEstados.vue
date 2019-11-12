<template>
  <div class="cards-estados">
    <card-dashboard class="row" :cards="cards"></card-dashboard>
  </div>
</template>

<script>
  import CardDashboard from '../../shared/utils/CardDashboard.vue'
  export default {
    name: 'cards-estados',
    components: { CardDashboard },
    props: { cards: Array }
  }
</script>

<style lang="scss">
  .cards-estados{
    .info-box{
      cursor: default;
      min-height: 84px;
      .info-box-icon{
        line-height: 85px;
      }
      .info-box-content{
        padding: 14px 10px 14px 100px;
        background-color: red;
        .v-progress-linear {
          margin: 0;
        }
      }
    }
  }
</style>
