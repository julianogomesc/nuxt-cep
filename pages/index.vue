<template>
  <div>
    <div class="flex centerY">
      <b-container>
        <div class="bg-white boxshadow item p-3">
          <b-row class="">
            <b-col cols="12">
              <h1 class="mb-0 mt-4">Cadastro de Endereço</h1>
              <span class="subtitle d-block mb-3">com busca por cep</span>
            </b-col>
            <b-col cols="12" md="12" @keypress.enter="dataLoad">
              <!-- com o vue the mask não haverá necessidade de formatar o dado antes de enviar a api -->
              <label for="cep">*CEP:</label>
              <the-mask id="cep" :mask="['#####-###']" v-model="dados.cep" />
            </b-col>
          </b-row>
          <b-overlay :show="load" rounded="sm">
            <b-row class="mb-4">
              <b-col cols="12" md="8" lg="7">
                <label for="endereco">Endereço:</label>
                <input id="endereco" type="text" v-model="dados.endereco" :disabled="dados.endereco == null">
              </b-col>
              <b-col cols="12" md="4" lg="2">
                <label for="numero">Nº:</label>
                <input id="numero" type="text" v-model="dados.numero" :disabled="dados.numero == null">
              </b-col>
              <b-col cols="12" md="4" lg="3">
                <label for="complemento">Complemento:</label>
                <input id="complemento" type="text" v-model="dados.complemento" :disabled="dados.complemento == null">
              </b-col>
              <b-col cols="12" md="4" lg="6">
                <label for="bairro">Bairro:</label>
                <input id="bairro" type="text" v-model="dados.bairro" :disabled="dados.bairro == null">
              </b-col>
              <b-col cols="12" md="4" lg="3">
                <label for="cidade">Cidade:</label>
                <input id="cidade" type="text" v-model="dados.cidade" :disabled="dados.cidade == null">
              </b-col>
              <b-col cols="12" md="4" lg="3">
                <label for="uf">Estado:</label>
                <input id="uf" type="text" v-model="dados.uf" :disabled="dados.uf == null">
              </b-col>
            </b-row>
          </b-overlay>
          <b-row>
            <b-col cols="12">
              <b-button class="float-right" :disabled="dados.endereco === null">Prosseguir</b-button>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
// import { timingSafeEqual } from 'crypto'

export default {
  data(){
    return{
      load: false,
      dados: {
        cep: '',
        endereco: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        uf: null,

      }
    }
  },
  methods:{
    makeToast(variant, title, msg) {
      this.$bvToast.toast(msg, {
        title: title,
        toaster: 'b-toaster-bottom-center',
        variant: variant,
        solid: true
      })
    },
    async dataLoad(){
      this.load = true
      await this.$axios.$get(`${this.dados.cep}/json`)
        .then(r => {
          this.load = false
          this.dados = { 
            cep: r.cep, 
            endereco: r.logradouro, 
            numero: '', 
            complemento: r.complemento, 
            bairro: r.bairro, 
            cidade: r.localidade, 
            uf: r.uf 
          }
        })
        .catch(error => {
          this.makeToast('danger', 'ERRO', error.message)
          this.load = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>