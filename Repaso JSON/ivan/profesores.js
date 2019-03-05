/* Cargar un JSON con JAVASCRIPT con hijos y sin mostrar el apellido */
window.onload = function () {
    console.clear()
    verDatos();
}

Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

var objeto;


function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./profesores.json", true);
    http.send(null);

    function mostrar() {
        let respuesta = document.getElementById("container");
        let opciones = [];
        let cad = "";
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            verProfes(objeto)
            filtrarNombre(objeto)
            verNombreFiltrado(objeto)
            ordenar(objeto)
        }

    } // si todo va bien

} //fin mostrar
function verProfes(objeto) {
    let datosTabla = document.getElementById("container");
    for (datoProfesores in objeto) {
        for (let profe of objeto[datoProfesores]) {
            var tr = document.createElement("tr")
            for (dato in profe) {
                if (!Array.isArray(profe[dato])) {
                    var td = document.createElement("td")
                    td.innerHTML = profe[dato]
                    tr.append(td)
                } else {
                    for (modulo of profe[dato]) {
                        for (datoModulo in modulo) {
                            var td = document.createElement("td")
                            td.innerHTML = modulo[datoModulo]
                            tr.append(td)
                            //console.log(modulo[datoModulo])
                        }
                    }
                }
            }
            datosTabla.append(tr)
        }
    }
}

function verNombreFiltrado(objeto) {
    const mySet = new Set();
    for (datoProfesores in objeto) {
        for (nombre of objeto[datoProfesores]) {
            //console.log(nombre)
            mySet.add(nombre.Nombre)
        }
    }
    let select = document.getElementById("opciones")
    for (nombre of mySet) {
        let option = document.createElement("option")
        select.append(option)
        option.innerHTML = nombre
    }
}

function filtrarNombre(objeto) {

    var select = document.getElementById("opciones");
    select.addEventListener('change',
        function () {
            var nombre = this.options[select.selectedIndex];
            for (profe in objeto) {
                if (objeto[profe].filter(a => a.Nombre.includes(nombre.value))) {
                    console.log("lo tiene")
                    var profeFiltrado = (objeto[profe].filter(a => a.Nombre.includes(nombre.value)))
                }
            }
            
            console.log(profeFiltrado)
            mostrarCambios(profeFiltrado)

        });
}

function mostrarCambios(objeto) {
    document.getElementById("container").innerHTML = "";
    let datosTabla = document.getElementById("container");
    for (let profe of objeto) {
        var tr = document.createElement("tr")
        for (dato in profe) {
            if (!Array.isArray(profe[dato])) {
                var td = document.createElement("td")
                td.innerHTML = profe[dato]
                tr.append(td)
            } else {
                for (modulo of profe[dato]) {
                    for (datoModulo in modulo) {
                        var td = document.createElement("td")
                        td.innerHTML = modulo[datoModulo]
                        tr.append(td)
                        //console.log(modulo[datoModulo])
                    }
                }
            }
        }
        datosTabla.append(tr)
    }
}

function ordenar(objeto) {
    var select = document.getElementById("ordenar");
    select.addEventListener('change',
        function () {
            var nombre = this.options[select.selectedIndex];
            console.log(nombre.value)
            if (nombre.value == "Ascendente") {
                for (o in objeto) {
                    //console.log(objeto[o])
                    var ordenar = objeto[o].sort(function (a, b) {
                        if (a.Nombre > b.Nombre) {
                            return 1;
                        }
                        if (a.Nombre < b.Nombre) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });
                }
                console.log(ordenar)
                mostrarCambios(ordenar)
            }
        })

}
