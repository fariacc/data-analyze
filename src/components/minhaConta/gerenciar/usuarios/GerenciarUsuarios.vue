<template>
  <div class="gerenciar-usuarios">
    <p class="m-0 text-center texto-grafico-contador card box-shadow"><strong>Gerenciamento de usuários</strong></p>
    <div class="card box-shadow list-users">
      <div class="col">
        <button type="button" class="float-left btn btn-default" @click="criarUsuarioModal">
          <i class="fas fa-user-plus"></i> Criar usuário
        </button>
      </div>
      <listagem-usuarios :path="path" :dadosUsuario="dadosUsuario" @alterarUsuarioModal="alteraUsuarioModal"
      @excluirUsuarioModal="excluiUsuarioModal"></listagem-usuarios>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header" v-if="criarUsuarioShow">Criar novo usuário</h3>
      <h3 slot="header" v-else-if="alterarUsuarioShow">
        Alterar cadastro de <strong class="text-capitalize">{{usuarioInfo.nome}}</strong>
      </h3>
      <h3 slot="header" v-else-if="excluirUsuarioShow">Excluir usuário</h3>
      <criar-usuario-form slot="body" v-if="criarUsuarioShow" :dadosUsuario="dadosUsuario" :token="token"
      @closeModal="closeModal"></criar-usuario-form>
      <alterar-usuario-form slot="body" v-else-if="alterarUsuarioShow" :dadosUsuario="dadosUsuario" :token="token"
      :usuarioInfo="usuarioInfo" @closeModal="closeModal"></alterar-usuario-form>
      <excluir-usuario-form slot="body" v-else-if="excluirUsuarioShow" :token="token"
      :usuarioInfo="usuarioInfo" @closeModal="closeModal"></excluir-usuario-form>
    </modal-component>
  </div>
</template>

<script>
  import ListagemUsuarios from './ListagemUsuarios.vue'
  import ModalComponent from '../../../shared/utils/ModalComponent.vue'
  import CriarUsuarioForm from './CriarUsuarioForm.vue'
  import AlterarUsuarioForm from './AlterarUsuarioForm.vue'
  import ExcluirUsuarioForm from './ExcluirUsuarioForm.vue'
  export default {
    name: 'gerenciar-usuarios',
    props: { dadosUsuario: Object, path: String, token: String },
    components: {
      ListagemUsuarios, ModalComponent, CriarUsuarioForm, AlterarUsuarioForm, ExcluirUsuarioForm
    },
    data(){
      return{
        showModal: false, criarUsuarioShow: false, alterarUsuarioShow: false, excluirUsuarioShow: false,
        usuarioInfo: null
      }
    },
    methods: {
      closeModal(showModal){
        this.showModal = showModal
      },
      criarUsuarioModal(){
        this.showModal = true
        this.criarUsuarioShow = true
        this.alterarUsuarioShow = false
        this.excluirUsuarioShow = false
      },
      alteraUsuarioModal(usuarioInfo){
        this.showModal = true
        this.alterarUsuarioShow = true
        this.criarUsuarioShow = false
        this.excluirUsuarioShow = false
        this.usuarioInfo = usuarioInfo
      },
      excluiUsuarioModal(usuarioInfo){
        this.showModal = true
        this.excluirUsuarioShow = true
        this.alterarUsuarioShow = false
        this.criarUsuarioShow = false
        this.usuarioInfo = usuarioInfo
      }
    }
  }
</script>

<style lang="scss">
  .gerenciar-usuarios{
    .list-users{
      margin-top: 2vh;
    }
  }
</style>
