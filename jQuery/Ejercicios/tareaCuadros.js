var contador = 0;
$(document).ready(function () {
    $("#contenedor").one("mouseover", function () {
        ocultar(1);
    });
    contador= $('.contenido').length;
});
function ocultar(i) {    
    if (i <= contador) {
        $('#c' + i).hide('slow', function () {
            i++;
            ocultar(i);
        });
    } else {
        i = 1;
        mostrar(i);
    }
}
function mostrar(i) {
    if (i <= contador) {
        $('#c' + i).show('fast', function () {
            i++;
            mostrar(i);
        });
    }
}


//sumas 1 a la a y haces un callback con la misma función que es desparecer (a, b) y la a pasará a ser 2 antes tendrás que combrobar si a<b


/*mirar el off.animate({
                width: '+100%',
                height: '+100%'
            }, 2000).delay(1000);*/
