window.onload = function () {
    verDatos();
}
var objeto;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./main.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            pintarDivs();
        }
    }
} //verDatos

function pintarDivs(){
    var contenido = document.getElementById("contenido");
    console.log(objeto)
    for( c in objeto){
        var div = document.createElement("div");
        var color =  document.createTextNode(c);
        div.appendChild(color)
        contenido.append(div)
        div.style.background=""+objeto[c]+" ";
        console.log(objeto[c]);
    }
}