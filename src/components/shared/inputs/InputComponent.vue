<template>
  <input @input="$emit('input', $event.target.value)" :class="classeinput" :value="value" :type="tipoinput"
  :v-model="vmodel" :name="name" :id="idinput" :disabled="disabled"/>
</template>

<script>
  export default {
    name: 'input-component',
    props: {
      value: null, classeinput: String, tipoinput: String, vmodel: String, name: String, idinput: String, disabled: String
    }
  }
</script>

<style lang="scss">
  .form-group{
    label{
      text-align: left;
      color: #213345;
      margin-bottom: 0!important;
      font-size: 0.9rem;
      width: 100%;
    }
  }
  .custom-file-control:valid{
    background-image: linear-gradient(0deg,#41698E 2px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
    color: #213345;
    font-weight: lighter;
  }
  .form-control{
    background-image: linear-gradient(0deg,#41698E 1px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.20) 1px,transparent 0);
    border: 0!important;
    box-shadow: none!important;
    padding-left: 0!important;
    padding-top: 0!important;
    &:focus{
      background-image: linear-gradient(0deg,#41698E 2px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
      padding-left: 0;
    }
  }
  .tags-input-root{
    padding-bottom: 1px;
    background-image: linear-gradient(0deg, #41698E 1px, rgba(213, 0, 0, 0) 0), linear-gradient(0deg, rgba(0, 0, 0, 0.2) 1px, transparent 0) !important;
    .tags-input{
      border: none!important;
      padding: 0px;
      input{
        padding: 3px 0px;
      }
      .tags-input-badge {
        background-color: #213345;
        color: #fff;
        float: left;
        border-radius: 4px;
        padding: 0.5vh 0.3vw;
        margin: 0 0.3vw 0.3vh 0;
        font-size: 1em;
        font-weight: normal;
        .tags-input-remove{
          &:before, &:after{
            background: #ffffff;
          }
        }
      }
    }
  }
</style>
