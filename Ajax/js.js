window.onload = function () {
    cargarAjax();
}

function cargarAjax() {
    // alert("Arranque");
    let http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./cupcakes.json", true);
    http.send(null);

    function mostrar() {
        console.log("Estamnos en mostrar");
        console.log(http.readyState);
        if (http.readyState == 4 && http.status == 200) {
            console.log("Recibimos datos de ajax");
        }
        console.log("Salimos de mostrar");
    }
}


