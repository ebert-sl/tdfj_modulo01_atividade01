/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou equilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
*/

var prompt = require('prompt-sync')()

const lado1 = parseFloat(prompt('Digite o valor do primeiro lado: '))
const lado2 = parseFloat(prompt('Digite o valor do segundo lado: '))
const lado3 = parseFloat(prompt('Digite o valor do terceiro lado: '))

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log('O triângulo é equilátero.')
  } else if (lado1 != lado2 && lado2 != lado3) {
    console.log('O triângulo é escaleno.')
  } else {
    console.log('O triângulo é isósceles.')
  }
} else {
  console.log('Os lados não formam um triângulo.')
}