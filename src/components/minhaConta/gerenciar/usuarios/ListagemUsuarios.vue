<template>
  <listagem-component ref="listagem" :path="path" :item="usuarios" :itens="usuarios" :secao="secao"
  @excluirUsuarioModal="excluirUsuarioModal" @alterarUsuarioModal="alterarUsuarioModal"></listagem-component>
</template>

<script>
  import ListagemComponent from '../../../shared/utils/ListagemComponent.vue'
  export default {
    name: 'listagem-usuarios',
    props: { dadosUsuario: Object, path: String },
    components: { ListagemComponent },
    data(){
      return{
        secao: 'usuarios',
        usuarios: [
          {
            pagination: { rowsPerPage: 5 }, buscar: true, itens: [ ],
            headers: [
              { campo: 'Nome', value: 'nome' }, { campo: 'ID', value: 'idUser' },
              { campo: 'Usuário', value: 'username' }, { campo: 'E-mail', value: 'email' },
            ]
          }
        ]
      }
    },
    methods:{
      alterarUsuarioModal(usuarioInfo){
        this.$emit('alterarUsuarioModal', usuarioInfo)
      },
      excluirUsuarioModal(usuarioInfo){
        this.$emit('excluirUsuarioModal', usuarioInfo)
      },
      requisicaoUsuarios(usuario){
        var request = {
          idCompany: usuario.idCompany,
          token: this.token
        }
        this.$http.post('https://samm.bankscore.com.br/rest/api/getAllCompanyUsers', request, {//resultados dos gráficos
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (this.usuarios[0].itens.length < response.data.users.length) {
            this.usuarios[0].itens = []
            for (var i = 0; i < response.data.users.length; i++) {
              this.usuarios[0].itens.push({
                nome: response.data.users[i].name, idUser: response.data.users[i].idUser,
                email: response.data.users[i].username, username: response.data.users[i].email
              })
            }
            this.$refs.listagem.pages()
          }
        })
      }
    },
    watch:{
      dadosUsuario(){
        this.requisicaoUsuarios(this.dadosUsuario)
      }
    }
  }
</script>

<style lang="scss">
</style>
