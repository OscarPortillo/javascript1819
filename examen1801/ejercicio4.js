window.onload = function () {

    var V = ['google',

 'hotmail',

 'msn',

 'unizar'

]

    var c = document.getElementById('container')

    var cadena = "<ul>"

    for (let v of V) {

        cadena += "<li id='" + v + "'>www." + v + ".com</li>";

    }

    cadena += "</ul>"

    c.innerHTML = cadena;

    crearEnlaces(V)

}

function crearEnlaces(V) {
    document.getElementById("google").onclick = function () {
        google()
    };
    document.getElementById("hotmail").onclick = function () {
        hotmail()
    };
    document.getElementById("msn").onclick = function () {
        msn()
    };
    document.getElementById("unizar").onclick = function () {
        unizar()
    };


}

function google() {
    alert("www.google.com");
}
function hotmail() {
    alert("www.hotmail.com");
}
function msn() {
    alert("www.msn.com");
}
function unizar() {
    alert("www.unizar.com");
}