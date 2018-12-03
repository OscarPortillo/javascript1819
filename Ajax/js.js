var objetoCupcakes;


window.onload = function () {
    cargarAjax();
}



Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function cargarAjax() {
    let http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./cupcakes.json", true);
    http.send();

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let datosCupcke = http.responseText;
            objetoCupcakes = JSON.parse(datosCupcke);
            verDatos();
            verCategorias();
            mostrarCategoria();
        }
        //console.log("Salimos de mostrar");
    }
}

function verDatos() {
    //console.log(objetoCupcakes);
    var contenedor = document.getElementById("contenedor");
    for (let cupCake of objetoCupcakes.cupcakes) {
        let divCupcake = document.createElement("div");
        divCupcake.className = "cupcake";
        contenedor.append(divCupcake);
        /*id CUPCAKE*/
        var idCupcake = document.createElement("h4");
        idCupcake.className="idCupcake";
        divCupcake.append(idCupcake);
        var id=document.createTextNode(cupCake.ID);
        idCupcake.append(id);
        /*id CUPCAKE*/

        /*IMAGEN */
        var imagen = document.createElement("img");
        //console.log(cupCake.ruta);
        imagen.setAttribute("src", cupCake.ruta);
        divCupcake.append(imagen);
        /*IMAGEN */
        /*NOMBRE DEL CUPCAKE*/
        var nombreCupcake = document.createElement("h4");
        nombreCupcake.className = "nombre";
        divCupcake.append(nombreCupcake);
        //console.log(cupCake.nombre);
        var nombre = document.createTextNode(cupCake.nombre);
        nombreCupcake.append(nombre);
        /*NOMBRE DEL CUPCAKE*/
        /* PRECIO*/
        
        
        /*PRECIO*/

    }
    document.getElementById("sortDdescendent").onclick = function () {
        ordenarAbajo()
    };
    document.getElementById("sortAscendente").onclick = function () {
        ordenarArriba()
    };
}

function verCategorias() {
    for (let i = 0; i < objetoCupcakes.cupcakes.length; i++) {
        for (let j = 0; j < objetoCupcakes.cupcakes[i].etiquetas.length; j++) {
            let eti = document.getElementById("etiquetas");
            var etiqueta = [objetoCupcakes.cupcakes[i].etiquetas[j]];
            eti.innerHTML += etiqueta + "<br>";
        }
    }
} //ver categorías
function mostrarCategoria() {
    var arraYCategorias = [];
    var arraYCategoriasFiltrado = [];
    for (let i = 0; i < objetoCupcakes.cupcakes.length; i++) {
        for (let j = 0; j < objetoCupcakes.cupcakes[i].categorias.length; j++) {
            arraYCategorias.push(objetoCupcakes.cupcakes[i].categorias[j]);
            arraYCategoriasFiltrado = arraYCategorias.unique();
        }
    }
    for (let categoria of arraYCategoriasFiltrado) {
        let select = document.getElementById("mostrarCategoria");
        let option = document.createElement("option");
        select.append(option);
        option.innerHTML += categoria;
    }
} //mostrarCategoria

function ordenarAbajo() {
    objetoCupcakes.cupcakes.sort((a, b) => Number(b.precio) - (a.precio));
    document.getElementById("contenedor").innerHTML = '';
    verDatos();
    verCategorias();
    mostrarCategoria();
}
/*apuntes clase
ejemploc.addEventListener("click",function(){
    vender(parametro){
        
    }
},true);
*/
