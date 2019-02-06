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
        pintarDatos(respuesta);
        // console.log("final Lectura ajax");
    }).fail(function () {
        // console.log("Fallo");
    }).always(function () {
        //        document.write("<p>Finalizando</p>");
    });
}
var pintarDatos = function (respuesta) {
    var menu = document.getElementById("menu");
    var ul1 = document.createElement("ul");
    for (let m of respuesta.menu) {
        if (m.hijos != null) {
            menu.append(ul1);
            $("ul").append("<li>" + m.denominacion + "<br><a href='#'>" + m.url + "</a><button class='boton'>&rarr;</button></li>");

            /*****hijos*/
            //console.log(m.hijos)
            
            console.log("Cambio de nivel")

        } else {
            menu.append(ul1);
            $("ul").append("<li>" + m.denominacion + "<br><a href='#'>" + m.url + "</a></li>");
        }
    }
}


/*for (hijo1 of m.hijos) {
            var ul2 = document.createElement("ul");
            if (hijo1.hijos != null) {
                ul1.append(ul2);
                $("ul li").append("<li>" + hijo1.denominacion + "<br><a href='#'>" + hijo1.url + "</a><button class='boton'>&rarr;</button></li>");
            } else {
                ul1.append(ul2);
                $("ul").append("<li>" + hijo1.denominacion + "<br><a href='#'>" + hijo1.url + "</a></li>");
            }
        }*/
