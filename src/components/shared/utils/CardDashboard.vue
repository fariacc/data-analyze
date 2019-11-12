<template>
  <div>
    <div :class="card.classe" v-for="(card, key) in cards">
      <div class="info-box box-shadow" @click="selecionarOpcao(card.nome)">
        <span class="info-box-icon" :style="card.cor">
          <i :class="card.icone"></i>
        </span>
        <div class="info-box-content text-center" :style="card.corCard">
          <span class="info-box-text">{{card.nome}}</span>
          <span class="info-box-number">{{formatNumber(card.total)}}</span>
          <span v-if="card.consumo != null">
            <div class="col-12 px-0">
              <v-app>
                <v-progress-linear v-model="card.consumo"></v-progress-linear>
              </v-app>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card-dashboard',
    props: { cards: Array },
    methods: {
      selecionarOpcao(dado){
        this.$emit('selecionaOpcao', dado)
      },
      formatNumber(value){
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    }
  }
</script>

<style lang="scss">
  .info-box{
    min-height: 90px;
    background: #fff;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 1vh;
    .info-box-icon{
      float: left;
      width: 90px;
      text-align: center;
      font-size: 3rem;
      line-height: 90px;
      background: rgba(0,0,0,0.2);
    }
    .info-box-content{
      padding: 20px 10px;
      margin-bottom: 2vh;
      .info-box-text{
        text-transform: uppercase;
        color: #213345;
      }
      .info-box-number{
        display: block;
        font-weight: bold;
        font-size: 1.4rem;
        color: #213345;
      }
    }
  }
</style>
