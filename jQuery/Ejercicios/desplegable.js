$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});

var objeto;

var cargarAjax = function () {
    $.ajax({
        url: "./desplegable.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        objeto = respuesta;
        //pintarDatos(respuesta);
        pintarDatos();
        // console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //        document.write("<p>Finalizando</p>");
    });
}
var pintarDatos = function () {


    var contaHijos = 1;
    for (m of objeto.menu) {
        if (compruebaHijos(m.hijos)) {
            verDatosConHijos(m);
        } else {
            verDatosSinHijos(m);
        }
    }
}

function verDatosConHijos(obj) {
    console.log(obj)
    var menu = document.getElementById("menu");
    var ul = document.createElement("ul");
        menu.append(ul);
        $(ul).append("<li>" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a><button class='boton'>&rarr;</button></li>");
    
}

function verDatosSinHijos(obj) {
    var menu = document.getElementById("menu");
    var ul = document.createElement("ul");
    console.log(obj)
    menu.append(ul);
    $(ul).append("<li>" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a></li>");

}

function compruebaHijos(hijo) {
    if (hijo != null) {
        return true;
    } else {
        return false;
    }
}
