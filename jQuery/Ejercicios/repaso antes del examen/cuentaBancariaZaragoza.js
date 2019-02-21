$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});
const mySet = new Set();
const mySet2 = new Set();

var cargarAjax = function () {
    $.ajax({
        url: "./cuentaBancariaZaragoza.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        verCuentas(respuesta)
        filtarClase(respuesta)
        mostrarPorClase(respuesta)
        filtarEntidad(respuesta)
        mostrarPorEntidad(respuesta)
        //console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}

function verCuentas(cuentas) {
    var info = "<tr>"
    info += "<td>" + cuentas.totalCount + "</td>"
    info += "<td>" + cuentas.start + "</td>"
    info += "<td>" + cuentas.rows + "</td>"

    info += "</tr>"
    $(".info").append(info)
    var cad = "<tr>"
    //console.log(cuentas)
    cuentas.result.forEach(function (cuenta) {
        cad += "<td>" + cuenta.id + "</td>"
        cad += "<td>" + cuenta.code + "</td>"
        cad += "<td>" + cuenta.title + "</td>"
        cad += "<td>" + cuenta.nif + "</td>"
        cad += "<td>" + cuenta.titular + "</td>"
        cad += "<td>" + cuenta.clase + "</td>"
        cad += "<td>" + cuenta.entidad + "</td>"
        cad += "<td>" + cuenta.iban + "</td>"
        cad += "<td>" + cuenta.fechaContable + "</td>"
        cad += "<td>" + cuenta.saldo + "</td>"
        cad += "<td>" + cuenta.fecha + "</td>"
        //console.log(cuenta)    
        cad += "</tr>"
    })
    $(".infoCuenta").append(cad)
}
var filtarClase = function (cuentas) {
    var opc = $("#filtrarClase")
    cuentas.result.forEach(function (clase) {
        //console.log(clase.clase)
        mySet.add(clase.clase)
    }) //for externo
    //console.log(mySet)
    var cad = ""
    mySet.forEach(function (m) { //creo los options que almaceno en el mapa
        cad += "<option>"
        cad += m + "</option>"
    })
    $("#filtrarClase").append(cad)
}

var filtarEntidad = function (cuentas) {
    var opc = $("#filtrarEntidad")
    cuentas.result.forEach(function (entidad) {
        //console.log(clase.clase)
        mySet2.add(entidad.entidad)
    }) //for externo
    //console.log(mySet)
    var cad = ""
    mySet2.forEach(function (m) { //creo los options que almaceno en el mapa
        cad += "<option>"
        cad += m + "</option>"
    })
    $("#filtrarEntidad").append(cad)
}

function mostrarPorClase(cuentas) {
    $("#filtrarClase").on("change", function () {
        var cad = " "
        $(".infoCuenta").html(cad);
        cad += "<tr>"
        var clase = this.value
        //console.log(clase)
        cuentas.result.forEach(function (cuenta) {
            if (cuenta.clase == "" + clase) { //compruebo que exista el valor que paso por la variable en array
                cad += "<td>" + cuenta.id + "</td>"
                cad += "<td>" + cuenta.code + "</td>"
                cad += "<td>" + cuenta.title + "</td>"
                cad += "<td>" + cuenta.nif + "</td>"
                cad += "<td>" + cuenta.titular + "</td>"
                cad += "<td>" + cuenta.clase + "</td>"
                cad += "<td>" + cuenta.entidad + "</td>"
                cad += "<td>" + cuenta.iban + "</td>"
                cad += "<td>" + cuenta.fechaContable + "</td>"
                cad += "<td>" + cuenta.saldo + "</td>"
                cad += "<td>" + cuenta.fecha + "</td>"
                cad += "</tr>"
            }
        }) //for externo
        $(".infoCuenta").append(cad);
    });
}

function mostrarPorEntidad(cuentas) {
    $("#filtrarEntidad").on("change", function () {
        var cad = " "
        $(".infoCuenta").html(cad);
        cad += "<tr>"
        var entidad = this.value
        
        cuentas.result.forEach(function (cuenta) {
        //console.log(cuenta)
            if (cuenta.entidad == " "+ entidad || cuenta.entidad == entidad) { //hago el or por que en el json hay numeros que tienen un espaco a la izquierda y que pereza arreglarlo 
                cad += "<td>" + cuenta.id + "</td>"
                cad += "<td>" + cuenta.code + "</td>"
                cad += "<td>" + cuenta.title + "</td>"
                cad += "<td>" + cuenta.nif + "</td>"
                cad += "<td>" + cuenta.titular + "</td>"
                cad += "<td>" + cuenta.clase + "</td>"
                cad += "<td>" + cuenta.entidad + "</td>"
                cad += "<td>" + cuenta.iban + "</td>"
                cad += "<td>" + cuenta.fechaContable + "</td>"
                cad += "<td>" + cuenta.saldo + "</td>"
                cad += "<td>" + cuenta.fecha + "</td>"
                cad += "</tr>"
            }
        }) //for externo
        $(".infoCuenta").append(cad);
    });
}