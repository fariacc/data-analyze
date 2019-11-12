<template>
  <div>
    <renda-media-escolaridade class="mb-3"></renda-media-escolaridade>
    <pessoas-escolaridade-profissao class="mb-3"></pessoas-escolaridade-profissao>
    <pessoas-faixa-etaria-igual class="mb-3"></pessoas-faixa-etaria-igual>
    <renda-faixa-etaria></renda-faixa-etaria>
  </div>
</template>

<script>
  import RendaMediaEscolaridade from './RendaMediaEscolaridade.vue'
  import PessoasEscolaridadeProfissao from './PessoasEscolaridadeProfissao.vue'
  import PessoasFaixaEtariaIgual from './PessoasFaixaEtariaIgual.vue'
  import RendaFaixaEtaria from './RendaFaixaEtaria.vue'
  export default {
    name: 'graficos-interativo-pf',
    components: {
      RendaMediaEscolaridade, PessoasEscolaridadeProfissao, PessoasFaixaEtariaIgual, RendaFaixaEtaria
    }
  }
</script>

<style lang="scss">
</style>
