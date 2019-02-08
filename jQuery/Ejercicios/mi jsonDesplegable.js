var pintarDatos = function () {
    var contaHijos = 1;
    var id = 1;
    var ul = document.createElement("ul");
    for (m of objeto.menu) {        //console.log(compruebaHijos(m.hijos))
        if (compruebaHijos(m.hijos)) {
            verDatosConHijos(ul,m,id);
            //console.log(m.hijos)
            verHijos(ul,m.hijos,id);
        } else {
            verDatosSinHijos(ul,m,id);
        }
        id++;
    }
}

function verHijos(ul,objeto,id){
    console.log(objeto)
    for (m of objeto) {
        //verDatosConHijos()
        verDatosConHijos(ul,m,id);
        if (compruebaHijos(m.hijos)) {
            
        }
    }
}

function verDatosConHijos(ul,obj,id) {
    console.log(obj)
        menu.append(ul);
        $(ul).append("<li id="+id+">" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a><button class='boton'>&rarr;</button></li>");    
}

function verDatosSinHijos(ul,obj,id) {
    
    console.log(obj)
    menu.append(ul);
    $(ul).append("<li id="+id+">" + obj.denominacion + "<br><a href='#'>" + obj.url + "</a></li>");

}

function compruebaHijos(hijo) {
    if (hijo != null) {
        return true;
    } else {
        return false;
    }
}
