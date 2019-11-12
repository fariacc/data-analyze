<template>
  <div class="secao">
    <div class="header">Consultas públicas</div>
    <consultas-publicas-component>
      <tbody slot="content">
        <tr>
          <td>Cheque sem fundo</td>
          <td>
            <button @click="pesquisarCCF()" class="link">CCF</button>
          </td>
        </tr>
        <tr>
          <td>Serasa - Negativação</td>
          <td>
            <button @click="pesquisarSerasa()" class="link">Serasa</button>
          </td>
        </tr>
      </tbody>
    </consultas-publicas-component>
  </div>
</template>

<script>
  import ConsultasPublicasComponent from '../ConsultasPublicasComponent.vue'
  export default {
    name: 'consultas-publicas-pf',
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
