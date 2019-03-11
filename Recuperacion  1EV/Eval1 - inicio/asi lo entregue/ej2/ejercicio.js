//Sin tocar ni el html ni el css
//Todos los elementos de la clase 'rojito' tienen que adoptar la clase 'verdecito'.

window.onload = function () {
    verDatos()
}

function verDatos() {
    var element = document.getElementById("rojito");
    element.classList.remove("rojito");
}
