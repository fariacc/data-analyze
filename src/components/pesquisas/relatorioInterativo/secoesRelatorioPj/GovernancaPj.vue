<template>
  <table-component :tables="tables" :table="tables"></table-component>
</template>

<script>
  import TableComponent from '../../../shared/tables/TableComponent.vue'
  export default {
    name: 'governanca-pj',
    props: { dadosReport: Object },
    components: {
      TableComponent
    },
    data(){
      return{
        tables: [
          { header: 'Governança e decisores', linhas: [ ] }
        ]
      }
    },
    created(){
      for (var i = 0; i < 3; i++) {
        this.tables[0].linhas.push({
          subheader: i + ' escalão',
          bloco: [
            { titulo: [ 'Nome' ], conteudo: [ ] },
            { titulo: [ 'Telefone(s)' ], conteudo: [ ] },
            { titulo: [ 'Nível de escolaridade', 'Curso de graduação' ], conteudo: [ ] },
            { titulo: [ 'Experiência profissional', 'Ano' ], conteudo: [ ] },
            { titulo: [ 'Cargo', 'Score' ], conteudo: [ ] }
          ]
        })
        this.tables[0].linhas[i].bloco[0].conteudo[0] = 'nome ' + i
        this.tables[0].linhas[i].bloco[1].conteudo[0] = 'telefone(s) ' + i
        this.tables[0].linhas[i].bloco[2].conteudo[0] = 'escolaridade ' + i
        this.tables[0].linhas[i].bloco[2].conteudo[1] = 'graduacao ' + i
        this.tables[0].linhas[i].bloco[3].conteudo[0] = 'experiencia ' + i
        this.tables[0].linhas[i].bloco[3].conteudo[1] = 'ano ' + i
        this.tables[0].linhas[i].bloco[4].conteudo[0] = 'cargo ' + i
        this.tables[0].linhas[i].bloco[4].conteudo[1] = 'score ' + i
      }
    }
  }
</script>

<style lang="scss">
  .governanca{
    margin-bottom: 1.6vh;
    .escalao{
      background-color: #41698E;
      color: #ffffff;
      font-weight: bold;
      vertical-align: middle;
    }
  }
</style>
