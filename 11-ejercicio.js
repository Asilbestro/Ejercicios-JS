/*
Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo tenes que hacer
una función que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 6, 8, 10]
Output: true

Ejemplo 2:

Input: [1, 3, 5, 7, 10, 11]
Output: false

Ejemplo 3:

Input: [1, 3, 5]
Output: false

Ejemplo 4:

Input: []
Output: false


*/

function checkArray(array) {
    let isPar = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            isPar++;
        }
    }
    if (isPar === array.length && isPar !== 0) {
        return true;
    } else {
        return false;
    }
}

// Probando la solución del ejercicio
console.log(checkArray([2,4,8])); // true