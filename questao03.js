/* 
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

var prompt = require('prompt-sync')()

let valor1 = parseInt(prompt('Digite o primeiro valor: '))
let valor2 = parseInt(prompt('Digite o segundo valor: '))
let valor3 = parseInt(prompt('Digite o terceiro valor: '))
let valor4 = parseInt(prompt('Digite o quarto valor: '))

valor4 = valor1 + valor2 + valor3
valor1 += 25
valor2 *= 3
valor3 *= 0.12

console.log(`Os valores modificados são: ${valor1} | ${valor2} | ${valor3} | ${valor4}`)