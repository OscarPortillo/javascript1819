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

function pintarDatos() {
    var id = 1
    var ul = "<ul>"
    var li = ""
    for (m of objeto.menu) {
        var targetAtr = "";
        var target = m.hasOwnProperty('target') ? m.target : null
        if (target != null) {
            targetAtr = "target='" + target + "'";
        } else {
            targetAtr = "";
        }
        if (m.hijos) {
            //console.log("tiene hijos")
            ul += "<li id=" + "nivel" + id + "><a class='enlace' href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a><button class='boton'>&darr;</button></li>"
            verHijos(m,id)
        } else {
            //console.log("no tiene hijos")
            ul+= "<li id=" + "nivel" + id + "><a href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a></li>"
        }
        id++
    }
    ul += "</ul>"
    $("#menu").append(ul)
}

function verHijos(obj, id) {
    console.log("nivel"+id)
    var id2 = 1;
    var ul = "<ul>"
    for (let m of obj.hijos) {
        var target = m.hasOwnProperty('target') ? m.target : null
        if (target != null) {
            targetAtr = "target='" + target + "'";
        } else {
            targetAtr = "";
        }
        //console.log(m)
        if(m.hijos){
            console.log("se añade con hijo")
            ul+="<li id=" + "nivel" + id + "" + id2 
                + "><a class='enlace' href='" + m.url + "' " + targetAtr
                 + " >" + m.denominacion + "</a><button class='boton'>&darr;</button></li>"
            //console.log(ul);
            //verHijos(m,id+""+id2)
        } else {
            console.log("se añadesin hijos")
            ul+= "<li id=" + "nivel" + id + "><a href='" + m.url + "' " + targetAtr + ">" + m.denominacion + "</a></li>"
        }
        id2++; //le sumo 1 a id2 para que sea nievel11 nievel12 etc...
    }
    ul += "</ul>"
    $("#nivel"+id).append(ul)
    //$("#nivel" + id).append(ul);
}

function mostrarOcultar() {
    lista = document.getElementsByTagName("button");
    for (let i of lista) {
        i.onclick = function (e) {
            //console.log($(this).html())
            if ($(this).html() == "↓") {
                console.log($(this))
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
