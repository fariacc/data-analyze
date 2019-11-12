<template>
  <div class="">
    <div v-for="(table, key) in tables">
      <div class="header" v-if="table.header != null">
        {{ table.header }}
      </div>
      <div v-for="linha in table.linhas">
        <div class="subheader" v-if="linha.subheader != null">
          {{ linha.subheader }}
        </div>
        <table class="table tablelist secao">
          <tbody>
            <tr v-for="bloco in linha.bloco">
              <template v-for="(cont, index) in bloco.titulo.length" v-if="bloco.titulo.length != 1"><!-- se 'titulo' possui mais de um elemento -->
                <td class="w-25 titulo">{{ bloco.titulo[index] }}</td>
                <td class="conteudo" v-if="bloco.conteudo[index] == null">N/A</td><!-- se o conteudo é null -->
                <td class="w-25 conteudo" v-else>{{ bloco.conteudo[index] }}</td><!-- se o conteudo não é null -->
              </template>
              <template v-for="(cont, index) in bloco.titulo.length" v-if="bloco.titulo.length == 1"><!-- se 'titulo' possui só um elemento -->
                <td class="w-25 titulo">{{ bloco.titulo[index] }}</td>
                <td class="conteudo" colspan="3" v-if="bloco.conteudo[index] == null">N/A</td><!-- se o conteudo é null -->
                <td class="conteudo" colspan="3" v-else>{{ bloco.conteudo[index] }}</td><!-- se o conteudo não é null -->
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'table-component',
    props: { table: Array, tables: Array }
  }
</script>

<style lang="scss">
  .header{
    background-color: #213345;
    color: #ffffff;
    font-weight: lighter;
    font-size: 1.05rem;
    padding: 0.6vh 0.2vw;
    height: 70%;
    -webkit-print-color-adjust: exact;
  }
  .subheader{
    background-color: #41698E;
    height: 3.8vh;
    color: #ffffff!important;
    font-weight: lighter;
    font-size: 0.9rem;
    padding: 0.5vh 0.2vw;
    -webkit-print-color-adjust: exact;
  }
  table.tablelist{
    margin: 0;
    width: 100.1%;
    -webkit-print-color-adjust: exact;
    thead{
      tr{
        th{
          border: none;
          padding-top: 0.5vh;
          padding-bottom: 0.8vh;
          padding-left: 0.2vw;
        }
      }
    }
    tbody{
      tr{
        td{
          background-color: #ececec;
          border-bottom: 1px solid #ffffff;
          border-right: none;
          border-left: 1px solid #ffffff;
          height: 3.5vh;
          -webkit-print-color-adjust: exact;
          padding: 0.1vh 0.3vw;
          &.titulo{
            font-weight: bold;
            text-align: right;
            font-size: 0.9rem;
          }
          &.conteudo{
            text-align: left;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
</style>
