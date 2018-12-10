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
    http.open("GET", "./ejercicio5.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            mostrarDatos();
            mostrarMacroarea();
            filtrarMacroAreas();
        }
    }
} //verDatos
function mostrarDatos() {
    var div = document.getElementById("respuesta");
    objeto.datos.sort(function (a, b) {
        return a.MACROAREA.localeCompare(b.MACROAREA);
    });

    for (dato of objeto.datos) {

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        td1.innerHTML = dato.MACROAREA;
        td2.innerHTML = dato.ANO;
        td3.innerHTML = dato.EDAD;
        td4.innerHTML = dato.NUMERO_PDI;
        td5.innerHTML = dato.CATEGORIA_CUERPO_ESCALA;
        td6.innerHTML = dato.SEXO;
        div.append(tr);
    }
}

function mostrarMacroarea() {
    var opc = document.getElementById("opciones");
    var array = [];
    var filtrado = [];
    for (dato of objeto.datos) {
        array.push(dato.MACROAREA);
    }
    filtrado = array.unique();
    console.log(filtrado)
    for (op of filtrado) {
        var option = document.createElement("option");
        opc.append(option);
        option.innerHTML = op;
    }
}

function filtrarMacroAreas() {
    var select = document.getElementById("opciones");
    select.addEventListener('change',
        function () {
            var competicion = this.options[select.selectedIndex];
            console.log(competicion.value)
            var macroAreaFiltrada = objeto.datos.filter(a => a.MACROAREA.includes(competicion.value));
            document.getElementById("respuesta").innerHTML = '';
        console.log(macroAreaFiltrada);
            verMacroAreasFiltrada(macroAreaFiltrada);
        });
}

function verMacroAreasFiltrada(macroAreaFiltrada) {
    var div = document.getElementById("respuesta");
    objeto.datos.sort(function (a, b) {
        return a.MACROAREA.localeCompare(b.MACROAREA);
    });

    for (dato of macroAreaFiltrada) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        td1.innerHTML = dato.MACROAREA;
        td2.innerHTML = dato.ANO;
        td3.innerHTML = dato.EDAD;
        td4.innerHTML = dato.NUMERO_PDI;
        td5.innerHTML = dato.CATEGORIA_CUERPO_ESCALA;
        td6.innerHTML = dato.SEXO;
        div.append(tr);
    }
}
