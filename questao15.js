/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

var prompt = require('prompt-sync')()

let somaNumeros = 0
let somaPesos = 0
let numero = parseFloat(prompt('Digite um número: '))
let peso = parseFloat(prompt('Digite o peso do número: '))

while (numero != 0 || peso != 0) {
  somaNumeros += numero * peso
  somaPesos += peso
  numero = parseFloat(prompt('Digite um número: '))
  peso = parseFloat(prompt('Digite o peso do número: '))
}

console.log(`Média ponderada: ${(somaNumeros / somaPesos).toFixed(2)}`)