<template>
  <div>
    <h3 class="text-center card mx-0 box-shadow mt-2">
      <p class="my-1">Resultado de <strong>Leads</strong></p>
    </h3>
    <div v-if="path == '/leadspf'">
      <button type="button" class="btn btn-default box-shadow mr-3" @click="$router.push({
        name: 'avancadapf', params: { parametrosAnterioresGraficos: parametrosAnterioresGraficos } })">
        <i class="fas fa-backward"></i> Para crescer
      </button>
      <button type="button" class="btn btn-default box-shadow" @click="$router.push({
        name: 'interativopf', params: { infoLeads: infoLeads } })">
        Report <i class="fas fa-forward"></i>
      </button>
      <button type="button" class="float-right btn btn-default box-shadow">
        <i class="fas fa-download"></i> Download
      </button>
    </div>
    <div v-else-if="path == '/leadspj'">
      <button type="button" class="btn btn-default box-shadow mr-3" @click="$router.push({
        name: 'avancadapj', params: { parametrosAnterioresGraficos: parametrosAnterioresGraficos } })">
        <i class="fas fa-backward"></i> Para crescer
      </button>
      <button type="button" class="btn btn-default box-shadow" @click="$router.push({
        name: 'interativopj', params: { infoLeads: infoLeads } })">
        Report <i class="fas fa-forward"></i>
      </button>
      <button type="button" class="float-right btn btn-default box-shadow">
        <i class="fas fa-download"></i> Download
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leads-header',
    props: { infoLeads: Array, parametrosAnterioresGraficos: Object },
    data(){
      return{
        path: null
      }
    },
    mounted(){
      this.path = this.$route.path
    }
  }
</script>

<style lang="scss">
</style>
