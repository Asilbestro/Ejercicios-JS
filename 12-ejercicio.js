/*
Tu reto es retornar Tienes el AS si dentro de array de strings tienes la palabra AS y si no tienes el AS 
entonces deberás retornar un No, tienes el AS, para solucionarlo tenes que hacer
una función que recibe un parámetro de entrada:

numbers: Un array de strigs con nombres de cartas de Poker.
Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:

Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'

Ejemplo 2:

Input: ['diamonds', 'hearts', 'spades']
Output:'No, tienes el AS'


*/

function findAs(deck) {
    let message = 'No tienes el AS';
    for(let i = 0; i < deck.length; i++){
        if(deck[i] === 'AS'){
            message = 'Tienes el AS';
        }
    }
    return message;
}

// Probando la solución del ejercicio
console.log(findAs(['diamonds', 'hearts', 'spades']));