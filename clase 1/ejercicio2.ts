/*
Fibonacci (recursividad):
Descripción: Calcular el n-ésimo número de la secuencia de Fibonacci utilizando recursividad. La secuencia de Fibonacci comienza con 0 y 1, y cada número posterior es la suma de los dos números anteriores.
Entrada: Un número entero no negativo n que indica el índice del número de Fibonacci deseado. Entrada: 7
Salida: El n-ésimo número de Fibonacci. Salida: 13
*/

// first approach
function calculateFibonacci(num: number, arr: number[] = [0, 1]): number {
  if (arr.length > num) return arr[num];
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return calculateFibonacci(num, arr);
}

console.log("fibonacci 1 ", calculateFibonacci(7));

//another aproach
function calculateFibonacci2(num: number): number {
  let fibo = [0, 1];
  for (let i = 0; i < num - 1; i++) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo[num];
}

console.log("fibonacci 2 ", calculateFibonacci2(7));
