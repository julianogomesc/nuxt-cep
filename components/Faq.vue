<template>
    <div class="accordion mb-5" role="tablist">
        <b-card no-body v-for="item in items" :key="item.name">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="item.name" variant="default">{{item.pergunta}}</b-button>
        </b-card-header>
        <b-collapse :id="item.name" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <b-card-text>{{ item.resposta }}</b-card-text>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: []
      }
    },
    methods:{
        async load(){
            await this.$axios.$get(`./dados/faq.json`)
            .then(r => {
                this.items = r
                // console.log(r)
            })
            .catch(erro => {
                console.log("ERRO: " + erro)
            })
        },
    },
    created(){
        this.load()
    }
}
</script>

<style lang="scss" scoped>
.card{
    background: none !important;
    border: none !important;
}
.card-header{
    background: none !important;
    border-bottom: none !important;
    button{
        border-radius: 0 !important;
        font-weight: bolder;
        text-transform: uppercase;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }
}
.card-text{
    color: #777 !important;
}
</style>