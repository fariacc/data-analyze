<template>
  <div class="leads-table">
    <table-list-component class="box-shadow" v-if="path == '/leadspf'" :tables="tablesListPf" :table="tablesListPf" :search="tablesListPf" :pagination="tablesListPf"></table-list-component>
    <table-list-component class="box-shadow" v-else-if="path == '/leadspj'" :tables="tablesListPj" :table="tablesListPj" :search="tablesListPj" :pagination="tablesListPj"></table-list-component>
  </div>
</template>

<script>
  import TableListComponent from '../../shared/tables/TableListComponent.vue'
  export default {
    name: 'leads-table',
    props: { infoLeads: Array },
    components: { TableListComponent },
    data(){
      return{
        path: null,
        tablesListPf: [
          {
            search: '', pagination: { rowsPerPage: 10, sortBy: 'nome' }, content: [ ],
            headers: [
              // { text: 'CPF', value: 'cpf' }, { text: 'Nome completo', value: 'nome' },
              // { text: 'Sexo', value: 'sexo' }, { text: 'Data da nascimento', value: 'nascimento' },
              // { text: 'Idade', value: 'idade' }, { text: 'Escolaridade', value: 'escolaridade' },
              // { text: 'CBO', value: 'cbo' }, { text: 'Renda', value: 'renda' },
              // { text: 'Classe social', value: 'classe' }, { text: 'Telefones', value: 'telefone' },
              // { text: 'E-mails', value: 'email' }, { text: 'Endereço', value: 'endereco' },
              // { text: 'UF', value: 'uf' }, { text: 'Cidade', value: 'cidade' }, { text: 'Bairro', value: 'bairro' },
              // { text: 'CEP', value: 'cep' }, { text: 'Nome da mãe', value: 'mae' },
              // { text: 'Empresário', value: 'empresario' }
            ]
          }
        ],
        tablesListPj: [
          {
            search: '', pagination: { rowsPerPage: 10, sortBy: 'razao' }, content: [ ],
            headers: [
              // { text: 'CNPJ', value: 'cnpj' }, { text: 'Razão social', value: 'razao' },
              // { text: 'Nome fantasia', value: 'fantasia' }, { text: 'CNAE', value: 'cnae' },
              // { text: 'Endereço', value: 'endereco' }, { text: 'UF', value: 'uf' },
              // { text: 'Cidade', value: 'cidade' }, { text: 'CEP', value: 'cep' },
              // { text: 'Telefones', value: 'telefone' }, { text: 'E-mail', value: 'email' },
              // { text: 'Porte', value: 'porte' }, { text: 'Número de funcionários', value: 'funcionarios' },
              // { text: 'Faturamento aproximado', value: 'faturamento' }
            ]
          }
        ]
      }
    },
    created(){
      for (var i = 0; i < this.infoLeads.length; i++) {
        this.tablesListPf[0].content.push({
          cpf: this.infoLeads[i].cpf, nome: this.infoLeads[i].nome, sexo: this.infoLeads[i].sexo,
          nascimento: this.infoLeads[i].nascimento, idade: this.infoLeads[i].idade + ' anos',
          escolaridade: this.infoLeads[i].escolaridade, cbo: this.infoLeads[i].cbo + ' - ' + this.infoLeads[i].descricao_cbo,
          renda: 'R$ ' + this.infoLeads[i].renda, classe_social: this.infoLeads[i].classe_social,
          telefones: this.infoLeads[i].telefones, emails: this.infoLeads[i].emails,
          endereco: this.infoLeads[i].endereco, uf_principal: this.infoLeads[i].uf_principal,
          cidades: this.infoLeads[i].cidades, bairro: this.infoLeads[i].bairro, cep: this.infoLeads[i].cep,
          nome_mae: this.infoLeads[i].nome_mae, empresario: this.infoLeads[i].empresario
        })
        this.tablesListPj[0].content.push({
          cnpj: this.infoLeads[i].cnpj, razao: this.infoLeads[i].razao,
          nome_fantasia: this.infoLeads[i].nome_fantasia, cnae: this.infoLeads[i].cnae,
          endereco_completo: this.infoLeads[i].endereco_completo, uf_principal: this.infoLeads[i].uf_principal,
          cidade_principal: this.infoLeads[i].cidade_principal, cep: this.infoLeads[i].cep,
          telefones: this.infoLeads[i].telefones, emails: this.infoLeads[i].emails,
          porte: this.infoLeads[i].porte, qtd_funcionarios: this.infoLeads[i].qtd_funcionarios,
          faturamento: 'R$ ' + this.infoLeads[i].faturamento, decisores: this.infoLeads[i].decisores
        })
      }
      var arrayLeads = Object.keys(this.infoLeads[0])
      for (var i = 0; i < arrayLeads.length; i++) {
        this.tablesListPf[0].headers.push(
          { text: arrayLeads[i], value: arrayLeads[i] }
        )
        // if (arrayLeads[i] == 'cnae') {
        //   arrayLeads[i] = 'CNAE'
        // }
        // else if (arrayLeads[i] == 'endereco_completo') {
        //   arrayLeads[i] = 'Endereço'
        // }
        this.tablesListPj[0].headers.push(
          { text: arrayLeads[i], value: arrayLeads[i] }
        )
      }
    },
    mounted(){
      this.path = this.$route.path
    }
  }
</script>

<style lang="scss">
  .leads-table{
    background-color: #ececec;
    padding-bottom: 0.05vh;
    .header{
      padding: 0;
    }
    .v-table__overflow{
      table.v-table{
        thead{
          tr{
            th{
              white-space: nowrap;
              display: table-cell;
              font-size: 0.8rem;
              padding: 0 3vw;
              width: fit-content;
            }
          }
        }
        tbody{
          tr{
            td{
              width: inherit;
              font-size: 0.8rem;
              padding: 0 0.25vw;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
