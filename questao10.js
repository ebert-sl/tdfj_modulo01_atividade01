/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 
*/

var prompt = require('prompt-sync')()

const numero = prompt('Digite o número: ')

for (let i = 0; i < 10; i++) {
  console.log(numero)
}