<template>
  <div class="informacoes-empresa">
    <p class="m-0 text-center texto-grafico-contador card box-shadow">
      <strong>Informações da empresa</strong>
    </p>
    <div class="card box-shadow form-empresa px-2 pt-2">
      <empresa-form></empresa-form>
    </div>
  </div>
</template>

<script>
  import EmpresaForm from './EmpresaForm.vue'
  export default {
    name: 'informacoes-empresa',
    components: {
      EmpresaForm
    }
  }
</script>

<style lang="scss">
  .informacoes-empresa{
    .form-empresa{
      margin-top: 2vh;
    }
  }
</style>
