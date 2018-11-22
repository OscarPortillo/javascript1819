var obj;
var obj_filtrado;

window.onload = function () {
    cargarAjax();

}


function mostrarDatos() {
    var datos = obj.datos;
    var tabla = document.getElementById("tablaDatos");

    var cad = '';
    var dato1=datos[0];
    /*for (let titulo in dato1){
        cad+="<th>"+titulo+"</th>";
    }*/
    for (let dato of datos) {
        cad += '<tr>';
        
            for(let propiedad in dato){
                cad+='<td>'+dato[propiedad]+'</td>';
            }
        cad += '</tr>';
    }
    tabla.innerHTML += cad;

}//mostrar datos

function cargarAjax() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./unizar.json", true);
    http.send(null);

    function mostrar() {
        console.log("dentro de mostrar");
        console.log(http.readyState);
        console.log(http.status);
        if (http.readyState == 4 && http.status == 200) {
            console.log('recibimos datos ajax');
            console.log(http.responseText);
            let r = http.responseText;
            obj=JSON.parse(r);
            console.log(obj.datos);
            mostrarDatos();
            
        }//if


    }//mostrar

}//cargar ajax