/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).

5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

var prompt = require('prompt-sync')()

const nota1 = parseFloat(prompt('Digite a primeira nota: '))
const nota2 = parseFloat(prompt('Digite a segunda nota: '))
const media = (nota1 + nota2) / 2

if (media >= 6) {
  console.log('PARABÉNS! Você foi aprovado.')
} else {
  console.log('Você foi REPROVADO! Estude mais.')
}