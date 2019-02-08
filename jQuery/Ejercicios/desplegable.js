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
    var menu = $("#menu");
    var ul = document.createElement("ul");
    var id = 1;
    for (m of objeto.menu) {
        if (m.hijos != null) {
            menu.append(ul);
            $(ul).append("<li id=" +"nivel"+ id + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a><button class='boton'>&rarr;</button></li>");
            //console.log(m)
            verHijos(m, id);
            mostrar();
        } else {
            $(ul).append("<li id=" +"nivel"+ id + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a></li>");
            //console.log(m)
        }
        id++;
    }
}

function verHijos(obj, id) {
    var id2 = 1;
    var ul = document.createElement("ul");
    console.log(id)
    for (m of obj.hijos) {        
        if (m.hijos != null) {//compruebo si tiene hijos
            //si tiene hijos muetro botones y llamo de nuevo ala funcion 
            $("#nivel" + id).append(ul);
            $(ul).append("<li id=" +"nivel"+ id+""+id2 + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a><button class='boton'>&rarr;</button></li>");
            verHijos(m, id+""+id2);//le paso el id del li anterior para que le añada otro ul anidado
        } else {//si no tiene hijos no muestro botones
            $("#nivel" + id).append(ul);
            $(ul).append("<li id=" +"nivel"+ id+id2 + ">" + m.denominacion + "<br><a href='#'>" + m.url + "</a></li>");
        }
        id2++;//le sumo 1 a id2 para que sea nievel11 nievel12 etc...
    }
}
function mostrar(){
    lista = document.getElementsByTagName("button");
    for(let i of lista){
        console.log(i)
        i.onclick= function(){            
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