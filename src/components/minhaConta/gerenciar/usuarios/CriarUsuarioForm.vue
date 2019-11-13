<template>
  <form class="criar-usuario-form">
    <div class="col-md-10 col-lg-10 form-group mx-auto">
      <div class="row" v-for="(input, key) in inputs">
        <div class="col-md-4 col-lg-4 col-sm-12 mx-auto mt-auto mb-0">
          <label class="control-label">{{input.label}}</label>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12 mx-auto my-auto">
          <input-component v-if="input.tipo == 'text'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
          <input-component v-else-if="input.tipo == 'password'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
          <input-component v-else-if="input.tipo == 'email'" classeinput="form-control" :tipoinput="input.tipo" v-model="input.value"></input-component>
          <the-mask v-else-if="input.name == 'telefone'" class="form-control" v-model="input.value" name="telefone" mask="(##) #####-####"/>
          <the-mask v-else-if="input.name == 'cpf'" class="form-control" v-model="input.value" name="telefone" mask="###.###.###-##"/>
          <radio-component v-else-if="input.tipo == 'radio'" v-model="input.value" :opcoes="input.options" :opcao="input.options" :name="input.name"></radio-component>
        </div>
      </div>
      <span class="invalido text-danger text-center">{{ msgValidacao }}</span>
    </div>
    <div class="text-right">
      <button type="button" class="btn btn-default-2" @click.prevent="$emit('closeModal', false)">Cancelar</button>
      <button type="button" class="btn btn-default" @click.prevent="criarUsuario($event)">Criar usuário</button>
    </div>
  </form>
</template>

<script>
  import CPF from 'gerador-validador-cpf'
  import InputComponent from '../../../shared/inputs/InputComponent.vue'
  import RadioComponent from '../../../shared/inputs/RadioComponent.vue'
  export default {
    name: 'criar-usuario-form',
    props: { dadosUsuario: Object, token: String },
    components: {
      InputComponent, RadioComponent
    },
    data(){
      return{
        msgValidacao: null,
        inputs: [
          { label: "Nome", value: null, tipo: "text", name: "nome" },
          { label: "Login", value: null, tipo: "text", name: "login" },
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
          },
          { label: "Senha", value: null, tipo: "password", name: "senha" },
          { label: "Confirmar senha", value: null, tipo: "password", name: "senhaConfirm" }
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
      criarUsuario(){
        if (this.inputs[0].value != null && this.inputs[1].value != null && CPF.validate(this.inputs[2].value) &&
        this.validEmail(this.inputs[3].value, event) && this.inputs[4].value.length >= 10 && this.inputs[5].value != null &&
        this.inputs[6].value != null && this.inputs[7].value == this.inputs[8].value) {
          alert('Usuário criado')
        }
        else{
          this.msgValidacao = 'Preencha todos os campos corretamente'
          event.preventDefault()
        }
      }
    }
  }
</script>

<style lang="scss">
  .criar-usuario-form{
    .form-group{
      margin-top: 1rem;
      margin-bottom: 0;
    }
    .control-label{
      font-weight: bold;
    }
  }
</style>
