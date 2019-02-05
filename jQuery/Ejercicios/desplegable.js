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
    var ul = document.createElement("ul");
    for (m of respuesta.menu) {
        $("ul").append("<li>"+m.denominacion+"<br><a href='#'>"+m.url+"</a><button class='boton'>&rarr;</button></li>");
        menu.append(ul);
    }
}
