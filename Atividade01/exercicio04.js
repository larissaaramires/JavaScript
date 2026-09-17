const entrada = require('readline-sync');

const temperatura = entrada.questionFloat('Digite a temperatura da maquina: ');

if (temperatura <= 60) {
    console.log('Status temperatura: NORMAL');
} else if (temperatura > 60 && temperatura <=80){
    console.log('Status temperatura: ATENÇÃO');
} else {
    console.log('Status temperatura: CRÍTICO');
}