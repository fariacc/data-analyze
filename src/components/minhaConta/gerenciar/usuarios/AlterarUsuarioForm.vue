<template>
  <form class="alterar-usuario-form">
    <div class="col-md-10 col-lg-10 form-group mx-auto">
      <div class="row" v-for="(input, key) in inputs">
        <div class="col-md-4 col-lg-4 col-sm-12 mx-auto mt-auto mb-0">
          <label class="control-label">{{input.label}}</label>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12 mx-auto my-auto">
          <input-component v-if="input.tipo == 'text'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
          <input-component v-else-if="input.tipo == 'email'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
          <the-mask v-else-if="input.name == 'telefone'" class="form-control" v-model="input.value" name="telefone" mask="(##) #####-####"/>
          <the-mask v-else-if="input.name == 'cpf'" class="form-control" v-model="input.value" name="telefone" mask="###.###.###-##"/>
          <radio-component v-else-if="input.tipo == 'radio'" v-model="input.value" :opcoes="input.options" :opcao="input.options" :name="input.name"></radio-component>
        </div>
      </div>
      <span class="invalido text-danger text-center">{{ msgValidacao }}</span>
    </div>
    <div class="text-right">
      <button tipo="button" class="btn btn-default-2" @click.prevent="$emit('closeModal', false)">Cancelar</button>
      <button tipo="button" class="btn btn-default" @click.prevent="alterarUsuario">Alterar usuário</button>
    </div>
  </form>
</template>

<script>
  import CPF from 'gerador-validador-cpf'
  import InputComponent from '../../../shared/inputs/InputComponent.vue'
  import RadioComponent from '../../../shared/inputs/RadioComponent.vue'
  export default {
    name: 'alterar-usuario-form',
    props: { dadosUsuario: Object, usuarioInfo: Object, token: String },
    components: {
      InputComponent, RadioComponent
    },
    data(){
      return{
        msgValidacao: null,
        inputs: [
          { label: "Nome", value: null, tipo: "text", name: "nome" },
          { label: "CPF", value: null, tipo: "cpf", name: "cpf" },
          { label: "E-mail", value: null, tipo: "email", name: "email" },
          { label: "Telefone", value: null, tipo: "telefone", name: "telefone" },
          {
            label: "Permissão do usuário", value: null, name: "permissao", tipo: "radio",
            options: [
              { label: "Usuário comum", value: 1 }, { label: "Usuário avançado", value: 2 }
            ]
          },
          {
            label: "Usuário financeiro", value: null, name: "financeiro", tipo: "radio",
            options: [
              { label: "Sim", value: 1 }, { label: "Não", value: 0 }
            ]
          }
        ]
      }
    },
    methods: {
      validEmail (email, event) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)){
          event.preventDefault()
        }
        else{
          return true
        }
      },
      mostrarDadosUsuarios(){//dados já cadastrados do usuário
        var data = {
          idUser: this.usuarioInfo.idUser,
          token: this.token
        }
        this.$http.post('https://samm.bankscore.com.br/rest/api/getUserById', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.inputs[0].value = response.data.user.name,
          this.inputs[1].value = response.data.user.documento,
          this.inputs[2].value = response.data.user.email,
          this.inputs[3].value = response.data.user.telefone,
          this.inputs[4].value = response.data.user.idUserPermission,
          this.inputs[5].value = response.data.user.boleto
        })
      },
      alterarUsuario(){
        if (this.inputs[0].value != null && CPF.validate(this.inputs[1].value) && this.validEmail(this.inputs[2].value, event)
          && this.inputs[3].value.length >= 10 && this.inputs[4].value != null && this.inputs[5].value != null) {
          var data = {
            idUser: this.usuarioInfo.idUser,
            name: this.inputs[0].value,
            documento: this.inputs[1].value,
            email: this.inputs[2].value,
            telefone: this.inputs[3].value,
            permission: this.inputs[4].value,
            boleto: this.inputs[5].value,
            idCompany: this.dadosUsuario.idCompany,
            instrucoes: 1
          }
          this.$http.post('https://samm.bankscore.com.br/rest/api/updateUser', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            alert(response.data.message)
            this.msgValidacao = ''
          })
        }
        else{
          this.msgValidacao = 'Preencha todos os campos corretamente'
          event.preventDefault()
        }
      }
    },
    mounted(){
      this.mostrarDadosUsuarios()
    }
  }
</script>

<style lang="scss">
  .alterar-usuario-form{
    .form-group{
      margin-top: 1rem;
      margin-bottom: 0;
    }
    .control-label{
      font-weight: bold;
    }
  }
</style>
