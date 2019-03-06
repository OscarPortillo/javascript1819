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
    http.open("GET", "./pais.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            verPaises(objeto)
        }
    }
} //verDatos


function verPaises(objeto) {
    //console.log(objeto)
    var tabla = document.getElementById("contenedor")
    for (dato of objeto) {
        var tr = document.createElement("tr");
        for (o in dato) {
            if (!Array.isArray(dato[o])) {
                var td = document.createElement("td");
                td.innerHTML = dato[o]
                tr.append(td)
            } else {
                for(p of dato[o]){
                    console.log(p)
                    var td = document.createElement("td");
                td.innerHTML = p
                tr.append(td)
                }
            }
        }
        tabla.append(tr)
    }

}
