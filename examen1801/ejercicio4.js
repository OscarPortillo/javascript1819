window.onload = function () {

    var V = ['google',

 'hotmail',

 'msn',

 'unizar'

]

    var c = document.getElementById('container');
    var cadena = "<ul>";
    for (let v of V) {
        cadena += "<li>www." + v + ".com</li>";
    }
    cadena += "</ul>";
    c.innerHTML = cadena;
    crearEnlaces();

}

function crearEnlaces() {
   lista = document.getElementsByTagName("li");
    for(let i of lista){
        i.onclick= function(){
            alert(i.innerHTML)
        }
    }

}