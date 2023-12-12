<template>
    <div class="accordion" role="tablist">
        <b-row>
            <b-col cols="12" md="6">
                <b-card v-for="(faq, index) in dados.first" :key="faq.id"  no-body class="mb-1 faz">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block v-b-toggle="'ac-'+index" class="text-left">
                            <b-icon-chevron-right font-scale="0.7em" class="mb-1 when-closed"></b-icon-chevron-right><b-icon-chevron-down font-scale="0.7em" class="mb-1 when-open"></b-icon-chevron-down> <strong>{{faq.pergunta}}</strong>
                        </b-button>
                    </b-card-header>
                    <b-collapse :id="'ac-' + index" :visible="index == 0 ? true : false" accordion="my-ac" role="tabpanel">
                        <b-card-body>
                        <b-card-text v-html="faq.reposta"></b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card v-for="(faq, index) in dados.second" :key="faq.id"  no-body class="mb-1 faz">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                        <b-button block v-b-toggle="'accordion-'+index" class="text-left">
                            <b-icon-chevron-right font-scale="0.7em" class="mb-1 when-closed"></b-icon-chevron-right><b-icon-chevron-down font-scale="0.7em" class="mb-1 when-open"></b-icon-chevron-down> <strong>{{faq.pergunta}}</strong>
                        </b-button>
                    </b-card-header>
                    <b-collapse :id="'accordion-' + index" :visible="false" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <b-card-text v-html="faq.reposta"></b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </div>
  </template>
  
  <script>
    export default{
        data(){
            return{
                dados: {
                    first: [
                        {
                            id: 1,
                            pergunta: "Direito Empresarial", 
                            reposta: "Temos o propósito de auxiliar nossos clientes desde a abertura até o encerramento das atividades empresariais, realizando todos os atos necessários para o melhor desenvolvimento do negócio. Ainda, auxiliamos nossos clientes na busca das melhores soluções quanto à estrutura societária, permitindo um melhor desenvolvimento da atividade negocial da empresa."},
                        {
                            id: 2,
                            pergunta: "Direito Tributário", 
                            reposta: "Auxiliamos na orientação jurídica acerca de tributos nas esferas federal, estadual e municipal, planejamento tributário e fiscal, e na análise e gestão do passivo judicial e extrajudicial, bem como no desenvolvimento de teses tributárias. Sempre alerta para trazer a melhor solução tributária para o seu negócio, com o objetivo de reduzir custos e maximizar os lucros."},
                        {
                            id: 3,
                            pergunta: "Direito do Trabalho", 
                            reposta: "Com foco na atuação preventiva, atuamos na análise e elaboração de contrato de trabalho e demais documentos, planejando e implementando estratégias para reduzir a ocorrência de processos, de acordo com a legislação vigente. Ainda, atuamos com expertise, de forma contenciosa, em todas as esferas, desde defesas em auto de infração até os mais complexos litígios, visando a defesa patrimonial da empresa e a redução de danos."},
                    ],
                    second: [
                        {
                            id: 4,
                            pergunta: "Direito Contratual", 
                            reposta: "Atuamos na consultoria e assessoria de questões contratuais, desde o acompanhamento da negociação até a perfectibilização dos instrumentos negociais. No caso de quebra contratual, atuamos no ajuizamento de demandas, com agilidade, visando o cumprimento das obrigações pactuadas."},
                        {
                            id: 5,
                            pergunta: "Direito Médico", 
                            reposta: "Com atuação especializada, exclusivamente, para profissionais de saúde, clínicas e hospitais, auxiliando na prevenção, desde a análise e elaboração de toda a documentação necessária, visando a otimização da relação médico-paciente, para o melhor desenvolvimento do negócio. Atuamos, ainda, de forma contenciosa, na defesa de profissionais de saúde, desde processos éticos-disciplinares até os mais complexos processos judiciais."},
                        {
                            id: 6,
                            pergunta: "Recuperação de Crédito", 
                            reposta: "Atuamos de forma ágil, com inúmeras ações de sucesso, buscando a recuperação de ativos financeiros para clientes, mediante a negociação, medidas extrajudiciais e judiciais, visando a mais rápida recuperação dos créditos inadimplidos perante terceiros."},
                    ]
                } 
            }
        }
    }
  </script>