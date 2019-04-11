window.onload = function () {
    console.log("entra aqui");
    crearTablero();
    //asignarEventos();
    pintarFilasColumnas();
}

var crearTablero = function () {
    let j = false;

    let cad = '';

    for (let i = 1; i < 65; i++) {
        cad += "<div id='" + i + "' class='casillas "
        cad += (j ? 'negras' : 'blancas')
        cad += "' ></div>"
        if (i % 8 != 0) j = !j;
    }
    let t = document.getElementById('tablero');
    t.innerHTML += cad;
}

var asignarEventos = function () {
    let casillas = document.getElementsByClassName('casillas');
    //console.log(casillas)
    for (c of casillas) {
        c.onclick = function (ev) {
            let casilla = ev.target;

            if (casilla.classList.contains('blancas')) {
                for (k of casillas) {
                    if (k.classList.contains('blancas')) {
                        k.classList.add('negras');
                        k.classList.remove('blancas');
                    } else {
                        k.classList.add('azules');
                        k.classList.remove('negras');
                        k.classList.remove('rojas')
                    }
                }
            } else if (casilla.classList.contains('negras')) {
                for (k of casillas) {
                    if (k.classList.contains('negras')) {
                        k.classList.add('rojas');
                        k.classList.remove('negras');
                    }
                }

            }
        }
    }
}

var pintarFilasColumnas = function () {
    let casillas = document.getElementsByClassName('casillas');
    for (c of casillas) {
        c.onclick = function (ev) {
            var fila = ev.target;
            console.log("celda Seleccionada " + fila.id)
            if (fila.className == "casillas blancas") {
                var nueva = "naranja"
                var vieja = "blancas"
                asignarColorFila(nueva, vieja, fila.id)
            } else if (fila.className == "casillas negras"){//para que no se vuelva loco la blanca
                var nueva = "verde"
                var vieja = "negras"
                asignarColorFila(nueva, vieja, fila.id)
            }

        } //function event
    } //for externo
} //pintarFilasColumnas

var asignarColorFila = function (nueva, vieja, id) {
    var idAux = parseInt(id);
    var num3 = idAux;
    let casillas = document.getElementsByClassName('casillas');
    for (k of casillas) {
        if (k.className === "casillas " + vieja  || k.className === "casillas "+nueva) {//esto lo hago por si ya ha cambiado para que no corte la ejecucion dela linea de abajo
            var num1 = parseInt(k.id);
            var num2 = idAux;
            if (num1 === num2) {
                //console.log(k.id +" "+ idAux+ " son iguales")
                console.log(num3 + " para restar")
                k.classList.add(nueva);
                k.classList.remove(vieja);
                idAux = idAux + 16
            }
            if (k.id >= 0 && k.id <= 8 && id >= 0 && id <= 8) {
                k.classList.add(nueva);
                k.classList.remove(vieja);

            } //if
            if (k.id >= 9 && k.id <= 16 && id >= 9 && id <= 16) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 17 && k.id <= 24 && id >= 17 && id <= 24) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 25 && k.id <= 32 && id >= 26 && id <= 32) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 33 && k.id <= 40 && id >= 33 && id <= 40) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 41 && k.id <= 48 && id >= 41 && id <= 48) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 49 && k.id <= 56 && id >= 49 && id <= 56) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if 
            if (k.id >= 57 && k.id <= 64 && id >= 57 && id <= 64) {
                k.classList.add(nueva);
                k.classList.remove(vieja);
            } //if
        } //if clase

    } //for externo
    var comparar = parseInt(id);

    for (let i = casillas.length - 1; i >= 0; i--) {
        //console.log(casillas[i]);
        var pos = casillas[i];
        //console.log(pos.id)
        if (parseInt(pos.id) === comparar) {
            console.log("entra")
            console.log(pos.id + " " + comparar + " son iguales")
            casillas[i].classList.add(nueva);
            casillas[i].classList.remove(vieja);
            comparar = comparar - 16;
        }
    }
}
