$(document).ready(function () {
    subirBolita();
});

function subirBolita() {
    $(".caja").hover(
        function () {
            $(this).animate({
                height:  Math.floor((Math.random() * 400) + 100)+'px'
            });
        },
        function () {
            $(this).animate({
                height: '350px'
            });
        });
}
