<template>
  <transition name="ul">
    <div :class="classediv">
      <ul :class="classeul">
        <li v-for="item in items" :class="classeli">
          <a :href="item.href" :class="item.classea" data-toggle="tab" role="tab" :aria-controls="item.ariacontrols">{{item.nome}}</a>
          <slot name="content"></slot>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ul-component',
    props: { classeul: String, item: Array, items: Array, classeli: String, classediv: String }
  }
</script>

<style lang="scss">
  .nav-tabs{
    font-size: 0.7rem;
    .nav-link{
      height: 100%;
      text-align: center;
      padding-left: 0.1vw;
      padding-right: 0.1vw;
      color: #41698E;
      font-weight: bold;
      text-transform: uppercase;
      &:hover{
        color: #213345;
      }
    }
  }
</style>
