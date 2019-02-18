$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});


var cargarAjax = function () {
    $.ajax({
        url: "./desplegable.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        pintarDatos(respuesta.menu);
        mostrarOcultar();
        //console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}
var  ul =""
function pintarDatos(objeto) {
    var id = 1
    ul += "<ul>"
    var li = ""
    for (m of objeto) {
        var targetAtr = "";
        var target = m.hasOwnProperty('target') ? m.target : null
        if (target != null) {
            targetAtr = "target='" + target + "'";
        } else {
            targetAtr = "";
        }
        if (m.hijos) {
            //console.log("tiene hijos")
            ul += "<li><a class='enlace' href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a><button class='boton'>&darr;</button>"
           pintarDatos(m.hijos)
        } else {
            //console.log("no tiene hijos")
            ul+= "<li><a href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a>"
        }
        ul+="</li>"
        id++
    }
    ul += "</ul>"
}

function mostrarOcultar() {
    $("#menu").append(ul)
    lista = document.getElementsByTagName("button");
    for (let i of lista) {
        i.onclick = function (e) {
            //console.log($(this).html())
            if ($(this).html() == "↓") {
                //console.log($(this))
                $(this).siblings().slideDown("slow");
                e.target.innerHTML = "&uarr;"
                console.log(" esta desplegado")
            } else {
                console.log("no esta desplegado")
                e.target.innerHTML = "&darr;"
                $($(e.target).parent()).children("ul").slideUp("slow")

            }
        }
    }
}