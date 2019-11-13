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
            pagination: { rowsPerPage: 5 }, buscar: true,
            itens: [
              { nome: 'Carla', idUser: 1, email: 'carla@data-analyzer.com', username: 'carla' },
              { nome: 'Maria', idUser: 2, email: 'maria@data-analyzer.com', username: 'maria' },
              { nome: 'João', idUser: 3, email: 'joao@data-analyzer.com', username: 'joao' },
              { nome: 'Mateus', idUser: 4, email: 'mateus@data-analyzer.com', username: 'mateus' },
              { nome: 'Elena', idUser: 5, email: 'elena@data-analyzer.com', username: 'elena' },
              { nome: 'Lucas', idUser: 6, email: 'lucas@data-analyzer.com', username: 'lucas' },
              { nome: 'Miguel', idUser: 7, email: 'miguel@data-analyzer.com', username: 'miguel' },
            ],
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
      }
    },
    watch:{
      dadosUsuario(){
        this.$refs.listagem.pages()
      }
    }
  }
</script>

<style lang="scss">
</style>
