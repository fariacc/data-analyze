<template>
  <div class="container-fluid px-1">
    <b-form-group>
      <b-form-checkbox-group @input="$emit('input')" v-model="input.value" name="flavour1" :options="input.options"/>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: 'checkbox-component',
    props: { input: Object }
  }
</script>

<style lang="scss">
</style>
