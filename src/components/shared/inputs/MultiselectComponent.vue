<template>
  <div>
    <multiselect :disabled="input.disabled" :options="options" v-model="input.value" :multiple="multiple" selectLabel=""
      selectedLabel="Selecionado" openDirection="bottom" deselectLabel="Desmarcar" :searchable="true"
      :close-on-select="false" placeholder="Pesquisar" :taggable="false" @input="$emit('input')"
      @select="$emit('select')" :clear-on-select="false" :internal-search="true">
      <template v-if="multiple == true" slot="selection" slot-scope="{ values, search, isOpen }">
        <span class="multiselect__single" v-if="input.value.length &amp;&amp; !isOpen">
          {{ input.value.length }} opções selecionadas
        </span>
      </template>
    </multiselect>
  </div>
</template>

<script>
  export default {
    name: 'multiselect-component',
    props: {
      input: Object, multiple: Boolean, ufSelecionado: Array
    },
    data(){
      return{
        token: null, options: [], opcoesArray: []
      }
    },
    methods: {
      requisicao(){
        if (this.input.catalog == 'cidade'){
          var data = {
            parametros: { uf: this.ufSelecionado },
            catalogType: this.input.catalog, token: this.token
          }
        }
        else{
          var data = { catalogType: this.input.catalog, token: this.token }
        }
        this.$http.post('https://linkapi', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.data.data != null){
            for (var i = 0; i < response.data.data.length; i++) {
              this.opcoesArray[i] = response.data.data[i]
              if (this.opcoesArray[i].codigo) {
                this.opcoesArray[i] = this.opcoesArray[i].codigo + ' - ' + this.opcoesArray[i].nome
              }
            }
            this.options = this.opcoesArray
          }
        })
      },
      removeDependency(index) {
        this.input.value.splice(index, 1)
      },
    },
    created() {
    	const value = ''
      this.token = sessionStorage.getItem('token')
      this.requisicao()
    },
    watch:{
      ufSelecionado(){
        this.requisicao()
      }
    }
  }
</script>

<style lang="scss">
  .multiselect{
    background-image: linear-gradient(0deg, #41698E 1px, rgba(213, 0, 0, 0) 0), linear-gradient(0deg, rgba(0, 0, 0, 0.2) 1px, transparent 0)!important;
    border: none!important;
    min-height: 34px!important;
    &:after{
      content: none;
    }
    .multiselect__content-wrapper{
      min-width: 100%;
      width: fit-content;
      min-height: 100%;
      height: fit-content;
      .multiselect__option--selected>span{
        padding-right: 8vw;
      }
    }
    .multiselect__tags{
      border: none;
      min-height: 0px;
      padding: 0 20px 0 0px;
      .multiselect__tags-wrap{
        // display: none;
        .multiselect__tag {
          background-color: #213345;
          color: #ffffff;
          border-radius: 6px;
          margin-bottom: 0;
          margin-right: 0.2vw;
          .multiselect__tag-icon{
            &:after{
              color: #F0F0F0!important;
              font-size: 1em!important;
            }
            &:hover{
              color: #F0F0F0!important;
              background-color: transparent;
            }
          }
        }
      }
    }
    .multiselect__select{
      width: 12px;
      padding: 0px 0px 0 3px;
      display: table;
      height: auto;
      margin-top: 8.5px;
      margin-right: 1px;
      &:before{
        border-color: rgba(60,60,60,.5);
        border-width: 3px 3px 0 0;
        display: table;
        height: 10px;
        width: 10px;
        margin-top: 0px;
        transform: rotate(133deg);
      }
    }
    .multiselect__placeholder {
      color: #adadad;
      display: inline-block;
      margin-bottom: 0px;
      padding-top: 2px;
      line-height: 30px;
    }
    .multiselect__single{
      line-height: 30px!important;
      margin-bottom: 0px;
      font-size: 1rem;
    }
    .multiselect__option{
      padding: 7px 5px;
      min-height: 1vh;
      font-size: 1rem;
      &:after{
        height: 0.8vh;
      }
    }
  }
  .resources-list {
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      min-height: 4.5vh;
      border-bottom: 1px solid rgba(51, 51, 51, 0.1);
      position: relative;
      &:last-child {
        border-bottom: none;
      }
      .resource-title{
        font-size: 1em;
        color: #213345;
      }
      .delete-controls {
        position: absolute;
        right: 0;
        width: 1vw;
        text-align: center;
        color: #999;
        cursor: pointer;
        &:hover, :focus{
          color: red;
        }
      }
    }
  }
</style>
