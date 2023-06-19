// Palíndromo: Crea un programa que determine si una palabra o frase ingresada es un 
// palíndromo(se lee igual de izquierda a derecha y de derecha a izquierda, sin tener en cuenta los 
// espacios ni signos de puntuación).

function esPalindromo(palabra) {
    let palabraAlRevez = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraAlRevez += palabra[i];
    }

    return true ? palabra === palabraAlRevez : false;
}


console.log(esPalindromo("neuquen"));

