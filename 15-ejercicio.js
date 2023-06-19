/*
En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un
 formato de URL, se cambian los espacios por un guion (-).

debes hacer una función que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:

Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:

Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:

Input: "Curso de arrays"
Output: "curso-de-arrays"


*/

function parseToURL(title) {
    let titleUrl = '';
    for (let i = 0; i < title.length; i++) {
        if (!(title[i] === ' ')) {
            titleUrl += title[i];
        }else{
            titleUrl += '-';
        }
    }
    return titleUrl;
}

// Probando la solución del ejercicio
console.log(parseToURL("La forma de correr Python"));