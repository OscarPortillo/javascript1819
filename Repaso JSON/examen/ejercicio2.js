console.clear()
const n = 123415
var crece = false
var decrece = false

N = n.toString()

for (i = 1; i < N.length; i++) {
  //console.log(N.length) hace el bucle por cada digito
    if (N[i - 1] < N[i]) crece = true
    if (N[i - 1] > N[i]) decrece = true
    //otra manera en una linea:
    //N[i]>N[i-1] ? crece =true : decrece=true
}

console.log(crece && decrece);

///otra solucion
var crece = false;
var decrece = false;

const cadena = '12341'
const n = cadena.toString()
const m = n.length
console.log(m)
for (i of m) {
    console.log(i)
    if (i[i - 1] < m) {
        decrece = true;
    } else if (i[i + 1] > m) {
        crece = true;
    }
}
console.log(crece && decrece)