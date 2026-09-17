const entrada = require('readline-sync');

const qntPorHora = entrada.questionInt('Digite a quantidade de pecas por hora: ');
const horasTurno = entrada.questionInt('Digite as horas trabalhadas por turno: ');

const prodTotal = qntPorHora * horasTurno;

console.log('\n--- RELATÓRIO DE PRODUÇÃO ---');
console.log(`Pecas produzidas por hora: ${qntPorHora}`);
console.log(`Horas do turno: ${horasTurno}`);
console.log(`Total produzido: ${prodTotal} pecas`);