/*
Palíndromo (recursividad):
Descripción: Determinar si una cadena es un palíndromo o no utilizando recursividad. Un palíndromo es una palabra, frase o secuencia que se lee igual de adelante hacia atrás que de atrás hacia adelante.
Entrada: Una cadena de caracteres. Entrada: “radar”
Salida: True si la cadena es un palíndromo, False en caso contrario. Salida: true
*/

function checkPalindrome(word: string): boolean {
  return word === word.split("").reverse().join("");
}

console.log("palindomo: ", checkPalindrome("radar"));
