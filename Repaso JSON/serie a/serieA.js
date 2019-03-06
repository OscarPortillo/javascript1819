window.onload = function () {
    verDatos();
}
var objetoDatos;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./serieA.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            objetoDatos = objeto
            verDatosDeEquipo(objeto)
            filtrarCiudad(objeto)
            verPorCiudad(objeto)
            ordenarAsc(objeto)
            ordenarDesc(objeto)
        }
    }
} //verDatos

function verDatosDeEquipo(objeto) {
    document.getElementById("titulo").innerHTML=""
    var titulo = document.getElementById("titulo")
    var datos = document.getElementById("datos")
    for (o in objeto) {
        if (Array.isArray(objeto[o])) {
            for (m of objeto[o]) {
                var tr = document.createElement("tr")
                for (p in m) {
                    var td = document.createElement("td")
                    td.innerHTML = m[p]
                    tr.appendChild(td)
                }
                datos.appendChild(tr)
            }
            //console.log("si lo toma como objeto")
        } else {
            //console.log("no lo toma como objeto")
            titulo.innerHTML = objeto[o]
        }
    }
}


function filtrarCiudad(objeto) {
    const mySet = new Set();
    var select = document.getElementById("ciudad")
    for (o in objeto) {
        if (Array.isArray(objeto[o])) {
            for (p of objeto[o]) {
                mySet.add(p.city)
            }
        }
    }
    for (c of mySet) {
        var opc = document.createElement("option")
        opc.appendChild(document.createTextNode(c))
        select.appendChild(opc)

    }
}

function verPorCiudad(objeto) {
    var opcionSeleccionada = document.getElementById("ciudad");
    opcionSeleccionada.addEventListener('change',
        function () {
            var ciudad = this.options[opcionSeleccionada.selectedIndex];
            if (objeto.clubs.filter(a => a.city.includes(ciudad.value))) {
                //console.log("lo tiene")
                var ciudadFiltrada = (objeto.clubs.filter(a => a.city.includes(ciudad.value)))
            }
            //console.log(ciudadFiltrada)
            document.getElementById("datos").innerHTML = ""
            var datos = document.getElementById("datos")
            for (o of ciudadFiltrada) {
                var tr = document.createElement("tr")
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                td1.innerHTML = o.key
                td2.innerHTML = o.name
                td3.innerHTML = o.code
                td4.innerHTML = o.city
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                console.log(tr)
                datos.appendChild(tr)
            }
        });
}

function ordenarAsc(objeto) {
    document.getElementById("asc").onclick = function () {
        console.log(objeto)
        objetoDatos = objeto.clubs.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
            })
        }
    console.log(objetoDatos)
    verDatosDeEquipo(objetoDatos)
    }

    function ordenarDesc(objeto) {

    }
