<template>
  <div class="loading my-auto mx-auto">
    <v-app>
      <div class="mt-4 text-center">
        <v-progress-circular :size="70" color="#213345" indeterminate></v-progress-circular>
      </div>
    </v-app>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .loading{
    .application{
      &.theme--light{
        background-color: transparent;
      }
    }
  }
</style>
