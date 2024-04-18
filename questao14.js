/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

var prompt = require('prompt-sync')()

let contador = 0
let somaNumeros = 0
let numero = parseFloat(prompt('Digite um número: '))

while (numero != 0) {
  somaNumeros += numero
  contador++
  numero = parseFloat(prompt('Digite um número: '))
}

console.log(`Média aritmética: ${(somaNumeros / contador).toFixed(2)}`)