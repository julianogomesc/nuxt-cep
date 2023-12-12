import Vue from 'vue'

export default () => {
    Vue.filter('onlyFirstDay', function (value){
        if(!value){
            return ''
        } else {
            const dia = value.split('/')
            return dia[0]
        }
    }),
    Vue.filter('dayBarMounth', function (value){
        if(!value){
            return ''
        } else {
            const dia = value.split('/')
            return dia[0] + "/" + dia[1]
        }
    }),
    Vue.filter('dayAndMounth', function (value){
        if(!value){
            return ''
        } else {
            var valor = value.split('/')
            switch(valor[1]) {
                case '01':
                    valor[1] = 'Janeiro'
                    break;
                case '02':
                    valor[1] = 'Fevereiro'
                    break;
                case '03':
                    valor[1] = 'Março'
                    break;
                case '04':
                    valor[1] = 'Abril'
                    break;
                case '05':
                    valor[1] = 'Maio'
                    break;
                case '06':
                    valor[1] = 'Junho'
                    break;
                case '07':
                    valor[1] = 'Julho'
                    break;
                case '08':
                    valor[1] = 'Agosto'
                    break;
                case '09':
                    valor[1] = 'Setembro'
                    break;
                case '10':
                    valor[1] = 'Outubro'
                    break;
                case '11':
                    valor[1] = 'Novembro'
                    break;
                case '12':
                    valor[1] = 'Dezembro'
                    break;
            }
            return valor[0] + ' de ' + valor[1]
        }
        
    })
}