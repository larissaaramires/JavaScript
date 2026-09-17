const entrada = require('readline-sync');

let acumuladora = 0;

console.log('--- MÉDIA DE CINCO MEDIÇÕES ---');

for (let i = 1; i <= 5; i++){
    const valoresMedia = entrada.questionFloat(`Digite o valor da media ${i}: `);
    acumuladora += valoresMedia;
}

const media = acumuladora / 5;

console.log('\n--- RESULTADOS ---');
console.log(`A soma das médias é: ${acumuladora}`);
console.log(`A média final é: ${media.toFixed(2)}`); 