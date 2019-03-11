var arrayNombre = new Array(0);
var arrayApellidos = new Array(0);
var arrayEmail = new Array(0);
var arrayBoton = new Array(0);

window.onload = function () {
    llamarFunciones()
}

function llamarFunciones() {
    document.getElementById("btn1").onclick = function () {
        añadir()
    };
}


function añadir() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;

    arrayNombre.push(nombre);
    arrayApellidos.push(apellidos);
    arrayEmail.push(email);
    arrayBoton.push((arrayNombre.length - 1));

    imprimir();

}

function eliminar(id) {
    //alert(id)
    arrayNombre.splice(id, 1);
    imprimir();
}

function imprimir() {

    var imprimir = "";

    for (i = 0; i < arrayNombre.length; i++) {
        var nombreMostrar = arrayNombre[i];
        var apellidoMostrar = arrayApellidos[i];
        var emailMostrar = arrayEmail[i];
        var botonMostrar = arrayBoton[i];

        //alert(botonMostrar);

        var nombreImpr = "<p><strong>Nombre:</strong>" + nombreMostrar + "</p>"
        var apellidoImpr = "<p><strong>Apellido:</strong>" + apellidoMostrar + "</p>"
        var emailImpr = "<p><strong>Email:</strong>" + emailMostrar + "</p>"
        var botonBorrar = "<button onclick=eliminar(" + botonMostrar + ") id=" + botonMostrar + ">Eliminar</button>";

        imprimir += nombreImpr + apellidoImpr + emailImpr + botonBorrar + "<br> <br>";
    }
    document.getElementById("resultados").innerHTML = imprimir;
}


