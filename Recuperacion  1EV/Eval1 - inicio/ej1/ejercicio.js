A = [5, 2, 3, 8, 9, 10, 1]

//Dado un vector de números enteros positivos calcula el número de elementos del vector que no son divisibles por ningún otro número del vector mayor que 1.

var j = 2;
var numerosPrimos = [];

for (j=0; j < A.length; j++) {

  if (primo(A[j])) {
      //console.log(A[j])
    numerosPrimos.push(A[j]);
  }
  
}

console.log("hay "+numerosPrimos.length+" numeros primos");

function primo(numero) {

console.log(numero)
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    } else {
        console.log("es primo")
    }

  }

  return numero !== 1;
}