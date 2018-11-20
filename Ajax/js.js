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
        //console.log("Estamnos en mostrar");
        //console.log(http.readyState);
        //console.log(http.status);

        if (http.readyState == 4 && http.status == 200) {
            //console.log("Recibimos datos de ajax");
            //console.log(http.responseText);
            var obj = JSON.parse(this.responseText);
            verDatos(obj);
            verCategorias(obj);
        }
        console.log("Salimos de mostrar");
    }
}

function verDatos(objeto) {
    for (let i = 0; i < objeto.cupcakes.length; i++) {
        let ruta = objeto.cupcakes[i].ruta;
        var img = document.createElement("img");
        img.src = ruta;
        var div = document.getElementById("cupcake" + i);
        var id = document.createElement("h3");
        div.append(id);
        id.innerHTML +=objeto.cupcakes[i].ID;
        //div.innerHTML += objeto.cupcakes[i].ID + "<br>";
        div.append(img);
        div.innerHTML += objeto.cupcakes[i].nombre + "<br>" +
            objeto.cupcakes[i].precio + "€<br>";
            var ul = document.createElement("ul");
        for (let j = 0; j < objeto.cupcakes[i].categorias.length; j++) { /*para recorrer las etiquetas*/
            var li = document.createElement("li")
            div.append(ul);
           
            li.innerHTML += objeto.cupcakes[i].categorias[j];
             ul.append(li);
        }
        div.innerHTML += objeto.cupcakes[i].descripcion;
    }
}

function verCategorias(objeto)
{
    for(let i = 0 ; i  < objeto.cupcakes.length ; i++){
        for(let j = 0 ; j < objeto.cupcakes[i].categorias.length ; j++){
            let eti = document.getElementById("etiquetas");
            var etiqueta = [objeto.cupcakes[i].categorias[j]];
            eti.innerHTML = mapaEtiqueta.map(etiqueta);            
        }
    }
}
