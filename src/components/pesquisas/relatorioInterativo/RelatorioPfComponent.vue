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
    <informacoes-cadastrais-pf :dadosReport="dadosReport"></informacoes-cadastrais-pf>
    <enderecos-vinculados-pf :dadosReport="dadosReport"></enderecos-vinculados-pf>
    <analise-financeira-pf :dadosReport="dadosReport"></analise-financeira-pf>
    <aquisicoes-investimentos-pf :dadosReport="dadosReport"></aquisicoes-investimentos-pf>
    <propensao-consumo-pf :dadosReport="dadosReport"></propensao-consumo-pf>
    <score-credito-pf :dadosReport="dadosReport"></score-credito-pf>
    <risco-inadimplencia-pf :dadosReport="dadosReport"></risco-inadimplencia-pf>
    <emails-vinculados-pf :dadosReport="dadosReport"></emails-vinculados-pf>
    <telefones-vinculados-pf :dadosReport="dadosReport"></telefones-vinculados-pf>
    <pessoas-relacionadas-pf :dadosReport="dadosReport"></pessoas-relacionadas-pf>
    <participacao-empresas-pf :dadosReport="dadosReport"></participacao-empresas-pf>
    <fontes-renda-pf :dadosReport="dadosReport"></fontes-renda-pf>
    <consultas-anteriores-pf :dadosReport="dadosReport"></consultas-anteriores-pf>
    <consultas-publicas-pf></consultas-publicas-pf>
  </div>
</template>

<script>
  import HeaderRelatorioComponent from '../HeaderRelatorioComponent.vue'
  import InformacoesCadastraisPf from './secoesRelatorioPf/InformacoesCadastraisPf.vue'
  import EnderecosVinculadosPf from './secoesRelatorioPf/EnderecosVinculadosPf.vue'
  import AnaliseFinanceiraPf from './secoesRelatorioPf/AnaliseFinanceiraPf.vue'
  import AquisicoesInvestimentosPf from './secoesRelatorioPf/AquisicoesInvestimentosPf.vue'
  import PropensaoConsumoPf from './secoesRelatorioPf/PropensaoConsumoPf.vue'
  import ScoreCreditoPf from './secoesRelatorioPf/ScoreCreditoPf.vue'
  import RiscoInadimplenciaPf from './secoesRelatorioPf/RiscoInadimplenciaPf.vue'
  import EmailsVinculadosPf from './secoesRelatorioPf/EmailsVinculadosPf.vue'
  import TelefonesVinculadosPf from './secoesRelatorioPf/TelefonesVinculadosPf.vue'
  import PessoasRelacionadasPf from './secoesRelatorioPf/PessoasRelacionadasPf.vue'
  import ParticipacaoEmpresasPf from './secoesRelatorioPf/ParticipacaoEmpresasPf.vue'
  import FontesRendaPf from './secoesRelatorioPf/FontesRendaPf.vue'
  import ConsultasAnterioresPf from './secoesRelatorioPf/ConsultasAnterioresPf.vue'
  import ConsultasPublicasPf from './secoesRelatorioPf/ConsultasPublicasPf.vue'
  export default {
    name: 'relatorio-pf-component',
    props: { dadosUsuario: Object, dadosReport: Object },
    components: {
      HeaderRelatorioComponent, InformacoesCadastraisPf, EnderecosVinculadosPf, AnaliseFinanceiraPf, AquisicoesInvestimentosPf,
      PropensaoConsumoPf, ScoreCreditoPf, RiscoInadimplenciaPf, EmailsVinculadosPf, TelefonesVinculadosPf, PessoasRelacionadasPf,
      ParticipacaoEmpresasPf, FontesRendaPf, ConsultasAnterioresPf, ConsultasPublicasPf
    }
  }
</script>

<style lang="scss">
</style>
