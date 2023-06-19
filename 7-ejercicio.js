


function filterByTerm(array, term) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(term) !== -1) {
            result.push(array[i]);
        }
    }
    return result;
}


console.log(filterByTerm(["ana", "santi", "nico", "anastasia"], 'ana'));









