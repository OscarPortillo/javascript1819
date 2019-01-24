$(document).ready(function () {
    $("#contenedor").one("mouseover", function () {
        for (var i = 1; i <= 4; i++) {
            $("#c" + i).animate({
                width: '0px',
                height: '0px'
            }, 2005).delay(1000).animate({
                width: '+100%',
                height: '+100%'
            }, 2000).delay(1000);
        }
    });
});


//sumas 1 a la a y haces un callback con la misma función que es desparecer (a, b) y la a pasará a ser 2 antes tendrás que combrobar si a<b


///mirar el off
