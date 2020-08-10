/*

1 - Expor uma API que recebe um intervalo de datas (leva-se em conta a data de início e de fim) e um estado

Ex: http://localhost/?state=PR&dateStart=2020-05-10&dateEnd=2020-05-18


2 - Consumir as informações do WebService sobre casos de Covid19 disponível no endereço

https://brasil.io/api/dataset/covid19/caso/data/?state=PR&date=2020-05-10


3 - Calcular as top 10 cidades com maior aumento percentual de casos em relação a população total da cidade no período


Exemplos:

Curitiba - 1000 habitantes
01/01 -> 10 casos

31/01 -> 15 casos

Representa um aumento de 5 casos para 1000 habitantes (0.5% de aumento)


São Paulo - 10000 habitantes
01/01 -> 10 casos

31/01 -> 30 casos

Representa um aumento de 20 casos para 10000 habitantes (0.2% de aumento)

*/

const axios = require("axios");


async function buscandoDadosDeCovidDosEstados(dataEntrada, dataFinal, state) {

    let dados = await axios.get("https://brasil.io/api/dataset/covid19/caso/data/?state=" + state + "&date=" + dataEntrada)

    return dados.data.results;
}
let dataEntrada = '2020-05-10';
let dataFinal = '2020-05-18';
let state = 'PR';


let a = 0;
// buscandoDadosDeCovidDosEstados(dataEntrada, dataFinal, state);

async function calculoPercentualDosCasosDeCovid() {
    
    let dados = await buscandoDadosDeCovidDosEstados(dataEntrada, dataFinal, state);

    dados.forEach(function(item, index){
        a++
        if(a < 6){
            console.log(item.city);
        }
    });
}

calculoPercentualDosCasosDeCovid();
