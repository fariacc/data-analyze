<template>
  <div>
    <div class="header">E-mails vinculados</div>
    <p class="m-0 bg-cinza p-1" v-if="emails != null"><strong>E-mail(s): </strong>{{emails}}</p>
    <p class="m-0 bg-cinza p-1 mb-2" v-else><strong>E-mail(s): </strong>N/C</p>
  </div>
</template>

<script>
  export default {
    name: 'emails-vinculados-pf',
    props: { dadosReport: Object },
    data(){
      return{
        emails: null
      }
    }
  }
</script>

<style lang="scss">
</style>
