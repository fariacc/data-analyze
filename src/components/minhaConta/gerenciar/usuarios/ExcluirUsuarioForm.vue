<template>
  <div class="">
    <div class="">
      <p class="text-center texto-grafico-contador">
        Deseja mesmo excluir o usuário <strong class="text-capitalize">{{usuarioInfo.nome}}</strong>?
      </p>
    </div>
    <div class="text-right">
      <button tipo="button" class="btn btn-default-2" @click.prevent="$emit('closeModal', false)">Cancelar</button>
      <button tipo="button" class="btn btn-default" @click.prevent="excluirUsuario">Excluir usuário</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'excluir-usuario-form',
    props: { usuarioInfo: Object, token: String },
    methods: {
      excluirUsuario(){
        alert('Usuário deletado');
        this.$emit('closeModal', false)
      }
    }
  }
</script>

<style lang="scss">
</style>
