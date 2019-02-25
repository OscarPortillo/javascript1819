$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});


var cargarAjax = function () {
    $.ajax({
        url: "./datos.json",
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(respuesta);
        datosJson(respuesta)
        //console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}

function datosJson(obj) {
    //console.log(obj.archivos)

    obj.archivos.forEach(function (dato) {
        //console.log(dato.link)
        comprobarFcihero(dato.link)
    })
}

function comprobarFcihero(ruta) {
    //console.log(ruta)
    $.ajax({
        url: ruta,
        dataType: "json"
    }).done(function (respuesta) {
        //console.log("Lectura ajax");
        //console.log(ruta)
        //console.log(respuesta);

        mostarDatosJson(respuesta, ruta)
        //console.log("final Lectura ajax");
    }).fail(function () {
        var mensaje = "<div>Ha ocurrido un fallo en la carga del fichero " + ruta + "</div>"
        $("#container").append(mensaje)
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}

function mostarDatosJson(objeto, ruta) {
    var mensaje = "<div class='contenido'>Fichero " + ruta + " cargado correctamente</div>"
    console.log(ruta)
    console.log(objeto.arrayColores)
    $.each(objeto.arrayColores, function (key, valor) {
    $.each(valor, function (index, valor) {
        console.log(index+" "+ valor)
        mensaje +="<div>"
        mensaje += "Clave: " +index+" Color con valor: "+valor
        
        mensaje += "</div>"
    })
})
    $("#container").append(mensaje)
}
