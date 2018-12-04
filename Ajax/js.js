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
            mostrarEtiquetas();
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
        idCupcake.className = "idCupcake";
        divCupcake.append(idCupcake);
        var id = document.createTextNode(cupCake.ID);
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
        var precioCupcake = document.createElement("h4");
        precioCupcake.className = "precio";
        divCupcake.append(precioCupcake);
        var precio = document.createTextNode(cupCake.precio + " €");
        precioCupcake.append(precio);

        /*PRECIO*/
        /*CATEGORIAS*/
        var lista = document.createElement("ul");
        for (let categoria of cupCake.categorias) {
            var li = document.createElement("li");
            li.append(document.createTextNode(categoria));
            lista.append(li);
        }
        divCupcake.append(lista);
        /*CATEGORIAS*/

    }
    document.getElementById("sortDescendent").onclick = function () {
        sortDescendent()
    };
    document.getElementById("sortAscendente").onclick = function () {
        sortAscendente()
    };
}

function sortAscendente() {
    //console.log("ordenando");
    objetoCupcakes.cupcakes.sort((a, b) => Number(b.precio) - Number(a.precio));
    document.getElementById("contenedor").innerHTML = '';
    verDatos();
}

function sortDescendent() {
    objetoCupcakes.cupcakes.sort((a, b) => Number(a.precio) - Number(b.precio));
    document.getElementById("contenedor").innerHTML = '';
    verDatos();
}

function verCategorias() {
    var categorias = document.getElementById("categorias");
    var arrayCategorias = [];
    var arrayCategoriaFiltrado = [];
    for (let cupcake of objetoCupcakes.cupcakes) {
        for (eti of cupcake.categorias) {
            arrayCategorias.push(eti);
            arrayCategoriaFiltrado = arrayCategorias.unique();
        }
    }
    for (let etiqueta of arrayCategoriaFiltrado) {
        var option = document.createElement("option");
        option.className="btn";
        categorias.append(option);
        option.append(document.createTextNode(etiqueta));
    }
}

function mostrarEtiquetas() {
    var etiquetas = document.getElementById("etiquetas");
    var arrayEti = [];
    var arrayEtiFiltrado = [];
    for (let cupcake of objetoCupcakes.cupcakes) {
        for (eti of cupcake.etiquetas) {
            arrayEti.push(eti);
            arrayEtiFiltrado = arrayEti.unique();
        }
    }
    for (let etiqueta of arrayEtiFiltrado) {
        var cat = document.createElement("div");
        etiquetas.append(cat);
        cat.append(document.createTextNode(etiqueta));
    }
}
function mostrarPorEtiqueta()
{
    
}
