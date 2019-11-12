<template>
  <div class="nav-item dropdown message-area" id="message-area">
    <b-dropdown right>
      <template slot="button-content">
        <div class="count-indicator">
          <i class="fas fa-envelope icon-message"></i>
          <span class="count">{{ mensagens.length }}</span>
        </div>
      </template>
      <p class="text-center dropdown-item p-2 mb-0">
        Você tem <strong>{{ mensagens.length }}</strong> mensagens novas
      </p>
      <b-dropdown-item class="py-1" v-for="(mensagem, key) in mensagens" @click="abrirMensagem(key)">
        <p class="titulo-accordion text-left">{{ mensagem.titulo }}</p>
        <p class="small mb-0">{{ mensagem.criacao }}</p>
      </b-dropdown-item>
    </b-dropdown>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">{{ tituloMensagemModal }}</h3>
      <div slot="body" class="text-center">
        <p>{{ mensagemModal }}</p>
      </div>
      <h5 slot="footer">
        <button tipo="button" class="btn btn-default-2" @click="showModal = false">Fechar</button>
      </h5>
    </modal-component>
  </div>
</template>

<script>
  import ModalComponent from './ModalComponent.vue'
  export default {
    name: 'message-area-component',
    components: { ModalComponent },
    data(){
      return{
        showModal: false, mensagemModal: null, tituloMensagemModal: null,
        mensagens: [
          { titulo: "Fatura fechada", criacao: "Agora", conteudo: "A sua fatura de abril está fechada." },
          { titulo: "Nova feature", criacao: "2 dias atrás", conteudo: "Chegamos com uma nova feature! Agora você pode bláblá" }
        ]
      }
    },
    methods: {
      abrirMensagem(key){
        this.showModal = true
        this.tituloMensagemModal = this.mensagens[key].titulo
        this.mensagemModal = this.mensagens[key].conteudo
      }
    }
  }
</script>

<style lang="scss">
  .message-area{
    list-style: none;
    .dropdown{
      .dropdown-toggle{
        margin-right: 0.5vw;
        background-color: transparent;
        border: 0;
        padding: 0;
        &:after{
          content: none;
        }
        .icon-message{
          font-size: 1.5rem;
          margin-right: 0;
          vertical-align: middle;
        }
        .count-indicator{
          .count{
            position: absolute;
            left: 50%;
            width: 1.2rem;
            height: 1.1rem;
            border-radius: 100%;
            background: #EE4C5B;
            font-size: 75%;
            top: -0.9vh;
            font-weight: bolder;
            line-height: 1rem;
          }
        }
      }
    }
  }
</style>
