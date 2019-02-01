window.onload = function(){
    verDatos();
}
var objeto;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}
function verDatos(){
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET","./laliga.json",true);
    http.send(null);
    
    function mostrar(){
        if( http.readyState == 4 && http.status == 200){
            let r = http.responseText;
            objeto = JSON.parse(r);
            verEquipos();
        }
    }
}//verDatos

function verEquipos(){
    var contenedor = document.getElementById("container");
    objeto.clubs.sort(function(a,b){
       return a.name.localeCompare(b.name) ;
    });
    for(equipo of objeto.clubs){
        //console.log(equipo)
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        td1.innerHTML = equipo.key;
        td2.innerHTML = equipo.name;
        td3.innerHTML = equipo.code;
        contenedor.append(tr);        
    }
}