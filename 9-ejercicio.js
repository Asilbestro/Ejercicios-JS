/*
Tienes un array de objetos que representan órdenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Tu reto es retornar la suma total de todas las órdenes de compra, para solucionarlo vas a encontrar una función llamada calcTotal que recibe un parámetro de entrada:

orders: Un array con las órdenes de compra
Dentro del cuerpo de la función calcTotal debes escribir tu solución.

Ejemplo:

Input:
[
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
    total: 20,
    delivered: false,
  }
]

Ouput:
240
*/


function calcTotal(orders) {
    let countTotal = 0;
    for (let i = 0; i < orders.length; i++) {
        countTotal += orders[i].total;
    }
    return countTotal;
}

// Probando la solución del ejercicio
console.log(calcTotal([
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
        total: 20,
        delivered: false,
    }
]));