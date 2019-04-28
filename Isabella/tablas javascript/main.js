window.onload = function () {
    crearTablas();
}

function crearTablas() {
    var final = document.getElementById("resultado");
    for(var i = 1 ; i <= 10 ; i++){
        var tabla = document.createElement("div");
        tabla.classList.add("tabla"+i);
        tabla.append("tabla del "+i)
        console.log("tabla del *****"+i);
        for(var j = 1 ; j <= 10 ; j++){
            var texto = i+" X "+j+" = "+i*j;
            var result = document.createElement("div");
            result.append(texto);
            console.log(j*i)
            tabla.append(result);
        }
        final.append(tabla);
    }
}
