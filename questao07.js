/* 
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

var prompt = require('prompt-sync')()

const quantMacas = parseInt(prompt('Digite quantas maçãs quer comprar: '))

let custoMaca = 0

if (quantMacas > 0 && quantMacas <= 12) {
  custoMaca = 0.30
  console.log(`Você comprou ${quantMacas} maçãs. Valor total: R$${(custoMaca * quantMacas).toFixed(2)}`)
} else if (quantMacas > 12) {
  custoMaca = 0.25
  console.log(`Você comprou ${quantMacas} maçãs. Valor total: R$${(custoMaca * quantMacas).toFixed(2)}`)
} else {
  console.log(`Você inseriu um valor inválido.`)
}