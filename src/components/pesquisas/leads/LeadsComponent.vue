<template>
  <div class="leads">
    <navbar-interna-component></navbar-interna-component>
    <leads-header :infoLeads="leads" :parametrosAnterioresGraficos="parametrosAnterioresGraficos" class="col-12"></leads-header>
    <leads-table :infoLeads="leads" class="col-12"></leads-table>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../../shared/NavbarInternaComponent.vue'
  import LeadsHeader from './LeadsHeader.vue'
  import LeadsTable from './LeadsTable.vue'
  export default {
    name: 'leads-component',
    components: {
      NavbarInternaComponent, LeadsHeader, LeadsTable
    },
    data(){
      return{
        leads: null, parametrosAnterioresGraficos: null
      }
    },
    created() {
      this.parametrosAnterioresGraficos = this.$route.params.parametrosAnterioresGraficos
      this.leads = this.$route.params.leads
      if (this.leads == null) {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="scss">
  .leads{
    background-color: #ececec;
    width: 100%;
    height: 100vh;
  }
</style>
