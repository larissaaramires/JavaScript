const entrada = require('readline-sync');

const nome = entrada.question('Digite o nome do material: ');
const qntAdquirida = entrada.questionInt('Digite a quantidade de material adquirida: ');
const preco = entrada.questionFloat('Digite o preco de cada unidade: ');

const total = qntAdquirida * preco;

console.log('\n--- RELATÓRIO DE MATERIAL ---');
console.log(`Material: ${nome}`);
console.log(`Quantidade adquirida: ${qntAdquirida}`);
console.log(`Preco unitario: R$ ${preco.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);