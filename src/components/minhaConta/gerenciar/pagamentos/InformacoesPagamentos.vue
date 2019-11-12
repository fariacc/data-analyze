<template>
  <div class="informacoes-pagamentos">
    <p class="m-0 text-center texto-grafico-contador card box-shadow">
      <strong>Informações de pagamentos</strong>
    </p>
    <div class="card box-shadow table-pagamentos px-2 pt-2">
      <div class="row">
        <div class="col">
          <p class="texto-grafico-contador"><strong>Período vigente: </strong>inicia no dia 12/11 e finaliza em 12/12</p>
        </div>
        <div class="col">
          <button type="button" class="ml-auto float-right btn btn-default">
            <i class="fas fa-file-invoice-dollar"></i> Gerar boleto
          </button>
        </div>
      </div>
      <table-pagamentos :token="token"></table-pagamentos>
    </div>
  </div>
</template>

<script>
  import TablePagamentos from './TablePagamentos.vue'
  export default {
    name: 'informacoes-pagamentos',
    props: { token: String },
    components: {
      TablePagamentos
    }
  }
</script>

<style lang="scss">
</style>
