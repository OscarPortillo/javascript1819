$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});


var cargarAjax = function () {
    $.ajax({
        url: "./correos.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        mostrarDatos(respuesta);
        cambiarColor();
        //console.log("final Lectura ajax");
    }).fail(function () {
        //console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}

function mostrarDatos(objeto) {
    var contenedor = $("#contenedor");
    for (info in objeto) {
        for (datos of objeto[info]) {
            var p = " ";
            for (i in datos) {
                p += "<p>" + datos[i] + "</p>";
            }
            var div = "<div class='datos'>" + p +"<button>borrar</button><button>editar</button>"+ "</div>";
            //console.log(div);
            contenedor.append(div);
        }
    }
}

function cambiarColor() {
    var click = $(".datos");
    //console.log(click)
    for (i of click) {
        i.onclick = function () {
            console.log(this);
            $(this).css( {"background-color" :"green","text-align" :"left"});
            $(this).children("p").css({"width":"50%"});
            $(this).children("button").css({"display":"block","float":"right"});
            reiniciar()
        }
    }
}

function reiniciar() {
    var click = $(".datos");
    for (i of click) {
        i.onclick = function () {
            console.log(this);
            $(this).css( {"background-color" :"blue","text-align" :"left"});
            $(this).children("p").css({"width":"100%","text-align":"center"});
            $(this).children("button").css({"display":"none"});
        }
    }
}