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
        var a = document.createElement("a");

        li.innerHTML = dato.denominacion;
        //$(a).attr = 
        $(li).addClass("has-sub");
        li.append(a);
        var ul2 = document.createElement("ul");
        if (dato.hijos != null) {
            var flecha = document.createElement("button");
            li.append(flecha);
            $(flecha).addClass("boton");
            flecha.innerHTML = "&rarr;";

            for (hijo1 of dato.hijos) {
                var li2 = document.createElement("li");


                $(li2).addClass("has-sub");
                li2.innerHTML = hijo1.denominacion;
                li.append(ul2);
                ul2.append(li2);

                var ul3 = document.createElement("ul");
                if (hijo1.hijos != null) {
                    var flecha2 = document.createElement("button");
                    $(flecha2).addClass("boton");
                    flecha2.innerHTML = "&rarr;";
                    li2.append(flecha2);
                    for (hijo2 of hijo1.hijos) {
                        var li3 = document.createElement("li");
                        $(li3).addClass("has-sub");
                        li3.innerHTML = hijo2.denominacion;
                        li2.append(ul3);
                        ul3.append(li3);
                    }
                }
            }
        }

        ul.append(li);
        lista.append(ul);
    }
}
/*
function mostrarSubMenu() {
    $(".boton").click(
        function(){
            $(" #menu ul li > ul").css("visibility"," visible" );
        }
    );
   
}
*/
