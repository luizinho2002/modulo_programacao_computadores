// * Operadores Matématicos

// a = 5;
// b = 7;

// let c = a + b;
// let d = a * b;
// let e = a / b;
// let f = a % b;

// console.log(`O valor que está em c é ${c}`);

// * Operadores Relacionais
// * Servem para verificar se um objeto é igual a outro, maior, etc

// let a = 9;
// let b = 7;
// let c = 9;

// console.log(a > b);
// console.log(b < a);
// console.log(a >= b);
// console.log(b <= a);
// console.log(a == c);
// console.log(a == b);
// console.log(a != b);

// * Programa para verificar se a pessoa tem mais de 18 anos

const prompt = require("readline-sync");
let idade = Number(prompt.question("Digite sua idade: "));

// if (idade >= 18) {
//   console.log("Maior de idade");
// } else {
//   console.log("Menor de idade");
// }

// if (idade >= 18 && idade <= 23) {
//   console.log("Você é jovem");
// } else {
//   console.log("Você é adolescente");
// }

if (idade >= 18 || idade <= 23) {
  console.log("A idade está entre 18 e 23 anos");
} else {
  console.log("A idade não está entre 18 e 23 anos");
}
