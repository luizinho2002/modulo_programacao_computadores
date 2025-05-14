// * Comando de saída de dados
console.log("Olá, mundo!");

console.clear();

// const nome = "Luiz"; // * String
let idade = 22; // * Number
// const peso = 1.77; // * Number
// const casado = false; // * Bool

idade = 23;

console.log(`A idade é ${idade} anos!`);

console.clear();

// * Comando para entrada de dados
const prompt = require("readline-sync");

let nome = prompt.question("Informe seu nome: ");
let idadeDoUsuario = Number(prompt.question("Digite sua idade: "));

console.log(`O nome digitado foi ${nome}`);
console.log(`A idade digitade foi ${idade}`);
