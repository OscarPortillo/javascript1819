$(function() {
    cargarAjax()
    asignarEventos()
    });
var asignarEventos=function(){
    $('#menu').on('click','.flecha',function(){
        //$(this).parent().children('ul').slideToggle()
        $(this).siblings('ul').slideToggle()
        $(this).toggleClass('flechabajo')
    })
}
var pintarHijos=function(M,n){
    let c="<ul class='menu"+n+"'>"
    for(m of M){
        c+="<li><a href='"+m.url+"' "
        if(m.target)c+="target='"+m.target+"' "
        c+=">"+m.denominacion+"</a>"
        if(m.hijos){
            c+="<span class='flecha flecharriba flechabajo'>.</span>"+pintarHijos(m.hijos,n+1)
        }
        c+="</li>"
    }
    c+="</ul>"
    return c
}
var cargarAjax = function(){
    $.ajax({
          url: 'https://codepen.io/chabisoriano/pen/JxJVOp.js',
          dataType: 'json'
        }).done(function(respuesta){
            $('#menu').append(pintarHijos(respuesta.menu,1))
        }).fail(function(){
            $('#menu').append('Ha ocurrido un fallo en la carga AJAX')
    })
}