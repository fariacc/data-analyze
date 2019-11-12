<template>
  <div class="container-fluid">
    <b-form-group :label="labelradio">
      <b-form-radio-group v-model="opcao.value" :name="name" @input="$emit('input', opcao.value)">
        <b-form-radio v-for="(opcao, key) in opcoes" :value="opcao.value" :name="name" :checked="opcao.checked">
          {{opcao.label}}
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: 'radio-component',
    props: {
      opcao: Array, opcoes: Array, name: String, labelradio: String
    },
    data(){
      return{
        checked: Boolean
      }
    },
    methods: {
      clearRadio(){
        this.checked = false;
      }
    }
  }
</script>

<style lang="scss">
  legend{
    font-weight: bold;
  }
  .form-pesquisa{
    .custom-control{
      width: 41%;
    }
  }
</style>
