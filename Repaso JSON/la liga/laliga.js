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
    http.open("GET", "./laliga.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            verEquipos();
            filtrarCompeticion();
            FiltrarCompeticionSeleccionada();
        }
    }
} //verDatos

function verEquipos() {
    var contenedor = document.getElementById("container");
    objeto.clubs.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    for (equipo of objeto.clubs) {
        //console.log(equipo)
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        td1.innerHTML = equipo.key;
        td2.innerHTML = equipo.name;
        td3.innerHTML = equipo.code;
        td4.innerHTML = equipo.competiciones;
        contenedor.append(tr);
    }
}

function filtrarCompeticion() {
    var opc = document.getElementById("opciones");
    var array = [];
    var arrayCompeticion = [];
    var arrayFiltrado = [];
    for (compe of objeto.clubs) {
        array.push(compe.competiciones);

    }
    console.log("*******************")
    for (competicion of array) {
        for (let i = 0; i < competicion.length; i++) {
            arrayCompeticion.push(competicion[i]);
        }
    }
    arrayFiltrado = arrayCompeticion.unique();
    for (opcion of arrayFiltrado) {
        var option = document.createElement("option");
        opc.append(option);
        option.innerHTML = opcion;
    }
}

function FiltrarCompeticionSeleccionada() {
    var select = document.getElementById("opciones");
    select.addEventListener('change',
        function () {
        var competicion = this.options[select.selectedIndex];
        console.log(competicion)
        var compeFiltrada = objeto.clubs.filter( a => a.competiciones.includes(competicion.value));
        console.log(compeFiltrada)
        document.getElementById("container").innerHTML = "";
        verCompeticion(compeFiltrada);
        });
}

function verCompeticion(compeFiltrada){
    console.log("deberiamos")
    var contenedor = document.getElementById("container");
    objeto.clubs.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    for (equipo of compeFiltrada) {
        //console.log(equipo)
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        td1.innerHTML = equipo.key;
        td2.innerHTML = equipo.name;
        td3.innerHTML = equipo.code;
        td4.innerHTML = equipo.competiciones;
        contenedor.append(tr);
    }
}











