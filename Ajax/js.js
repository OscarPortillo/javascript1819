window.onload = function () {
    cargarAjax();
}

function cargarAjax() {
    // alert("Arranque");
    let http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./cupcakes.json", true);
    http.send();

    function mostrar() {
        console.log("Estamnos en mostrar");
        console.log(http.readyState);
		console.log(http.status);
		
        if (http.readyState == 4 && http.status == 200) {
            console.log("Recibimos datos de ajax");
			console.log(http.responseText);
			var obj =JSON.parse(this.responseText);
			document.getElementById("cupcake").innerHTML = obj.cupcakes[0].ID
			+obj.cupcakes[0].nombre;
        }
        console.log("Salimos de mostrar");
		
    }
}