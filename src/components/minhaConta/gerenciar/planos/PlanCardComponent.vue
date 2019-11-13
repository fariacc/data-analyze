<template>
  <div class="card-plans">
    <div class="row mx-0">
      <div class="col-sm-6 col-md-12 col-lg-12 px-0 text-center">
        <div class="list-group-item box-shadow px-1 mb-2" v-for="(plano, key) in planos" :key="plano.index">
          <h4 class="card-subtitle text-center">
            <strong>Analyzer</strong><strong :style="plano.cor"> {{ plano.nome }}*</strong>
          </h4>
          <p class="mb-2 text-center">
            Direito a até <strong>{{ plano.resultados }} mil</strong> resultados ao mês
          </p>
          <p v-for="(disponivel, key) in disponiveis" class="mb-2 text-center">
            {{ disponivel.texto }}
          </p>
          <div class="text-center">
            <button type="button" class="btn btn-default text-uppercase" @click="alterarPlano">Contratar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plan-card-component',
    data(){
      return{
        planos: [
          {nome: 'Pro', cor: 'color: #28A745 !important;', resultados: '4', id: 2},
          {nome: 'Bronze', cor: 'color: #CD7F32 !important;', resultados: '10', id: 3},
          {nome: 'Prata', cor: 'color: #969696 !important;', resultados: '19', id: 4},
          {nome: 'Ouro', cor: 'color: #D8BD30 !important;', resultados: '35', id: 6},
          {nome: 'Platina', cor: 'color: #B7B6B5 !important;', resultados: '80', id: 7}
        ],
        disponiveis: [
          {texto: '- Vínculos de sócios e grupos econômicos'},
          {texto: '- Análise de risco de inadimplência'},
          {texto: '- Prevenção à fraude'},
          {texto: '- Localizador PF e PJ'},
          {texto: '- Prospect PF e PJ'},
          {texto: '- Credit score'},
          {texto: '- Download de Leads'}
        ]
      }
    },
    methods: {
      alterarPlano(){
        this.$emit('alterarPlanoModal', 'Alteração de plano aprovada')
      }
    }
  }
</script>

<style lang="scss">
  .card-plans{
    color: #41698E;
    margin-top: 2vh;
    .list-group-item{
      font-size: 0.9rem;
      border-radius: 6px;
      margin-right: 1.74vw;
      display: inline-table;
      &:last-child{
        margin-right: 0px;
      }
      &:hover{
        background-color: #41698E;
        color: #ffffff;
        .btn.btn-default{
          border: 1.5px solid #ffffff;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
  }
</style>
