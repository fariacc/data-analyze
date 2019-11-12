<template>
  <transition name="accordion">
    <div id="accordion" class="card accordion">
      <div class="card-header" :id="heading" data-toggle="collapse" :data-target="datatarget" aria-expanded="false" :aria-controls="ariacontrols">
        <p class="titulo-accordion">{{titulo}}</p>
      </div>
      <div :id="idcontent" class="collapse" :aria-labelledby="heading" data-parent="#accordion">
        <slot name="content"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'accordion-component',
    props: {
      titulo: String, heading: String, datatarget: String, ariacontrols: String, idcontent: String
    }
  }
</script>

<style lang="scss">
  .accordion{
    .drag-drop{
      border: 2px solid rgba(0,0,0,.25);
      border-style: dashed;
      border-radius: 5px;
      margin: 0.8em;
    }
    .card-header{
      background-color: #ffffff;
      border-bottom: none;
      cursor: pointer;
    }
  }
</style>
