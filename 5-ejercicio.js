// Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

// Para solucionarlo vas a encontrar una función llamada filterOrders que recibe un parámetro de entrada:

// array: Un array de objetos
// Dentro del cuerpo de la función filterOrders debes escribir tu solución.

//     Ejemplo:

// Input:
// [
//     {
//         customerName: "Nicolas",
//         total: 100,
//         delivered: true,
//     },
//     {
//         customerName: "Zulema",
//         total: 120,
//         delivered: false,
//     },
//     {
//         customerName: "Santiago",
//         total: 300,
//         delivered: true,
//     }
// ]

// Output:
// [
//     {
//         customerName: "Nicolas",
//         total: 100,
//         delivered: true,
//     },
//     {
//         customerName: "Santiago",
//         total: 300,
//         delivered: true,
//     }
// ]

// Solución 1
function filterOrders(arrays) {
    const filteredOrders = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].total >= 100 && arrays[i].delivered) {
            filteredOrders.push(arrays[i]);
        }
    }
    return filteredOrders;
}

// Probando la solución del ejercicio
console.log(filterOrders([
    {
        customerName: "Nicolas",
        total: 100,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 300,
        delivered: true,
    }
]));


//Solución 2
function filterOrders(array) {
    return array.filter((item) => item?.total >= 100 && item?.delivered)
}
