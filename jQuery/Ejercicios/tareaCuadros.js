$(document).ready(function () {
    $(".cuadrante").hover(function () {
        funcion1();
        
    })
});
var funcion1 =function(){
    $("#c1").hide('slow',funcion2);
}
var funcion2 =function(){
    $("#c2").hide('slow',funcion3);
}
var funcion3 =function(){
    $("#c3").hide('slow',funcion4);
}
var funcion4 =function(){
    $("#c4").hide('slow');
    funcionShow1();
}
var funcionShow1 =function(){
    $("#c1").show('slow',funcionShow2);
}
var funcionShow2 =function(){
    $("#c2").show('slow',funcionShow3);
}
var funcionShow3 =function(){
    $("#c3").show('slow',funcionShow4);
}
var funcionShow4 =function(){
    $("#c4").show('slow');
}