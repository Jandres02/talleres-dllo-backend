function findMax(lista) {
    let max = lista[0];
    for (let i of lista) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

function includes(lista, valor) {
    for (let i of lista) {
        if (i === valor) {
            return true;
        }
    }
    return false;
}

function sum (lista) {
    let suma = 0;
    for (let i of lista) {
        suma += i;
    }
    return suma;
}

function missingNumbers(lista){
    mm = [];
    let max = lista [0];
    for(i of lista){
        if(i > max){
            max = i;
        }
    }

    let min = lista[0];
    for(i of lista){
        if(i < min){
            min = i;
        }
    }
    
    for(let i = min; i < max; i++){
        for (let j of lista){
            if(i === j){
                break;
            } else if (j === lista[lista.length - 1]){
                mm.push(i);
            }
        }
    }
    return mm
}
