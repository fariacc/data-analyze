<template>
  <div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
        <empresas-porte :dadosDosGraficos="dadosGraficos"></empresas-porte>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
        <empresas-cnae :dadosDosGraficos="dadosGraficos"></empresas-cnae>
      </div>
    </div>
    <empresas-estado class="mb-3" :dadosDosGraficos="dadosGraficos"></empresas-estado>
    <empresas-situacao :dadosDosGraficos="dadosGraficos"></empresas-situacao>
  </div>
</template>

<script>
  import EmpresasPorte from './EmpresasPorte.vue'
  import EmpresasCnae from './EmpresasCnae.vue'
  import EmpresasEstado from './EmpresasEstado.vue'
  import EmpresasSituacao from './EmpresasSituacao.vue'
  export default {
    name: 'graficos-resumo-pj',
    props: { dadosGraficos: Object },
    components: {
      EmpresasPorte, EmpresasCnae, EmpresasEstado, EmpresasSituacao
    },
    watch: {
      dadosGraficos(){}
    }
  }
</script>

<style lang="scss">
</style>
