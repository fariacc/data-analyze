import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComponent from './components/home/HomePageComponent.vue'
import DashboardComponent from './components/dashboard/DashboardComponent.vue'
import PesquisaVeicularComponent from './components/pesquisas/veicular/PesquisaVeicularComponent.vue'
import PesquisaIndividualComponent from './components/pesquisas/individual/PesquisaIndividualComponent.vue'
import PesquisaAvancadaComponent from './components/pesquisas/avancada/PesquisaAvancadaComponent.vue'
import RelatorioInterativoComponent from './components/pesquisas/relatorioInterativo/RelatorioInterativoComponent.vue'
import LeadsComponent from './components/pesquisas/leads/LeadsComponent.vue'
import ContaComponent from './components/minhaConta/ContaComponent.vue'
import LoginComponent from './components/login/LoginComponent.vue'
import RegisterComponent from './components/register/RegisterComponent.vue'
import ResetPasswordComponent from './components/reset/ResetPasswordComponent.vue'
import ResetarSenhaComponent from './components/reset/ResetarSenhaComponent.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePageComponent
  },
  {
    path: '/home',
    name: 'home',
    component: DashboardComponent
  },
  {
    path: '/veiculos',
    name: 'veiculos',
    component: PesquisaVeicularComponent
  },
  {
    path: '/individualpf',
    name: 'individualpf',
    component: PesquisaIndividualComponent
  },
  {
    path: '/individualpj',
    name: 'individualpj',
    component: PesquisaIndividualComponent
  },
  {
    path: '/avancadapf',
    name: 'avancadapf',
    component: PesquisaAvancadaComponent
  },
  {
    path: '/avancadapj',
    name: 'avancadapj',
    component: PesquisaAvancadaComponent
  },
  {
    path: '/interativopf',
    name: 'interativopf',
    component: RelatorioInterativoComponent
  },
  {
    path: '/interativopj',
    name: 'interativopj',
    component: RelatorioInterativoComponent
  },
  {
    path: '/leadspf',
    name: 'leadspf',
    component: LeadsComponent
  },
  {
    path: '/leadspj',
    name: 'leadspj',
    component: LeadsComponent
  },
  {
    path: '/conta',
    name: 'conta',
    component: ContaComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetPasswordComponent
  },
  {
    path: '/resetarSenha',
    name: 'resetarSenha',
    component: ResetarSenhaComponent
  }
];
