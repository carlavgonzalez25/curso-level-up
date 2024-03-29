/* 
Factorial de un número:
Descripción: Calcular el factorial de un número entero no negativo n, denotado por n!. El factorial de un número n se define como el producto de todos los enteros positivos menores o iguales a n.
Entrada: Un número entero no negativo n. x ej: 5
Salida: El factorial de n, es decir, n!. Salida: 5x4x3x2x1 = 120
*/

// Enfoque 1
function calculateFactorial(num: number): number {
  let result: number = num;
  for (let i = num - 1; i > 0; i--) {
    result = result * i;
  }
  return result;
}

console.log("factorial 1: ", calculateFactorial(5));

// Enfoque 2, usando recursividad
function calculateFactorial2(num: number, resultado: number = 1): number {
  if (num <= 0) return resultado;
  resultado = resultado * num;
  return calculateFactorial2(num - 1, resultado);
}

console.log("factorial 2: ", calculateFactorial2(5));
