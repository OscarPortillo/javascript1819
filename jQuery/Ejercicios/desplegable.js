$(function () {
    console.log("entrada");
    cargarAjax();
    console.log("Final");
});



var cargarAjax = function(){
    $.ajax({
        url: "./desplegable.json",
        dataType : "json"
    }).done(function(respuesta){
        console.log("Lectura ajax");
        console.log(respuesta);
        pintarDatos(respuesta);
        console.log("final Lectura ajax");
    }).fail(function(){
       console.log("Fallo") ;
    }).always(function(){
        document.write("<p>Finalizando</p>");
    });
}

var pintarDatos = function(respuesta){
    
    for(m of respuesta.menu){
        document.write(m.denominacion+"<br>");
        document.write(m.url+"<br>");
    }
}