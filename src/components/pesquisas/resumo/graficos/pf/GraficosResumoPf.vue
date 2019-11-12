<template>
  <div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
        <pessoas-classe-economica :dadosDosGraficos="dadosGraficos"></pessoas-classe-economica>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
        <pessoas-sexo :dadosDosGraficos="dadosGraficos"></pessoas-sexo>
      </div>
    </div>
    <pessoas-escolaridade class="mb-3" :dadosDosGraficos="dadosGraficos"></pessoas-escolaridade>
    <pessoas-faixa-etaria :dadosDosGraficos="dadosGraficos"></pessoas-faixa-etaria>
  </div>
</template>

<script>
  import PessoasClasseEconomica from './PessoasClasseEconomica.vue'
  import PessoasSexo from './PessoasSexo.vue'
  import PessoasEscolaridade from './PessoasEscolaridade.vue'
  import PessoasFaixaEtaria from './PessoasFaixaEtaria.vue'
  export default {
    name: 'graficos-resumo-pf',
    props: { dadosGraficos: Object },
    components: {
      PessoasClasseEconomica, PessoasSexo, PessoasEscolaridade, PessoasFaixaEtaria
    },
    watch: {
      dadosGraficos(){}
    }
  }
</script>

<style lang="scss">
</style>
