
function desglosarString(cadena, op) {
    let vocales = ["a", "e", "i", "o", "u"];
    let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n','ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let palabra = cadena.toLowerCase()

    if (op === "vocales"){
        let cvocales = 0
        for (let i of palabra){
            if (vocales.includes(i)){
                cvocales++
            }
            
        }
        return cvocales
    } else if (op === "consonantes"){
        let cconsonantes = 0
        for (let i of palabra){
            if (consonantes.includes(i)){
                cconsonantes++
            }
        }
        return cconsonantes
    } 
}

function twoSum(lista, num){
    for (let i of lista){
        for (let j of lista){
            if (i + j === num && i !== j){
                return [lista.indexOf(i), lista.indexOf(j)]
            }
        }
    }
}

function conversionRomana(nromano){
    let conversion = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let arabic = 0
    let n = nromano.split("")
    for (let i = 0; i < n.length; i++){
        if (conversion[n[i]] < conversion[n[i+1]]){
            arabic += conversion[n[i+1]] - conversion[n[i]]
            i++
        } else {
            arabic += conversion[n[i]]
        }
    }
    return arabic
    
}
