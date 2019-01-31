$(document).ready(function () {

    mostrarDivs();
    AñadirEfecto();
});

function mostrarDivs() {
    for (var i = 1; i < 30; i++) {
        $('.contenedor').append('<div class="tubo"></div>');
    }
}

function AñadirEfecto() {
    $(".tubo").hover(
        function () {
            $(this).stop().animate({
                height: '600px'
            }, 'fast', 'linear');
        },
        function () {
            $(this).stop().animate({
                height: '300px'
            }, 'fast', 'linear');
        }
    );
}



/*$(document).ready(function () {

    mostrarDivs();
    estirar();
    encoger();
});

function mostrarDivs() {
    for (var i = 1; i < 30; i++) {
        $('.contenedor').append('<div class="tubo"></div>');
    }
}

function estirar() {
    $('.tubo').mouseover(
        function () {
        $(this).stop().animate({
            height: '600px'
        }, 'fast', 'linear');
    });

}

function encoger() {
    $('.tubo').mouseout(function () {
    $(this).stop().animate({
        height: '300px'
    }, 'fast', 'linear');
    });
}
*/
