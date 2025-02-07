function convertidorTemp (t) {
    let fare = (t * (9/5) + 32)
    return fare
} 

function resolvedor (a, b, c, tf){
let raiz;
	if (tf === true){
       raiz = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
    } else {
       raiz = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
    }
   return raiz;
}

function mejorParidad (n){
	if (n % 2 == 0){
  	return true
  } else {
  	return false
  }
}

function peorParidad (n) {
	if (n === 0){
  	return true
  } else if (n === 1) {
   return false
  } else if (n === 2) {
  	return true
  } else if (n === 3) {
  	return false
  } else if (n === 4) {
  	return true
  } else if (n === 5) {
  	return false
  } else if (n === 6) {
  	return true
  } else if (n === 7) {
  	return false
  } else if (n === 8) {
  	return true
  } else if (n === 9) {
  	return false
  } else if (n === 10) {
  	return true
  } else {
  	return false
  }
}

console.log(peorParidad(8))
