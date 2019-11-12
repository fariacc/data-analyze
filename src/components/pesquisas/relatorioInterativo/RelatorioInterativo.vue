<template>
  <div class="col-sm-12 col-md-12 col-lg-9">
    <v-app class="relatorio-interativo">
      <v-toolbar class="d-print-none">
        <v-tabs v-model="currentItem">
          <v-tab v-for="item in items" :href="'#tab-'+item.value">
            <span>{{ item.label }}</span>
            <v-btn icon @click="removeItem(item)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-items v-model="currentItem">
        <v-tab-item v-for="item in items" :value="'tab-'+item.value">
          <v-tabs class="abas-relatorio d-print-none">
            <div class="nav-form">
              <ul class="nav nav-tabs">
                <li v-for="(tab, key) in tabsRelatorio" class="nav-item">
                  <a :href="tabsRelatorio[key].href+'-'+item.value" :class="tabsRelatorio[key].classea"
                  data-toggle="tab" role="tab" :aria-controls="tabsRelatorio[key].ariacontrols">{{tabsRelatorio[key].nome}}</a>
                </li>
              </ul>
            </div>
          </v-tabs>
          <div class="tab-content" :value="'tab-' + item.value">
            <div class="tab-pane fade show active">
              <div class="tab-pane fade show active" role="tabpanel" :id="'relatorioGeral-'+item.value">
                <relatorio-pf-component v-if="path == '/interativopf' || path == '/individualpf'" :dadosUsuario="dadosUsuario"
                :dadosReport="dadosReport"></relatorio-pf-component>
                <relatorio-pj-component v-else :dadosUsuario="dadosUsuario" :dadosReport="dadosReport"></relatorio-pj-component>
              </div>
              <div class="tab-pane fade" role="tabpanel" :id="'analiseMercadologica-'+item.value">
                <graficos-interativo-pf v-if="path == '/interativopf'"></graficos-interativo-pf>
                <graficos-interativo-pj v-else></graficos-interativo-pj>
              </div>
              <div class="tab-pane fade" role="tabpanel" :id="'analiseVinculos-'+item.value">
                teiazinha namoral
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-app>
  </div>
</template>

<script>
  import UlComponent from '../../shared/utils/UlComponent.vue'
  import RelatorioPfComponent from './RelatorioPfComponent.vue'
  import RelatorioPjComponent from './RelatorioPjComponent.vue'
  import GraficosInterativoPf from '../relatorioInterativo/graficos/pf/GraficosInterativoPf.vue'
  import GraficosInterativoPj from '../relatorioInterativo/graficos/pj/GraficosInterativoPj.vue'
  export default {
    nome: 'relatorio-interativo',
    components: {
      UlComponent, GraficosInterativoPf, RelatorioPfComponent, GraficosInterativoPj, RelatorioPjComponent
    },
    props: { tabsRelatorio: Array, dadosUsuario: Object, dadosReport: Object },
    data(){
      return{
        path: null, count: 0, currentItem: 'tab-0', items: [ ],
      }
    },
    methods: {
      addItem(dado) {//adicionar um item nas abas superiores do relatório interativo
        this.items.push({ label: dado, value: this.count++ })//adiciona mais um ítem na última posição
      },
      removeItem(item) {
        this.items = this.items.filter((e) => (e.value !== item.value))
      },
    },
    mounted(){
      this.path = this.$route.path
    }
  }
</script>

<style lang="scss">
  .relatorio-interativo{
    background-color: transparent!important;
    .abas-relatorio{
      width: 100%;
      .nav-form{
        width: 100%;
        .nav-tabs{
          margin-top: 1.5vh;
          margin-bottom: 1.5vh;
          .nav-item{
            width: 33.33%;
            .nav-link{
              font-size: 0.8rem;
              border: none;
              background-color: transparent;
              &:hover, &.active{
                border-bottom: 2px solid #213345;
              }
            }
          }
        }
      }
      .v-tabs__bar{
        background-color: transparent!important;
      }
    }
    .tab-content{
      .fade{
        &:not(.show){
          opacity: 0;
          display: none;
        }
      }
    }
  }
  .v-toolbar{
    border: 1px solid rgba(0,0,0,.125);
    border-top: none;
    border-radius: .25rem;
    .v-toolbar__content {
      background-color: #ffffff;
      height: 40px!important;
      .v-tabs__container{
        height: 40px;
        .v-tabs__slider-wrapper{
          width: 0!important;
        }
        .v-tabs__div {
          font-weight: bold;
          max-height: 85%;
          margin-top: auto;
          margin-bottom: auto;
          .v-tabs__item{
            padding-top: 0;
            padding-bottom: 0;
            padding-right: 0;
            &--active{
              background-color: #213345;
              color: #ffffff;
              &:hover{
                text-decoration: none;
                background-color: #213345d6!important;
                color: #ffffff!important;
              }
              i{
                color: #ffffff;
              }
            }
            &:hover{
              text-decoration: none;
              background-color: #d6d6d6;
              color: #213345;
            }
            .v-btn--icon{
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
