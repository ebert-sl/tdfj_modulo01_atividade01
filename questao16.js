/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let contadorNumeroPrimo = 0
let numero = 100

while (contadorNumeroPrimo < 50) {
  let divisor = 1
  while (divisor <= Math.sqrt(numero)) {
    if (divisor == 1 || divisor == numero) {
      divisor++
    } else {
      if (numero % divisor == 0) {
        numero++
        divisor = 1
      } else {
        divisor++
      }
    }
  }
  console.log(numero)
  numero++
  contadorNumeroPrimo++
}