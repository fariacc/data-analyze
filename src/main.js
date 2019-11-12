import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import VueResource from 'vue-resource'
import VueTheMask from 'vue-the-mask'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import money from 'v-money'
import FBSignInButton from 'vue-facebook-signin-button'
import GSignInButton from 'vue-google-signin-button'
// import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import { FCComponent } from "vue-fusioncharts";
// import FusionMaps from 'fusioncharts/fusioncharts.maps'
// import Brazil from 'fusionmaps/maps/fusioncharts.brazil'
import AngularGauge from 'fusioncharts/fusioncharts.widgets'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import VueNumeric from 'vue-numeric'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import VoerroTagsInput from '@voerro/vue-tagsinput'
import '@voerro/vue-tagsinput/dist/style.css'

Vue.use(VueResource)
Vue.use(VueTheMask)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(money, { precision: 4 })
Vue.use(FBSignInButton)
Vue.use(GSignInButton)
// Vue.use(VueFusionCharts, FusionCharts, AngularGauge, Charts, FusionTheme, FusionMaps, Brazil)
Charts(FusionCharts)
Vue.use(VueNumeric)
Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCcm3vVkxpHuO5oY99Q0VzHYEWDe7yAGLs",
    libraries: "places" // necessary for places input
  }
})
Vue.component('GmapCluster', GmapCluster)
Vue.use(AirbnbStyleDatepicker, {
  sundayFirst: true,
  days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  daysShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  colors: { selected: '#41698E', inRange: '#76A8D7', selectedText: '#fff', text: '#565A5C', inRangeBorder: '#41698E', disabled: '#fff' },
  texts: { apply: 'Confirmar', cancel: 'Cancelar' }
})
Vue.component('multiselect', Multiselect)
Vue.component('tags-input', VoerroTagsInput)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
