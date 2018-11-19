window.onload = function () {
    cargarAjax();
}

function cargarAjax() {
    // alert("Arranque");
    let http = new XMLHttpRequest();
    http.onreadystatechange =  mostrar;
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
            for (let i = 0; i < obj.cupcakes.length ; i++) {
                let ruta = obj.cupcakes[i].ruta;
                var img = document.createElement("img");
                img.src=ruta;
                var div = document.getElementById("cupcake"+i);
                div.innerHTML += obj.cupcakes[i].ID+"<br>";
                div.append(img);
                div.innerHTML+=obj.cupcakes[i].nombre+"<br>"
                +obj.cupcakes[i].precio+"<br>";
                for(let j = 0 ; j < obj.cupcakes[i].categorias.length; j++){/*para recorrer las etiquetas*/
                    var lista = document.createElement("ul");
                    var li =  document.createElement("li")
                    lista.append(li);
                    div.append(lista);
                    li.innerHTML+= obj.cupcakes[i].categorias[j];
                }
                 div.innerHTML+= obj.cupcakes[i].descripcion;
                
            }

        }
        console.log("Salimos de mostrar");
    }
    
    
    
}
function mostrarDatos(objeto)
{
    //meter aqui las cosas para ver los datos desde aqui
}