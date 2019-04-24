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
    http.open("GET", "./verbs.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            crearTabla();
        }
    }
} //verDatos
function crearTabla() {
    var datos = document.getElementById("datos");
    for (verbo in objeto) {
        for (verb of objeto[verbo]) {
            var tr = document.createElement("tr");
            for (ve in verb) {
                var td = document.createElement("td");
                td.innerHTML = verb[ve]
                tr.append(td)
                console.log(verb[ve]);
            }
            datos.append(tr)
        }
    }
}
