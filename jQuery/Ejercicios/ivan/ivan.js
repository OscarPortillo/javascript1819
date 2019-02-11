$(document).ready(function() {
    $(function() {
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



let cad = "";

function pintar(respuesta) {
    //console.log(respuesta)
    var nivel = "nivel";
    var conta = 1;
    cad = "<ul>";
    for(m of respuesta){
        cad += "<li id="+nivel+""+conta+">"+m.denominacion+"</li>";
        if(m.hijos){
//            /console.log("tiene hijos")
            pintarHijos(m.hijos,(nivel+""+conta));
        } else {
            
            //console.log("no tiene hijos")
            
        }
        conta++;
    }
    cad +="</ul>";
}
function pintarHijos(respuesta,nivel){
    console.log(nivel)
    conta = 1;
    var cadHijo="";
    console.log("Estamos con los hijos")
    $("#"+nivel).append(cadHijo)
    cadHijo = "<ul>";
    for(m of respuesta){
        cadHijo +="<li id="+nivel+""+conta+">"+m.denominacion+"</li>";
        console.log(m)
    }
    cadHijo+="</ul>";
}

function cargaOk(respuesta) { //cuando lee el json correctamente
    pintar(respuesta.menu)
    $("#menu").append(cad) // todo el contenido lo metemos en el html
    

}

function cargaNoOk(objeto_jqXHR, estatus, errorDevuelto) { // cuando lee mal el json
    var r = "ESTATUS ES: " + estatus + "<br>Error devuelto: " + errorDevuelto;
}