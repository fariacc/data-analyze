<template>
  <div class="secao">
    <div class="header">Consultas públicas</div>
    <consultas-publicas-component>
      <tbody slot="content">
        <tr>
          <td>Certidão negativa de débitos trabalhistas do Tribunal Superior do Trabalho</td>
          <td>
            <a href="https://www.sifge.caixa.gov.br/Cidadao/Crf/FgeCfSCriteriosPesquisa.asp" class="link" target="_blank">Consultar</a>
          </td>
        </tr>
        <tr>
          <td>Certidão negativa de débitos na Procuradoria Geral da Fazenda Nacional</td>
          <td>
            <a href="http://www.tst.jus.br/certidao" class="link" target="_blank">Consultar</a>
          </td>
        </tr>
        <tr>
          <td>Certidão negativa do Fundo de Garantia do Tempo de Serviço</td>
          <td>
            <a href="http://servicos.receita.fazenda.gov.br/Servicos/certidao/CNDConjuntaInter/InformaNICertidao.asp?Tipo=1&NI=" class="link" target="_blank">Consultar</a>
          </td>
        </tr>
        <tr>
          <td>Cheque sem fundo</td>
          <td>
            <button id='consulta-ccf' @click="pesquisarCCF()" class="link">CCF</button>
          </td>
        </tr>
        <tr>
          <td>Serasa - Negativação</td>
          <td>
            <button id='consulta-serasa' @click="pesquisarSerasa()" class="link">Serasa</button>
          </td>
        </tr>
      </tbody>
    </consultas-publicas-component>
  </div>
</template>

<script>
  import ConsultasPublicasComponent from '../ConsultasPublicasComponent.vue'
  export default {
    name: 'consultas-publicas-pj',
    components: {
      ConsultasPublicasComponent
    },
    data(){
      return{
      }
    }
  }
</script>

<style lang="scss">

</style>
