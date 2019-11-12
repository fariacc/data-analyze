<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'informacoes-cadastrais-pf',
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
                  { titulo: [ 'CPF' ], conteudo: [ ] },
                  { titulo: [ 'Nome' ], conteudo: [ ] },
                  { titulo: [ 'Nome da mãe' ], conteudo: [ ] },
                  { titulo: [ 'Sexo', 'Grau de instrução' ], conteudo: [ ] },
                  { titulo: [ 'Data de nascimento', 'É empresário' ], conteudo: [ ] },
                  { titulo: [ 'Idade', 'Óbito' ], conteudo: [ ] },
                  { titulo: [ 'Estado civil', 'Nacionalidade' ], conteudo: [ ] },
                  { titulo: [ 'Profissão' ], conteudo: [ ] }
                ]
              }
            ]
          }
        ]
      }
    },
    created(){
      this.tables[0].linhas[0].bloco[0].conteudo[0] = this.dadosReport.cpf
      this.tables[0].linhas[0].bloco[1].conteudo[0] = this.dadosReport.nome
      this.tables[0].linhas[0].bloco[2].conteudo[0] = this.dadosReport.nome_mae
      if (this.dadosReport.sexo == 'M') {
        this.tables[0].linhas[0].bloco[3].conteudo[0] = 'Masculino'
      }
      else if (this.dadosReport.sexo == 'F') {
        this.tables[0].linhas[0].bloco[3].conteudo[0] = 'Feminino'
      }
      this.tables[0].linhas[0].bloco[3].conteudo[1] = this.dadosReport.escolaridade
      var dia = new Date(this.dadosReport.nascimento).getDate()
      var mes = new Date(this.dadosReport.nascimento).getMonth() + 1
      var ano = new Date(this.dadosReport.nascimento).getFullYear()
      this.dadosReport.nascimento = dia + '/' + mes + '/' + ano
      this.tables[0].linhas[0].bloco[4].conteudo[0] = this.dadosReport.nascimento
      if (this.dadosReport.empresario == 0) {
        this.tables[0].linhas[0].bloco[4].conteudo[1] = 'Não'
      }
      else if (this.dadosReport.empresario == 1) {
        this.tables[0].linhas[0].bloco[4].conteudo[1] = 'Sim'
      }
      this.tables[0].linhas[0].bloco[5].conteudo[0] = this.dadosReport.idade + ' anos'
      if (this.dadosReport.empresario == 0) {
        this.tables[0].linhas[0].bloco[5].conteudo[1] = 'Não'
      }
      else if (this.dadosReport.empresario == 1) {
        this.tables[0].linhas[0].bloco[5].conteudo[1] = 'Sim'
      }
      this.tables[0].linhas[0].bloco[6].conteudo[0] = this.dadosReport.estado_civil
      this.tables[0].linhas[0].bloco[6].conteudo[1] = this.dadosReport.nacionalidade
      this.tables[0].linhas[0].bloco[7].conteudo[0] = this.dadosReport.cbo + ' - ' + this.dadosReport.profissao
    }
  }
</script>

<style lang="scss">
</style>
