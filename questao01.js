/* 
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

var prompt = require('prompt-sync')()

const tempCelsius = parseFloat(prompt('Digite o valor da temperatura em Celsius: '))

const tempFahrenheit = tempCelsius * 1.8 + 32

console.log(`${tempCelsius}°C corresponde a ${tempFahrenheit.toFixed(1)}°F.`)