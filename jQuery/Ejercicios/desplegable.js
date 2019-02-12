$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});

var objeto;
var id =1;
var cargarAjax = function () {
    $.ajax({
        url: "./desplegable.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        objeto = respuesta.menu;
        //pintarDatos(respuesta);
        //pintarDatos();
        verHijos(objeto,id);
        mostrarOcultar();
        // console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //        document.write("<p>Finalizando</p>");
    });
}

function verHijos(objeto, id) {
    console.log(objeto)
    var id2 = 1;
    var ul = document.createElement("ul");
    for (m of objeto.hijos) {
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
