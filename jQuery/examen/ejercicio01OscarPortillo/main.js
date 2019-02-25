$(document).ready(function () {
    pintarDatos()
    animarBarras()
    pararAnimacion()
})

var pintarDatos = function () {
    //console.log("estamos pintando")
    var cont = "<div class='cont'></div>"
    for (let i = 0; i < 32; i++) {
        $("#equ").append(cont)
    }
    var barra = "<div class='barra'></div>"
    $(".cont").each(function () {
        //console.log($(this))
        $(this).append(barra)
    })
}

var animarBarras = function () {
    console.log("animar")
    var barrasArray = []
    var div = ""
    $(".barra").each(function () {
        barrasArray.push($(this))
    })
    var long = barrasArray.length
    var numero = 0
    $("#btnOn").on('click', function () {
        
        for (let i = 0; i < 200; i++) {
            numero = Math.floor(Math.random() * long);
            console.log(numero)
            $(barrasArray[numero]).animate({
                bottom : Math.floor(Math.random() * -500)               
            })
        }
    })
}

var pararAnimacion= function(){
    $("#btnOff").on('click',function(){
        $(".barra").finish()
        $(".barra").animate({
            bottom : -250
        },"fast")
    })
}
