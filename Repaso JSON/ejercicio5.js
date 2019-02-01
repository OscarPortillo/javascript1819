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
            mostrarElementos();
            desplegableMacroarea();
            filtrarMacroarea();
        }
    }
} //verDatos

function mostrarElementos() {
    var divContenedor = document.getElementById("respuesta");
    objeto.datos.sort(function (a, b) {
        return a.MACROAREA.localeCompare(b.MACROAREA);
    });
    //console.log(objeto)
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
        divContenedor.append(tr);
    }
} //funcion

function desplegableMacroarea() {
    var opc = document.getElementById("opciones");
    var array = [];
    var arrayFiltrado = [];
    for (dato of objeto.datos) {
        array.push(dato.MACROAREA);
    }
    arrayFiltrado = array.unique();
    for (opcion of arrayFiltrado) {
        var option = document.createElement("option");
        opc.append(option);
        option.innerHTML = opcion;
    }
    console.log(arrayFiltrado)
}

function filtrarMacroarea() {
    var select = document.getElementById("opciones");
    select.addEventListener('change',
        function () {
            var macro = this.options[select.selectedIndex];
            //console.log(macro.value)
            var macroAreaFiltrada = objeto.datos.filter(a => a.MACROAREA.includes(macro.value));
        document.getElementById("respuesta").innerHTML = " ";
        verMacroareaFiltrada(macroAreaFiltrada);
        });

} //verFiltradoMacroarea

function verMacroareaFiltrada(macroAreaFiltrada){
       var divContenedor = document.getElementById("respuesta");
    var suma = 0;
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
        suma += dato.NUMERO_PDI;
        td5.innerHTML = dato.CATEGORIA_CUERPO_ESCALA;
        td6.innerHTML = dato.SEXO;
        divContenedor.append(tr);
    }
    var tr2 = document.createElement("tr");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    var td10 = document.createElement("td");
    td7.innerHTML = "Total";
    td8.innerHTML = "";
    td9.innerHTML = "";
    td10.innerHTML = suma;
    tr2.append(td7);
    tr2.append(td8);
    tr2.append(td9);
    tr2.append(td10);
    divContenedor.append(tr2);
    console.log(suma)
}