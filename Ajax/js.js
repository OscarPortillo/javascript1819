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
            verDatos(objetoCupcakes);
            verCategorias(objetoCupcakes);
            mostrarCategoria(objetoCupcakes);
            ordenarPrecioDescendente(objetoCupcakes);
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
        id.innerHTML += objeto.cupcakes[i].ID;
        div.append(img);
        var nombre = document.createElement("p");
        div.append(nombre);
        nombre.innerHTML += objeto.cupcakes[i].nombre;
        var precio = document.createElement("p");
        div.append(precio);
        precio.innerHTML += objeto.cupcakes[i].precio + "€<br>";
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

function verCategorias(objeto) {
    for (let i = 0; i < objeto.cupcakes.length; i++) {
        for (let j = 0; j < objeto.cupcakes[i].etiquetas.length; j++) {
            let eti = document.getElementById("etiquetas");
            var etiqueta = [objeto.cupcakes[i].etiquetas[j]];
            eti.innerHTML += etiqueta + "<br>";
        }
    }
} //ver categorías
function mostrarCategoria(objeto) {
    var arraYCategorias = [];
    var arraYCategoriasFiltrado = [];
    for (let i = 0; i < objeto.cupcakes.length; i++) {
        for (let j = 0; j < objeto.cupcakes[i].categorias.length; j++) {
            arraYCategorias.push(objeto.cupcakes[i].categorias[j]);
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

function descendent() {
    console.log("Hola mundo");
    //ordenarPrecioDescendente(objetoCupcakes);
    
    OrdenarPorIdAscendente(objetoCupcakes);
}

function ordenarPrecioDescendente(objeto) {
    var arrayPrecios;
    for (let i = 0; i < objeto.cupcakes.length; i++) {
        //console.log(objeto.cupcakes[i].precio);
        arrayPrecios = objeto.cupcakes[i].precio;
    }
}
function OrdenarPorIdAscendente(objetoCupcakes) {
    for(let cupcake of objetoCupcakes.cupcakes){
        return ( (cupcake.precio == cupcake.precio)? 0 : (cupcake.precio > cupcake.precio));
    }
	

}
/*apuntes clase
ejemploc.addEventListener("click",function(){
    vender(parametro){
        
    }
},true);
*/
