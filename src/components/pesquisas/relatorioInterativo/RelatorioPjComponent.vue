<template>
  <div class="card container-fluid mb-2 box-shadow">
    <header-relatorio-component :dadosUsuario="dadosUsuario">
      <p slot="content">
        <span class="text-danger">Importante: </span>
        A decisão de aprovação ou não de crédito é de exclusiva responsabilidade do concedente. O relatório
        comportamental prestado pela BankScore tem a finalidade de apoiar decisões e jamais deve ser
        utilizado como justificativa para a tomada de decisão. A avaliação de crédito e a decisão pela
        aprovação é de responsabilidade do cliente. A utilização do "Report" não exclui os riscos de
        inadimplência ou significam a garantia da operação.
      </p>
    </header-relatorio-component>
    <informacoes-cadastrais-pj :dadosReport="dadosReport"></informacoes-cadastrais-pj><!-- faltam algumas infos -->
    <enderecos-vinculados-pj :dadosReport="dadosReport"></enderecos-vinculados-pj>
    <analise-financeira-pj :dadosReport="dadosReport"></analise-financeira-pj>
    <classe-risco-inadimplencia-pj :dadosReport="dadosReport"></classe-risco-inadimplencia-pj><!-- falta índice em números -->
    <score-credito-empresa-pj :dadosReport="dadosReport"></score-credito-empresa-pj>
    <recuperacao-credito-pj :dadosReport="dadosReport"></recuperacao-credito-pj><!-- falta índice em números -->
    <relacionamento-mercado-pj :dadosReport="dadosReport"></relacionamento-mercado-pj><!-- falta índice em números -->
    <analise-classe-risco-setor-pj :dadosReport="dadosReport"></analise-classe-risco-setor-pj><!-- falta índice em números -->
    <score-credito-setor-pj :dadosReport="dadosReport"></score-credito-setor-pj><!-- falta índice em números -->
    <quadro-funcionarios-pj :dadosReport="dadosReport"></quadro-funcionarios-pj><!-- falta as escolaridades dos funcionários-->
    <emails-vinculados-pj :dadosReport="dadosReport"></emails-vinculados-pj>
    <telefones-vinculados-pj :dadosReport="dadosReport"></telefones-vinculados-pj>
    <grupo-economico-pj :dadosReport="dadosReport"></grupo-economico-pj><!-- falta as empresas do grupo econômico -->
    <filiais-pj :dadosReport="dadosReport"></filiais-pj><!-- falta as filiais -->
    <socios-vinculados-pj :dadosReport="dadosReport"></socios-vinculados-pj><!-- falta os sócios vinculados -->
    <governanca-pj :dadosReport="dadosReport"></governanca-pj><!-- falta os decisores -->
    <consultas-anteriores-pj :dadosReport="dadosReport"></consultas-anteriores-pj>
    <consultas-publicas-pj></consultas-publicas-pj>
  </div>
</template>

<script>
  import HeaderRelatorioComponent from '../HeaderRelatorioComponent.vue'
  import InformacoesCadastraisPj from './secoesRelatorioPj/InformacoesCadastraisPj.vue'
  import EnderecosVinculadosPj from './secoesRelatorioPj/EnderecosVinculadosPj.vue'
  import AnaliseFinanceiraPj from './secoesRelatorioPj/AnaliseFinanceiraPj.vue'
  import ClasseRiscoInadimplenciaPj from './secoesRelatorioPj/ClasseRiscoInadimplenciaPj.vue'
  import ScoreCreditoEmpresaPj from './secoesRelatorioPj/ScoreCreditoEmpresaPj.vue'
  import RecuperacaoCreditoPj from './secoesRelatorioPj/RecuperacaoCreditoPj.vue'
  import RelacionamentoMercadoPj from './secoesRelatorioPj/RelacionamentoMercadoPj.vue'
  import AnaliseClasseRiscoSetorPj from './secoesRelatorioPj/AnaliseClasseRiscoSetorPj.vue'
  import ScoreCreditoSetorPj from './secoesRelatorioPj/ScoreCreditoSetorPj.vue'
  import QuadroFuncionariosPj from './secoesRelatorioPj/QuadroFuncionariosPj.vue'
  import EmailsVinculadosPj from './secoesRelatorioPj/EmailsVinculadosPj.vue'
  import TelefonesVinculadosPj from './secoesRelatorioPj/TelefonesVinculadosPj.vue'
  import GrupoEconomicoPj from './secoesRelatorioPj/GrupoEconomicoPj.vue'
  import FiliaisPj from './secoesRelatorioPj/FiliaisPj.vue'
  import SociosVinculadosPj from './secoesRelatorioPj/SociosVinculadosPj.vue'
  import GovernancaPj from './secoesRelatorioPj/GovernancaPj.vue'
  import ConsultasAnterioresPj from './secoesRelatorioPj/ConsultasAnterioresPj.vue'
  import ConsultasPublicasPj from './secoesRelatorioPj/ConsultasPublicasPj.vue'
  export default {
    name: 'relatorio-pj-component',
    props: { dadosUsuario: Object, dadosReport: Object },
    components: {
      HeaderRelatorioComponent, InformacoesCadastraisPj, EnderecosVinculadosPj, AnaliseFinanceiraPj, ClasseRiscoInadimplenciaPj,
      ScoreCreditoEmpresaPj, AnaliseClasseRiscoSetorPj, ScoreCreditoSetorPj, RecuperacaoCreditoPj, RelacionamentoMercadoPj,
      QuadroFuncionariosPj, EmailsVinculadosPj, TelefonesVinculadosPj, GrupoEconomicoPj, FiliaisPj, SociosVinculadosPj, GovernancaPj,
      ConsultasAnterioresPj, ConsultasPublicasPj
    }
  }
</script>

<style lang="scss">
  .secao{
    margin-bottom: 1.2vh!important;
  }
  .box-shadow{
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  }
</style>
