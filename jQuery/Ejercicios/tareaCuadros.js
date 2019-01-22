$(document).ready(function () {
    $("#contenedor").one("mouseover", function () {
        desaparecer(1);
    })
});
var desaparecer = function (a) {
    $("#c" + a).hide("slow", function () {
        a = a + 1;
        $("#c" + a).hide("slow", desaparecer(a));
    });
    if (a == 4) {
        mostrar(1);
    }
}
var mostrar = function (b) {
    $("#c" + b).show("fast", function () {
        b = b + 1;
        $("#c" + b).show("fast", mostrar(b));
    });
}

//sumas 1 a la a y haces un callback con la misma función que es desparecer (a, b) y la a pasará a ser 2 antes tendrás que combrobar si a<b


///mirar el off
