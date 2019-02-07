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
    var id = 1;
    var ul = document.createElement("ul");
    for (m of objeto.menu) {
        console.log(compruebaHijos(m.hijos))
        if (compruebaHijos(m.hijos)) {
            verDatosConHijos(ul,m,id);
        } else {
            verDatosSinHijos(ul,m,id);
        }
        id++;
    }
}

function verDatosConHijos(ul,obj,id) {
    console.log(obj)
    var menu = $("#menu");
    
        menu.append(ul);
        $(ul).append("<li id="+id+">" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a><button class='boton'>&rarr;</button></li>");
    
}

function verDatosSinHijos(ul,obj,id) {
    var menu = $("#menu");
    var ul = document.createElement("ul");
    console.log(obj)
    menu.append(ul);
    $(ul).append("<li id="+id+">" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a></li>");

}

function compruebaHijos(hijo) {
    if (hijo != null) {
        return true;
    } else {
        return false;
    }
}
