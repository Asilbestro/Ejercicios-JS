/*
Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo tenes que hacer una función que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0
*/

function calcSum(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];
    }
    return count;
}

// Probando la solución del ejercicio
console.log(calcSum([2,4,2]));