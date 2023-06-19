// Tienes un array de objetos que representan datos de productos con los siguientes atributos:

// name
// price
// stock
// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19 % con base 
// al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

// Por ejemplo si aplicamos el 19 % de impuestos para un producto con precio de $1000 el 
 // resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

// Para solucionarlo tenes que hacer una función que recibe un parámetro de entrada:

// array: Un array de objetos.
// Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

//     Ejemplo:

// Input:
// [
//     {
//         name: "Product 1",
//         price: 1000,
//         stock: 10
//     },
//     {
//         name: "Product 2",
//         price: 2000,
//         stock: 20
//     }
// ]

// Output:
// [
//     {
//         name: "Product 1",
//         price: 1000,
//         stock: 10,
//         taxes: 190
//     },
//     {
//         name: "Product 2",
//         price: 2000,
//         stock: 20,
//         taxes: 380
//     }
// ]


function addNewAttr(array) {
    for (let i = 0; i < array.length; i++) {
        // Se le agrega una propiedad al objeto, y se le asigna el valor del impusto
        array[i].taxes = Math.floor(array[i].price * 0.19);
    }
    return array;
}

// Probando la solución del ejercicio
console.log(addNewAttr([
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 656,
        stock: 20
    }
]));