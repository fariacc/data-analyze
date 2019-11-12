<template>
  <div class="col-sm-12 col-md-12 col-lg-12 bg-cinza pb-2">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="usuarios" role="tabpanel">
        <gerenciar-usuarios :dadosUsuario="dadosUsuario" :path="path" :token="token"></gerenciar-usuarios>
      </div>
      <div class="tab-pane fade" id="planos" role="tabpanel">
        <gerenciar-planos></gerenciar-planos>
      </div>
      <div class="tab-pane fade" id="historico" role="tabpanel">
        <gerenciar-historico :token="token"></gerenciar-historico>
      </div>
      <div class="tab-pane fade" id="pagamentos" role="tabpanel">
        <informacoes-pagamentos :token="token"></informacoes-pagamentos>
      </div>
      <div class="tab-pane fade" id="empresa" role="tabpanel">
        <informacoes-empresa></informacoes-empresa>
      </div>
    </div>
  </div>
</template>

<script>
  import GerenciarUsuarios from './usuarios/GerenciarUsuarios.vue'
  import GerenciarPlanos from './planos/GerenciarPlanos.vue'
  import GerenciarHistorico from './historico/GerenciarHistorico.vue'
  import InformacoesPagamentos from './pagamentos/InformacoesPagamentos.vue'
  import InformacoesEmpresa from './empresa/InformacoesEmpresa.vue'
  export default {
    name: 'conta-content',
    props: { dadosUsuario: Object, path: String, token: String },
    components: {
      GerenciarUsuarios, GerenciarPlanos, GerenciarHistorico, InformacoesPagamentos, InformacoesEmpresa
    }
  }
</script>

<style lang="scss">
</style>
