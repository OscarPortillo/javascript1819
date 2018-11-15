window.onload = function () {
    cargarAjax();
}

function cargarAjax() {
    // alert("Arranque");
    let http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./cupcakes.json", true);
    http.send();

    function mostrar() {
        console.log("Estamnos en mostrar");
        console.log(http.readyState);
        console.log(http.status);

        if (http.readyState == 4 && http.status == 200) {
            console.log("Recibimos datos de ajax");
            console.log(http.responseText);
            var obj = JSON.parse(this.responseText);
            for (let i = 0; i < 5 ; i++) {
                let ruta = obj.cupcakes[i].ruta;
               document.getElementById("cupcake"+""+i).innerHTML += obj.cupcakes[i].ID +
                    "<br>" + "<img src='" + ruta + "'/><br>"
                +obj.cupcakes[i].nombre+"<br>"
                +obj.cupcakes[i].precio+"<br>";
                for(let j = 0 ; j < obj.cupcakes[i].categorias.length; j++){
                    document.getElementById("cupcake"+""+i).innerHTML+= obj.cupcakes[i].categorias[j]+"<br> ";
                }
                 document.getElementById("cupcake"+""+i).innerHTML+= obj.cupcakes[i].descripcion;
            }

        }
        console.log("Salimos de mostrar");

    }
}
