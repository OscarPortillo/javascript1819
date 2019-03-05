/* Cargar un JSON con JAVASCRIPT con hijos y sin mostrar el apellido */
window.onload = function() {
    console.clear()
    verDatos();
}

Array.prototype.unique = function() {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

var objeto;


function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "https://codepen.io/IvanArasco/pen/VRjeyg.js", true);
    http.send(null);

    function mostrar() {
        let respuesta = document.getElementById("container");
        let opciones = [];
        let cad = "";
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);

            for (o in objeto) {
                //  console.log(o) // devuelve Profesores ( el primer elemento del JSON )
                var padre = objeto[o]
                for (profe of padre) {
                    //console.log(profe) // Devuelve cada uno de los elementos que tiene Profesores (4)
                    cad += "<tr>"
                    for (atributo in profe) {
                        if (!Array.isArray(profe[atributo])) { // si no es el módulo, que lo imprima directo
                            // si no, pondrá [object OBJECT] por que no estamos accediendo a cada atrib. del obj
                            cad += "<td>" + profe[atributo] + "</td> <br>";
                        } else { // accediendo al contenido de "módulo". Es un array
                             var modulo = profe[atributo]
                            //cad += atributo+"<br>";
                            //console.log(atributo+ ":")
                            for (mod of modulo) {
                                let arrayModulo = []
                                for (atribModulo in mod) {
                                    arrayModulo.push(mod[atribModulo])
                                }
                                cad += "<td>" + arrayModulo.join(" - ") + "</td>"
                            }
                        }
                       if (atributo == "Nombre") { // no queremos filtrar por apellido
                            opciones.push(profe[atributo]);
                        }
                        }
                      
                    }
                    cad += "</tr>"
                    respuesta.innerHTML = cad
                }
            }
            opciones = opciones.unique();
            //console.log(opciones)
            crearSelect(opciones)
            filtrar()
        } // si todo va bien

    } //fin mostrar

function crearSelect(opciones) {
    let select = document.getElementById("opciones")
    for (o of opciones) {
        let option = document.createElement("option")
        select.append(option)
        option.innerHTML = o
    }
}

function filtrar() {
    let respuesta = document.getElementById("container");
    for (o in objeto) {
        var padre = objeto[o]
    }
    //console.log(padre)
    let select = document.getElementById("opciones")
    select.addEventListener("change", function() {
        var opcionSeleccionada = this.options[select.selectedIndex]
        //console.log(opcionSeleccionada.value)
        respuesta.innerHTML = "" // vaciar contenido
        verDatosFiltrados(opcionSeleccionada)
    })
}

function verDatosFiltrados(opcionSeleccionada) {
    let respuesta = document.getElementById("container");
    let cad = "";
       
    for (o in objeto) {
        //  console.log(o) // devuelve Profesores ( el primer elemento del JSON )
        var padre = objeto[o]
        for (profe of padre) {
            //console.log(profe) // Devuelve cada uno de los elementos que tiene Profesores (4)
            cad += "<tr>"
            for (atributo in profe) { 
               // console.log(profe[atributo])
                if (atributo == opcionSeleccionada.value) {
                    // console.log(profe[atributo])
                    if (!Array.isArray(profe[atributo])) { // si no es el módulo, que lo imprima directo
                        // si no, pondrá [object OBJECT] por que no estamos accediendo a cada atrib. del obj
                        cad += "<td>" + profe[atributo] + "</td> <br>";
                    } else { // accediendo al contenido de "módulo", pues es un array
                        var modulo = profe[atributo]
                        //console.log(atributo+ ":")
                        for (mod of modulo) {
                            let arrayModulo = []
                            for (atribModulo in mod) {
                                arrayModulo.push(mod[atribModulo])
                            }
                            cad += "<td>" + arrayModulo.join(" - ") + "</td>"
                        }
                    }

                }
            }
            cad += "</tr>"
            respuesta.innerHTML = cad
        }
    }
} // ver datos filtrados    

/* Este es el que no emplea formato tabla para imprimirse. Solo muestra los atributos seleccionados.

function verDatosFiltrados(opcionSeleccionada){
  let respuesta=document.getElementById("container");
  for (o in objeto){
              //console.log(o)
              var padre = objeto[o]
              for (profe of padre){
                //console.log(profe)
                for (atributo in profe){
                 if (atributo == opcionSeleccionada.value){
                  if(atributo != "Apellido"){
                  if(Array.isArray(profe[atributo])){
                    respuesta.innerHTML += "<hr>"
                    var modulo = profe[atributo]
                    respuesta.innerHTML += atributo+":<br>";
                    //console.log(atributo+ ":")
                    for(mod of modulo){
                      for (atribModulo in mod){
                         respuesta.innerHTML += atribModulo + ": " + mod[atribModulo]+ " <br>";
                         //console.log(atribModulo + ": " + mod[atribModulo])
                      }
                      respuesta.innerHTML += "<hr>"
                    }
                  }else{
                     respuesta.innerHTML +=atributo + ": " + profe[atributo] + " <br>";
                    // console.log(atributo + ": " + profe[atributo])
                  }
                  }//si no es el apellido lo muestra
                  } 
                }
                
                   respuesta.innerHTML += "<hr>"
              }
            }  */