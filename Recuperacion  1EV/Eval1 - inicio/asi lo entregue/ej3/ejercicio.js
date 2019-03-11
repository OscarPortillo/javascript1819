window.onload = function () {
    verDatos();
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./datos3.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            //console.log(objeto)
            verColores(objeto)
            cambiarColor(objeto)
        }
    }
} //verDatos
function verColores(objeto) {
    document.getElementsByTagName("select")[0].innerHTML = " "
    var selectOpc = document.getElementsByTagName("select")[0]
    for (d in objeto) {
        for (p of objeto[d]) {
            for (m in p) {
                var opc = document.createElement("option")
                opc.innerHTML = m
                //console.log(opc)
                selectOpc.appendChild(opc)
            }
        }
    }
}

function cambiarColor(objeto) {
    var opcion = document.getElementsByTagName("select")[0]
    var pintar = ""
    opcion.addEventListener('change',
        function () {
            var color = this.options[opcion.selectedIndex];
            //console.log(color.value)
            for (d in objeto) {
                for (p of objeto[d]) {
                    for (m in p) {
                        if(color.value == m){
                            console.log("coincide")
                            pintar = p[m]
                            console.log(color.value)
                            console.log(m)
                        console.log(p[m])
                        }
                        
                    }
                }
            }
        console.log(pintar)
        document.getElementsByClassName("texto")[0].style.color = pintar;

        });
    
}
