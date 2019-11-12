<template>
  <div class="card container-fluid mb-2 box-shadow">
    <header-relatorio-component>
      <p slot="content">
        <span class="text-danger">Importante: </span>
        A BankScore busca informações em inúmeras fontes públicas e privadas, minimizando amplamente o risco
        nas operações de compra e venda de veículos. Porém, é importante alertar que não é possível garantir
        100% das informações sobre os veículos, uma vez que algumas informações podem não constar na case de
        dados das fontes utilizadas. Assim, a BankScore não se responsabiliza pela ausência de alguma
        informação no momento da pesquisa.
      </p>
    </header-relatorio-component>
    <informacoes-veiculo></informacoes-veiculo>
    <bloqueios-diversos></bloqueios-diversos>
    <sinistros-flagrantes></sinistros-flagrantes>
    <informacoes-importantes></informacoes-importantes>
    <edital-leilao></edital-leilao>
  </div>
</template>

<script>
  import HeaderRelatorioComponent from '../HeaderRelatorioComponent.vue'
  import InformacoesVeiculo from './secoesRelatorioVeicular/InformacoesVeiculo.vue'
  import BloqueiosDiversos from './secoesRelatorioVeicular/BloqueiosDiversos.vue'
  import SinistrosFlagrantes from './secoesRelatorioVeicular/SinistrosFlagrantes.vue'
  import InformacoesImportantes from './secoesRelatorioVeicular/InformacoesImportantes.vue'
  import EditalLeilao from './secoesRelatorioVeicular/EditalLeilao.vue'
  export default {
    components: {
      HeaderRelatorioComponent, InformacoesVeiculo, BloqueiosDiversos, SinistrosFlagrantes,
      InformacoesImportantes, EditalLeilao
    }
  }
</script>

<style lang="scss">
</style>
