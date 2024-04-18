/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

var prompt = require('prompt-sync')()

for (let i = 0; i < 5; i++) {
  let n = prompt('Digite o valor de N: ')
  for (let j = 0; j <= n; j++) {
    console.log(`${j} x ${n} = ${j * n}`)
  }
}