window.onload = function () {
    verDatos();
}
var objeto;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./serieA.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            verDatosDeEquipo(objeto)
        }
    }
} //verDatos

function verDatosDeEquipo(objeto) {
    var titulo = document.getElementById("titulo")
    var datos = document.getElementById("datos")

    for (dato in objeto) {
        var tr = document.createElement("tr")
        if(Array.isArray(objeto[dato])){
            for(otroDato of objeto[dato]){
                //console.log(otroDato)
                for(equipo in  otroDato){
                    var td = document.createElement("td")
                    if(otroDato[equipo] != null){
                        td.innerHTML = otroDato[equipo]
                    }else{
                        td.innerHTML = " "
                        console.log(" es null")
                        
                    }
                    tr.append(td)
                //console.log(otroDato[equipo])
                    
                }
            }
        }else {
            titulo.innerHTML = objeto[dato]
            console.log(objeto[dato])
            console.log("no es un array")
        }
        datos.append(tr)
    }
}


/*
 for (dato in objeto) {
        var tr = document.createElement("tr")
        if (Array.isArray(objeto[dato])) {
            //console.log("es un array")
            for (datoE of objeto[dato]) {
                //console.log(datoE)
                for (equipo in datoE) {
                var td = document.createElement("td")
                    td.innerHTML = datoE[equipo]
                    tr.append(td)
                    console.log(datoE[equipo])
                }
            }
        } else {
            titulo.innerHTML = objeto[dato]
            console.log(objeto[dato])
            console.log("no es un array")
        }
        datos.append(tr)
    }*/