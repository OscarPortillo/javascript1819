var obj_json;
var contenedor = document.getElementById("contenedor")
var etiquetas = document.getElementById("etiquetas");
var miMapa = new Map();

window.onload = function(){
  
  cargarAjax();

}

function cargarAjax(){
  let http = new XMLHttpRequest(); 
  http.onreadystatechange = mostrar ;
  
  http.open("GET", "./cupcakes.json", true);
  //http.responseType = 'json';
  http.send(null);
  function mostrar(){
    var r = document.getElementsByClassName("cupcake");
    if(http.readyState == 4 && http.status == 200){
      //mostramos los resultados
      r.innerHTML = "";
      var respuesta_json = http.responseText;
      //console.log(respuesta_json);
       obj_json = JSON.parse(respuesta_json);
      //var cupcakesRecibidas = obj_json.cupcakes.length;
      //console.log(obj_json.cupcakes[1]);

     pintar();
     pintarEtiquetas();
    
   // console.log("salimos de mostrar");
  }//cierre mostrar
}//cierra cargarAjax
}
function pintar(){
  contenedor = document.getElementById("contenedor")
  //etiquetas = document.getElementById("etiquetas")
   //console.log(contenedor);

      var etis = [];
      miMapa.clear();

        for (let cupcake of obj_json.cupcakes) {
          var div = document.createElement("div");
          div.className="cupcake";
          contenedor.appendChild(div);

          var id = document.createElement("h3");//id
          id.className="id";
          div.appendChild(id);
          var idd = document.createTextNode(cupcake.ID);
          id.appendChild(idd); 
          


           var img = document.createElement("img");//imagen
           img.setAttribute("src", cupcake.ruta)
           div.appendChild(img);

          var name = document.createElement("p");//nombre
          name.className="name";
          div.appendChild(name);
          var nom = document.createTextNode(cupcake.nombre);
          name.appendChild(nom); 

          var price = document.createElement("p");//price
          price.className="price";
          div.appendChild(price);
          var pri = document.createTextNode(cupcake.precio + "€");
          price.appendChild(pri);

          var ul = document.createElement("ul");//categorias
          for (cat of cupcake.categorias) {
            //console.log(cat);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(cat));
            ul.appendChild(li);
          }
           div.appendChild(ul);

          var p = document.createElement("p");
          div.appendChild(p);
          var descripcion = document.createTextNode(cupcake.descripcion); //descripcion              
          p.appendChild(descripcion);

          var etiqueta = document.createElement("p");//etiquetas

          //console.log(mySet);

          for (eti of cupcake.etiquetas) {
            //console.log(cat);
            etiqueta.appendChild(document.createTextNode(eti + " "));

            if (miMapa.has(eti)) {
                miMapa.set(eti,miMapa.get(eti) +1)
            }else {
               miMapa.set(eti,1)
            }
          
            //mySet.add(eti);
          }

          //console.log(miMapa);
           div.appendChild(etiqueta);
           
         

        }//cierre for

        //console.log(mySet);

         

        
        document.getElementById("mas").onclick=function(){ordenarArriba()};
        document.getElementById("menos").onclick=function(){ordenarAbajo()};
        
        //console.log(etis);
         //contenedor.appendChild(div);

    }

 function ordenarArriba(){
 
 //console.log("arriba");
obj_json.cupcakes.sort((a, b) => Number(b.precio) - Number(a.precio));
document.getElementById("contenedor").innerHTML = '';

//etiquetas.innerHTML = '';
pintar();
pintarEtiquetas();


  }


function ordenarAbajo(){
 obj_json.cupcakes.sort((a, b) => Number(a.precio) - Number(b.precio));
document.getElementById("contenedor").innerHTML = '';
pintar();
pintarEtiquetas();

  }


 function pintarEtiquetas(){


    //console.log("pintarEtiquetas");
     var div = document.createElement("div");
          div.id="etiquetas";
          document.getElementById("contenedor").appendChild(div);

      etiquetas = document.getElementById("etiquetas");

        var eti = document.createElement("p");
        var div = document.createElement("div");
        //div.className="cupcake";
        etiquetas.appendChild(div);

        //console.log(myMapa);
        var max = 0;

          for (etiqueta of miMapa) {

           // numero = miMapa.get(etiqueta);
           //console.log(etiqueta[1]);
           if (etiqueta[1] > max) {
              max = etiqueta[1];
           }
          }  

          console.log(max);

          //  console.log(todo);

          var ul = document.createElement("ul");//categorias
          for (etiqueta of miMapa) {
            //console.log(cat);
            
            var valor = 10 * (etiqueta[1] / max);
            console.log(valor);

            var li = document.createElement("li");
            li.appendChild(document.createTextNode(etiqueta + " "));
            if (valor > 0 && valor < 4) {
              li.className = 'poco';
            }else if (valor > 3 && valor < 7) {
              li.className = 'medio';
            }else {
              li.className = 'mucho';
            }
            ul.appendChild(li);
          }
           div.appendChild(ul);
  }

