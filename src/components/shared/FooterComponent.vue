<template>
  <div class="footer p-2">
    <img class="mx-auto d-block" src="../../../src/assets/brand-bankscore.svg" alt="Logo BankScore">
    <ul class="nav-footer py-2">
      <li><a href="https://facebook.com/bankscorebureau/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://www.linkedin.com/company/banckscore-information-bureau/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
      <li><a href="https://www.youtube.com/channel/UCWK8vB05iURp2Axm1RhyGcA" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
    </ul>
    <p class="small text-center">
      Score Consumidor é um produto Bankscore Information Bureau<br/>© Copyright 2018
    </p>
  </div>
</template>

<script>
  export default {
    name: 'footer-component',
  }
</script>

<style lang="scss">
  .footer {
    background-color: #213345;
    color: #fff;
    position: bottom;
    .nav-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      li a {
        color: #fff;
        padding-right: 0.5em;
        padding-left: 0.5em;
      }
    }
    img {
      width: 16em;
      filter: brightness(130%);
    }
  }
</style>
