$(document).ready(function () {
    $(".cuadrante").hover(function () {
        desaparecer(1,4);
        
    })
});

var desaparecer = function(a,b){
    $("#c"+a).hide("slow");
}

//sumas 1 a la a y haces un callback con la misma función que es desparecer (a, b) y la a pasará a ser 2 antes tendrás que combrobar si a<b