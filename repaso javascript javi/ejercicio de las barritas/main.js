$(document).ready(function () {
    pintarDatos();
    animar();
    stop();
})

function pintarDatos() {
    var div = "<div class='cont'><div class='barra'></div></div>";
    for (let i = 1; i <= 32; i++) {
        //console.log(div)
        $("#equ").append(div);
    }
}


function animar(){
    console.log("animando");
    var array = [];
    $(".barra").each(function(){
        array.push(this);
    });
    var longitud = array.length;
    num = 0;
    $("#btnOn").on('click', function () {
        for (let i = 0; i < 2000; i++) {
            num = Math.floor(Math.random() * longitud);
            $(array[num]).animate({
                bottom : Math.floor(Math.random() * -300)    
            })
        }
    });
}


var stop= function(){
    $("#btnOff").on('click',function(){
        $(".barra").stop(true,true);
        $(".barra").animate({
            bottom : -250
        },"fast");
    })
}