/*
Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra 
clave "myKey" y si no existe deberás retornar false, para solucionarlo tenes que hacer
una función que recibe un parámetro de entrada:

array: Un array de strigs.
Dentro del cuerpo de la función findMyKey debes escribir tu solución.

Ejemplo 1:

Input: ["diamonds", "myKey", "spades", "AS"]
Output: 1

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: false
solution();

Ejemplo 3:

Input: ["myKey", "hearts", "spades"]
Output: 0


*/

function findMyKey(array) {
    let indexMyKey = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'myKey') {
            indexMyKey = i;
        }
    }
    return indexMyKey;
}

// Probando la solución del ejercicio
console.log(findMyKey(["diamonds", "myKey", "spades", "AS"]));