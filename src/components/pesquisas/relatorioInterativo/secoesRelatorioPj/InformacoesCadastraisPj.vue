<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'informacoes-cadastrais-pj',
    props: { dadosReport: Object },
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          {
            header: 'Informações cadastrais',
            linhas: [
              {
                bloco: [
                  { titulo: [ 'CNPJ' ], conteudo: [ ] },
                  { titulo: [ 'Razão social' ], conteudo: [ ] },
                  { titulo: [ 'Nome fantasia' ], conteudo: [ ] },
                  { titulo: [ 'Data de abertura', 'Idade da empresa' ], conteudo: [ ] },
                  { titulo: [ 'É matriz?', 'Porte da empresa' ], conteudo: [ ] },
                  { titulo: [ 'Setor' ], conteudo: [ ] },
                  { titulo: [ 'Área de atuação' ], conteudo: [ ] },
                  { titulo: [ 'Natureza jurídica' ], conteudo: [ ] },
                  { titulo: [ 'Código da natureza jurídica', 'Classificação da natureza' ], conteudo: [ ] },
                  { titulo: [ 'Situação cadastral', 'Data da situação cadastral' ], conteudo: [ ] },
                  { titulo: [ 'Inscrição SINTEGRA', 'Inscrição SUFRAMA' ], conteudo: [ ] },
                  // { titulo: [ 'Site da empresa', 'Facebook da empresa' ], conteudo: [ 'Pesquisar', 'Pesquisar' ] }
                ]
              }
            ]
          }
        ]
      }
    },
    created(){
      this.tables[0].linhas[0].bloco[0].conteudo[0] = this.dadosReport.cnpj
      this.tables[0].linhas[0].bloco[1].conteudo[0] = this.dadosReport.razao_social
      this.tables[0].linhas[0].bloco[2].conteudo[0] = this.dadosReport.nome_fantasia
      var dia = new Date(this.dadosReport.data_fundacao).getDate()
      var mes = new Date(this.dadosReport.data_fundacao).getMonth() + 1
      var ano = new Date(this.dadosReport.data_fundacao).getFullYear()
      this.dadosReport.data_fundacao = dia + '/' + mes + '/' + ano
      this.tables[0].linhas[0].bloco[3].conteudo[0] = this.dadosReport.data_fundacao
      this.tables[0].linhas[0].bloco[3].conteudo[1] = this.dadosReport.idade + ' anos'
      if (this.dadosReport.matriz) {
        this.tables[0].linhas[0].bloco[4].conteudo[0] = 'Sim'
      }
      else if (!this.dadosReport.matriz){
        this.tables[0].linhas[0].bloco[4].conteudo[0] = 'Não'
      }
      // this.tables[0].linhas[0].bloco[4].conteudo[1] = this.dadosReport.porte
      this.tables[0].linhas[0].bloco[5].conteudo[0] = this.dadosReport.cod_setor
      this.tables[0].linhas[0].bloco[6].conteudo[0] = this.dadosReport.cnae_seguimento
      this.tables[0].linhas[0].bloco[7].conteudo[0] = this.dadosReport.descricao_natureza_juridica
      this.tables[0].linhas[0].bloco[8].conteudo[0] = this.dadosReport.natureza_juridica
      // this.tables[0].linhas[0].bloco[8].conteudo[1] = this.dadosReport.classificacao_natureza_juridica
      this.tables[0].linhas[0].bloco[9].conteudo[0] = this.dadosReport.descricao_situacao_cadastral
      // this.tables[0].linhas[0].bloco[9].conteudo[1] = this.dadosReport.data_situacao_cadastral
      this.tables[0].linhas[0].bloco[10].conteudo[0] = this.dadosReport.sintegra
      // this.tables[0].linhas[0].bloco[10].conteudo[1] = this.dadosReport.suframa
      // this.tables[0].linhas[0].bloco[11].conteudo[0] = this.dadosReport.suframa
      // this.tables[0].linhas[0].bloco[11].conteudo[1] = this.dadosReport.idade
    }
  }
</script>

<style lang="scss">
</style>
