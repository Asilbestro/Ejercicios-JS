/**
Tu reto es retornar true si dentro de array de números al menos uno es un número par, para solucionarlo tenes que hacer
una función que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 3, 5, 7, 10, 11]
Output: true

Ejemplo 2:

Input: [1, 3, 5]
Output: false

Ejemplo 3:

Input: []
Output: false

 */

function checkArray(numbers) {
    let isPar = false;
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) === 0) {
            isPar = true;
        }
    }
    return isPar;
}

// Probando la solución del ejercicio
console.log(checkArray([1,3,1,5,7])); // false