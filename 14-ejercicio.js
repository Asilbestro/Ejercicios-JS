/*
Dado un array de strings tu reto es retornar un string en donde cada elemento del array esté separado por comas,
 para solucionarlo tenes que hacer una funcion que recibe un parámetro de entrada:

words: Un array de strigs.
Dentro del cuerpo de la función joinString debes escribir tu solución.

Ejemplo 1:

Input: ["amor", "sol", "piedra", "día"]
Output: "amor,sol,piedra,día"
solution();

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: "diamonds,hearts,spades"


*/

function joinString(words) {
    let stringWords = '';
    for (let i = 0; i < words.length; i++) {
        stringWords += words[i] + ',';
    }
    return stringWords;
}

// Probando la solución del ejercicio
console.log(joinString(["amor", "sol", "piedra", "día"]));