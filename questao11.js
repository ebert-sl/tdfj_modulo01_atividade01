/* 
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

var prompt = require('prompt-sync')()

let numero = parseFloat(prompt('Digite o número: '))

while (numero > 0) {
  if (numero % 2 == 0) {
    console.log('O número é par.')
  } else if (numero % 2 != 0) {
    console.log('O número é ímpar.')
  }
  numero = parseFloat(prompt('Digite o número: '))
}