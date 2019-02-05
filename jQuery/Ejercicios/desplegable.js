var objeto;
$(document).ready(function () {
    var cadena = $.getJSON("desplegable.json", function (dato) {
        objeto = dato;
        verDatos();
        mostrarSubMenu();
    })
});

function verDatos() {
    console.log(objeto)
    var lista = $("#menu");
    var ul = document.createElement("ul");
    for (dato of objeto.menu) {
        var li = document.createElement("li");
        var flecha = document.createElement("button");
        li.innerHTML = dato.denominacion;
        $(li).addClass("has-sub");
        li.append(flecha);
        $(flecha).addClass("boton");
        flecha.innerHTML = "&rarr;";
        var ul2 = document.createElement("ul");
        if (dato.hijos != null) {

            for (hijo1 of dato.hijos) {
                var li2 = document.createElement("li");
                $(li2).addClass("has-sub");
                li2.innerHTML = hijo1.denominacion;
                li.append(ul2);
                ul2.append(li2);
            }
        }
        
        ul.append(li);
        lista.append(ul);
    }
}

function mostrarSubMenu() {
    $(".boton").click(
        function(){
            $(" #menu ul li > ul").css("visibility"," visible" );
        }
    );
   
}









