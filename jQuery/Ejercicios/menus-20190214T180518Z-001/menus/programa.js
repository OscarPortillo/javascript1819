 var cadena = "";

 $(function(){
 	cargarAjax()

 });

 var cargarAjax = function (){
 	$.ajax({
 		url: './json.json',
 		dataType: 'json'
 	}).done(function(respuesta){

 		pintar(respuesta.menu);	
 		cargarElemento();	

 	}).fail(function(){
 		console.log('fallo')
 	}

 )}

 function pintar(respuesta){
 	//console.log(respuesta)
 	

 	cadena += "<ul>"
 	for (variable of respuesta) {
 		//console.log(variable)
		
 		if (variable.hijos != undefined) {

 			cadena += "<li> <a href="+variable.url + " > " + variable.denominacion + "</a> " + "<span class=button>⬇️</span>"

 			pintar(variable.hijos)
 			
 		}else {

 			//console.log(variable.denominacion)
 			cadena += "<li> <a href="+variable.url + " > " + variable.denominacion + "</a> "
 			
 		}
 		cadena += "</li>"
 	}
 	cadena += "</ul>"

 }

function cargarElemento(){

$("#contenedor").append(cadena);

var ul =  $( "#contenedor" ).find( "ul" )

for (var i = 1; i < ul.length; i++) {//empiezo desde 1 porque el 0 es el ul principal sin los hijos
	
	$(ul[i]).css("display", "none");
}

click();

}

function click(){

$( ".button" ).click(function() {

	let hermano = $(this).siblings("ul")
	//console.log(hermano)

 if ( $(hermano).css("display") == "none") {
		$(this).text("⬆️")
 		$(hermano).slideToggle(); 		
	 }
	 else{
		$(this).text("⬇️")
		 $(hermano).slideToggle()	
 	} 	
});

}

