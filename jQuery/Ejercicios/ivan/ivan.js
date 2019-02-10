$(document).ready(function () {
    $(function () { // si paso como parámetro en function() "event" luego hago let w = $(this).attr("href") cogeré el atributo de ese enlace que hemos pasado por "event" ||| .after .before es para meterle html a un elemento (event.after("falló") como el append)
        cargarAjax("https://codepen.io/IvanArasco/pen/xMrMPe.js", false);
    })
})

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(cargaOk)
        .fail(cargaNoOk);
}

$("#btn").on("click", function () { //desplegar / ocultar menú
    $("#menu").slideToggle(1000)
});

let cad = "";

function pintar(respuesta) {
    var id = 1;
    var nivel = "nivel";
    //console.log(respuesta)
    for (m of respuesta) {
        cad += "<ul>"
        cad += "<li id="+nivel+id+"> <strong>" + m.denominacion + "</strong> <br>"
        if (m.hijos) {
            cad += "<input type='button' class='flecha' value='&#8595'>"
        } else {
            cad += '<br>'
        }
        if (m.target) {
            cad += '<a href=' + m.url + ' target=' + m.target + '> www.google.es </a>'
        } else {
            cad += ' <a href=' + m.url + '> www.google.es </a></li> '
        }
        cad += '<br>'
        if (m.hijos) {
            console.log(m)
            console.log("Tiene hijos")
            pintar(m.hijos)
        }
        cad += "</ul>";
        id++;
    }

}

function cargaOk(respuesta) {
    pintar(respuesta.menu)
    $("#menu").append(cad)

    $(".flecha").on("click", function () {
        let hijos = $(this).parent().parent().children() // el elemento seleccionado está bajo un li y bajo un ul
        if (hijos.is(':visible')) {
            console.log(hijos)
            hijos.hide();
            $(".flecha").show();
        } else {
            hijos.show();
        }
    })

}

function cargaNoOk(objeto_jqXHR, estatus, errorDevuelto) {
    var r = "ESTATUS ES: " + estatus + "<br>Error devuelto: " + errorDevuelto;
}
