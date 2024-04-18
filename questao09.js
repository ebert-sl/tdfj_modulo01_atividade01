/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme abaixo:

1 - Sul
2 - Norte
3 - Leste
4 - Oeste
5 a 6 - Nordeste
7 a 9 - Sudeste
10 a 20 - Centro-Oeste
25 a 50 - Nordeste
Fora dos Intervalos - Produto Importado
*/

var prompt = require('prompt-sync')()

const codigoOrigem = parseInt(prompt('Digite o código de origem do produto: '))

if (codigoOrigem == 1) {
  console.log('Região Sul')
} else if (codigoOrigem == 2) {
  console.log('Região Norte')
} else if (codigoOrigem == 3) {
  console.log('Região Leste')
} else if (codigoOrigem == 4) {
  console.log('Região Oeste')
} else if (codigoOrigem == 5 || codigoOrigem == 6) {
  console.log('Região Nordeste')
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
  console.log('Região Sudeste')
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
  console.log('Região Centro-Oeste')
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
  console.log('Região Nordeste')
} else {
  console.log('Produto Importado')
}