/* 
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/

var prompt = require('prompt-sync')()

const quantEleitores = parseInt(prompt('Digite a quantidade de eleitores do município: '))
const quantVotosBrancos = parseInt(prompt('Digite a quantidade de votos brancos: '))
const quantVotosNulos = parseInt(prompt('Digite a quantidade de votos nulos: '))
const quantVotosValidos = parseInt(prompt('Digite a quantidade de votos válidos: '))

const porcentagemVotosBrancos = (quantVotosBrancos * 100) / quantEleitores
const porcentagemVotosNulos = (quantVotosNulos * 100) / quantEleitores
const porcentagemVotosValidos = (quantVotosValidos * 100) / quantEleitores

console.log(`\nTotal de Eleitores: ${quantEleitores}`)
console.log(`Percentual de Votos Brancos: ${porcentagemVotosBrancos.toFixed(2)}%`)
console.log(`Percentual de Votos Nulos: ${porcentagemVotosNulos.toFixed(2)}%`)
console.log(`Percentual de Votos Válidos: ${porcentagemVotosValidos.toFixed(2)}%`)