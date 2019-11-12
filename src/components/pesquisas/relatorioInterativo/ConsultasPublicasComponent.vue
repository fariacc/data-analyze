<template>
  <transition name="consulta-publica">
    <table class="table tablelist">
      <thead>
        <tr>
          <th class="subheader">Consulta</th>
          <th class="subheader">Link de acesso</th>
        </tr>
      </thead>
      <slot name="content"></slot>
    </table>
  </transition>
</template>

<script>
  export default {
    name: 'consultas-publicas-component'
  }
</script>

<style lang="scss">
</style>
