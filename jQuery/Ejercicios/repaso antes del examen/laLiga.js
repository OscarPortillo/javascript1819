$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});
const mySet = new Set();

var cargarAjax = function () {
    $.ajax({
        url: "./laLiga.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        verEquipos(respuesta)
        filtarCompeticion(respuesta)
        mostrarPorFiltro(respuesta)
        console.log("hola maría");
        //console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}
var verEquipos = function (equipos) {

    $("#nombre").append(equipos.name)
    var cad = "<tr>"
    equipos.clubs.forEach(function (equipo, index) {
        //console.log(equipo)
        cad += "<td>" + equipo.key + "</td>"
        cad += "<td>" + equipo.name + "</td>"
        cad += "<td>" + equipo.code + "</td>"
        cad += "<td>" + equipo.competiciones + "</td>"
        cad += "</tr>"
    })
    $(".contenedor").append(cad)
}

var filtarCompeticion = function (equipos) {
    var opc = $("#filtrar")
    equipos.clubs.forEach(function (equipo) {
        equipo.competiciones.forEach(function (compe) {
            //console.log(compe)
            mySet.add(compe)//añado al mapa sin repetir
        }) //for interno para las competiciones
    }) //for externo
    //console.log(mySet)
    var cad = ""
    mySet.forEach(function (m) {//creo los options que almaceno en el mapa
        cad += "<option>"
        //console.log(m)
        cad += m + "</option>"
    })
    $("#filtrar").append(cad)
}

function mostrarPorFiltro(equipos) {
    $("#filtrar").on("change", function () {
        var cad = " "
        $(".contenedor").html(cad);
        cad += "<tr>"
        var compe = this.value
        equipos.clubs.forEach(function (equipo) {
            //console.log(compe)
            if (equipo.competiciones.includes(compe)) {//compruebo que exista el valor que paso por la variable en array
                //console.log(equipo.name)
                cad += "<td>" + equipo.key + "</td>"
                cad += "<td>" + equipo.name + "</td>"
                cad += "<td>" + equipo.code + "</td>"
                cad += "<td>" + equipo.competiciones + "</td>"
                cad += "</tr>"
            }

        }) //for externo
        $(".contenedor").append(cad);
    });
}
