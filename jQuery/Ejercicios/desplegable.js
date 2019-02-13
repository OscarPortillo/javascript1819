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
        pintarDatos();
        mostrarOcultar();
        //console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}
var pintarDatos = function () {
    var menu = $("#menu");
    var ul = document.createElement("ul");
    var id = 1;

    for (let m of objeto.menu) {
        var targetAtr = "";
        var target = m.hasOwnProperty('target') ? m.target : null
        if (target != null) {
            targetAtr = "target='" + target + "'";
        } else {
            targetAtr = "";
        }
        if (m.hijos != null) {
            menu.append(ul);

            $(ul).append("<li id=" + "nivel" + id + "><a class='enlace' href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a><button class='boton'>&darr;</button></li>")
            verHijos(m, id);
        } else {
            $(ul).append("<li id=" + "nivel" + id + "><a href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a></li>");
        }
        id++;
    }
}

function verHijos(obj, id) {
    var id2 = 1;
    var ul = document.createElement("ul");
    for (let m of obj.hijos) {
        var target = m.hasOwnProperty('target') ? m.target : null
        if (target != null) {
            targetAtr = "target='" + target + "'";
        } else {
            targetAtr = "";
        }
        if (m.hijos != null) { //compruebo si tiene hijos
            //si tiene hijos muetro botones y llamo de nuevo ala funcion 
            $("#nivel" + id).append(ul);
            $(ul).append("<li id=" + "nivel" + id + "" + id2 + "><a class='enlace' href='" + m.url + "' "+targetAtr+" >" + m.denominacion + "</a><button class='boton'>&darr;</button></li>");
            verHijos(m, id + "" + id2); //le paso el id del li anterior para que le añada otro ul anidado
        } else { //si no tiene hijos no muestro botones
            $("#nivel" + id).append(ul);
            $(ul).append("<li id=" + "nivel" + id + id2 + "><a href='" + m.url + "' "+targetAtr+">" + m.denominacion + "</a></li>");
        }
        id2++; //le sumo 1 a id2 para que sea nievel11 nievel12 etc...
    }
}

function mostrarOcultar() {
    lista = document.getElementsByTagName("button");
    for (let i of lista) {
        i.onclick = function (e) {
            console.log($(this).html())
            if ($(this).html() == "↓") {
                console.log($(this))
                $(this).siblings().show()
                e.target.innerHTML = "&uarr;"
            } else {
                console.log("esta parriba")
                //$(this).siblings().not(".enlace").hide()
                e.target.innerHTML = "&darr;"
                $($(e.target).parent()).children("ul").hide();

            }
        }
    }
}
/*
function mostrarOcultar() {
    lista = document.getElementsByTagName("button");
    for (let i of lista) {
        if ($(this).siblings().is(":visible")) {
            e.target.innerHTML="&darr;"
            console.log("El wey esta escondido")
            $(this).siblings().hide();
        } else {
            e.target.innerHTML="&uarr;"
            console.log($(this).html())
            console.log("El wey esta visible")
            $(this).siblings().show();
        }
    }
}*/

/*
function compruebaHijos(hijo) {
    if (hijo != null) {
        return true;
    } else {
        return false;
    }
}
*/

//PRUEBA
/*
var asigarEvento = function(){
    $(".boton").click(function(){
       alert("Hola") 
    });
}*/
