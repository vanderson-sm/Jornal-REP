// Variaveis Globais
const valorTempo = document.querySelector('.date-minutes-value');
const unidadeDeMedida = document.querySelector('.date-minutes-value-uniMed')
const dataInicial = new Date('2025-01-20T22:00:00');
const dataHoje = new Date();


function intervalTime(dataAtual, dataInicial){

    const dataMile = dataAtual - dataInicial;
    const dataMin = (dataMile / 60000);
    const dataHoras = dataMin / 59.996;
    const dataDia = dataHoras / 24;
    const dataSem = dataDia / 7;
    const dataMes = dataSem / 4.345;

    let intervaloDeTempo = [];

    if (dataMin < 60){ // minutos
        intervaloDeTempo[0] = dataMin.toFixed(0);
        if (dataMin <= 1){
            intervaloDeTempo[1] = 'Minuto';
        }
        else{
            intervaloDeTempo[1] = 'Minutos';
        }
        return intervaloDeTempo;
    }

    if (dataHoras <= 24){ // Horas
        intervaloDeTempo[0] = dataHoras.toFixed(0);
        if (dataHoras <= 1){
            intervaloDeTempo[1] = 'Hora';
        }
        else{
            intervaloDeTempo[1] = 'Horas';
        }
        return intervaloDeTempo;
    }

    if (dataDia < 7){ // dias
        intervaloDeTempo[0] = dataDia.toFixed(0);
        if (dataHoras <= 1){
            intervaloDeTempo[1] = 'Dia';
        }
        else{
            intervaloDeTempo[1] = 'Dias';
        }
        return intervaloDeTempo;
    
    }

    if (dataSem <= 4.345){ // Semanas
        intervaloDeTempo[0] = dataSem.toFixed(0);
        if (dataHoras <= 1){
            intervaloDeTempo[1] = 'Semana';
        }
        else{
            intervaloDeTempo[1] = 'Semanas';
        }
        return intervaloDeTempo;
    }

    else{ // Meses
        intervaloDeTempo[0] = dataMes.toFixed(0);
        if (dataHoras <= 1){
            intervaloDeTempo[1] = 'Mês';
        }
        else{
            intervaloDeTempo[1] = 'Mêses';
        }
        return intervaloDeTempo;
    }

} // let intervaloDeTempo = [tempo, unidade de medida];

console.log(intervalTime(dataHoje, dataInicial));
const tempo = intervalTime(dataHoje, dataInicial);

valorTempo.innerHTML = tempo[0];
unidadeDeMedida.innerHTML = tempo[1];

