const entrada = require('readline-sync');

let acumulador = 0;

for (let i = 1; i <= 6; i++) {
    const inspecoes = entrada.questionFloat(`Digite a de pecas com defeito na ${i} pcsDefeito: `);
    acumulador += inspecoes;
}

const media = acumulador / 6;

console.log('\n--- TOTAL E MÉDIA ---');
console.log(`Total medidas: ${acumulador}`);
console.log(`Media das medidas: ${media}`);