const entrada = require('readline-sync');

const pecasPorCiclo = entrada.questionInt('Digite quantas pecas a maquina produz por ciclo: ');

console.log('--- TABELA DE PRODUÇÃO ---');

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const producao = ciclo * pecasPorCiclo;
    console.log(`Ciclo ${ciclo}: ${producao} peças`);
};