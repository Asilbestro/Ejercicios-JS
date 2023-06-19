// Número primo: Escribe un programa que verifique si un número ingresado por el usuario es primo o no.

function isPrime(number) {
    let divisorCount = 0;
    for (let i = 1; i <= number; i++) {
        const result = number % i;

        if (result === 0) {
            divisorCount++;
        }
    }
    if (module === 2 || number === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(isPrime(87));

