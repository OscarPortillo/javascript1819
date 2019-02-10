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
        mostrarOcultar();
        // console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //        document.write("<p>Finalizando</p>");
    });
}
var pintarDatos = function () {
    var menu = $("#menu");
    var ul = document.createElement("ul");
    var id = 1;
    for (m of objeto.menu) {
        if (m.hijos != null) {
            menu.append(ul);
            $(ul).append("<li id=" + "nivel" + id + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a><button class='boton'>&harr;</button></li>");
            //console.log(m)
            $("#nivel" + id).children().hide();
            $(".boton").show();
            verHijos(m, id);

        } else {
            $(ul).append("<li id=" + "nivel" + id + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a></li>");
            //console.log(m)
        }
        id++;
    }
}

function verHijos(obj, id) {
    var id2 = 1;
    var ul = document.createElement("ul");
    //console.log(id)
    for (m of obj.hijos) {
        if (m.hijos != null) { //compruebo si tiene hijos
            //si tiene hijos muetro botones y llamo de nuevo ala funcion 
            $("#nivel" + id).append(ul);           
            $(ul).append("<li id=" + "nivel" + id + "" + id2 + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a><button class='boton'>&harr;</button></li>");   $("#nivel" + id + "" + id2 ).children().hide();
            $(".boton").show();
            verHijos(m, id + "" + id2); //le paso el id del li anterior para que le añada otro ul anidado
        } else { //si no tiene hijos no muestro botones
            $("#nivel" + id).append(ul);
            $(ul).append("<li id=" + "nivel" + id + id2 + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a></li>");
        }
        id2++; //le sumo 1 a id2 para que sea nievel11 nievel12 etc...
    }
}

function mostrarOcultar() {
    lista = document.getElementsByTagName("button");
    for (let i of lista) {
        //console.log(i)
        i.onclick = function () {
            if ($(this).siblings().is(":visible")) {
                console.log("El hijueputa esta escondido")
                $(this).siblings().hide();
            } else {
                console.log("El hijueputa esta visible")
                $(this).siblings().show();
            }
        }
    }
}
/*
function compruebaHijos(hijo) {
    if (hijo != null) {
        return true;
    } else {
        return false;
    }
}
*/
