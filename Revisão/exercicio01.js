const entrada = require('readline-sync');
const temperatura = entrada.questionFloat('Digite a temperatura: ');

console.log('\n--- CLASSIFICAÇÃO DE TEMPERATURA ---');
if (temperatura <= 60) {
    console.log(`Temperatura: ${temperatura} °C`);
    console.log('Classificacao: NORMAL');
} else if (temperatura <= 80) {
    console.log(`Temperatura: ${temperatura} °C`);
    console.log('Classificacao: ATENÇÃO');
} else {
    console.log(`Temperatura: ${temperatura} °C`);
    console.log('Classificacao: CRÍTICA');
}