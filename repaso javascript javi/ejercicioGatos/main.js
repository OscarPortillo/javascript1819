const sexoGato = new Set();
const gatoCastrado = new Set();
const gatoRaza = new Set();
var objeto;

window.onload = function () {
    cargarAjax();
}
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function cargarAjax() {
    // alert("funciona");
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;

    http.open("GET", "./gatos.json", true);
    http.send(null);

    function mostrar() {
        // console.log('estamos en mostrar');
        if (http.readyState == 4 && http.status == 200) {
            objeto = JSON.parse(this.responseText);
            mostrarDatos();
            filtrarPorSexo();
            mostrarDatosParaFiltrar();
            rellenarSelects();
        }
    }


    //console.log('salimos mostrar');
}

function mostrarDatos() {
    //console.log(objeto)
    var resultado = document.getElementById("contenedor");
    for (gatos in objeto) {
        for (datos of objeto[gatos]) {
            var ul = document.createElement("ul");
            for (gato in datos) {
                var li = document.createElement("li");
                li.classList.add('list-group-item');
                if (gato == "ruta") {
                    var imagen = document.createElement("img");
                    imagen.src = datos[gato];
                    li.append(imagen);
                } else {
                    li.innerHTML = datos[gato];

                }
                //console.log(li)
                ul.append(li)
            }
            resultado.append(ul);
        }
    }


} //muestra los datos

function mostrarDatosParaFiltrar() {
    for (gatos in objeto) {
        for (datos of objeto[gatos]) {
            for (gato in datos) {
                if (gato == "sexo") {
                    sexoGato.add(datos[gato])
                }
                if (gato == "raza") {
                    gatoRaza.add(datos[gato])
                }
                if (gato == "castrado") {
                    gatoCastrado.add(datos[gato])
                }
            }
        }
    }
} //mostrarDatosParaFiltrar
function rellenarSelects() {
    var selectSexo = document.getElementById("sexo");
    var selectRaza = document.getElementById("raza");
    var selectCastrado = document.getElementById("castrado");
    var opcVacio = document.createElement("option");
    opcVacio.innerHTML=""
    for (sexo of sexoGato) {
        var opcSexo = document.createElement("option");
        opcSexo.innerHTML = sexo;
        selectSexo.append(opcSexo);
    }
    for (castrado of gatoCastrado) {
        var opcCastrado = document.createElement("option");
        opcCastrado.innerHTML = castrado;
        selectCastrado.append(opcCastrado)
    }
    for (raza of gatoRaza) {
        var opcRaza = document.createElement("option");
        opcRaza.innerHTML = raza;
        selectRaza.append(opcRaza)
    }

}

function filtrarPorSexo() {
    var resultado = document.getElementById("contenedor");
    var opcionSeleccionada = document.getElementById("sexo");
    opcionSeleccionada.addEventListener("change",
        function () {
            var sexo = this.options[opcionSeleccionada.selectedIndex];
            console.log(sexo.value)
            if (objeto.gatos.filter(a => a.sexo.includes(sexo.value))) {
                var objetoAux = (objeto.gatos.filter(a => a.sexo.includes(sexo.value)))
            }
            console.log(objeto)
            document.getElementById("contenedor").innerHTML = "";
            for (dato of objetoAux) {
                var ul = document.createElement("ul");
                for (gato in dato) {
                    var li = document.createElement("li");
                    li.classList.add('list-group-item');
                    if (gato == "ruta") {
                        var imagen = document.createElement("img");
                        imagen.src = dato[gato];
                        li.append(imagen);
                    } else {
                        li.innerHTML = dato[gato];

                    }
                    ul.append(li)
                }
                resultado.append(ul)
            }
        });



}
