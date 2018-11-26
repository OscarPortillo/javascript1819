var obj;
var obj_filtrado;

window.onload = function () {
    cargarAjax();

}
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function mostrarDatos() {
    var datos = obj.datos;
    var tabla = document.getElementById("tablaDatos");

    var cad = '';
    var dato1 = datos[0];
    /*for (let titulo in dato1){
        cad+="<th>"+titulo+"</th>";
    }*/
    for (let dato of datos) {
        cad += '<tr>';

        for (let propiedad in dato) {
            cad += '<td>' + dato[propiedad] + '</td>';
        }
        cad += '</tr>';
    }
    tabla.innerHTML += cad;

} //mostrar datos

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
            obj = JSON.parse(r);
            console.log(obj.datos);
            mostrarDatos();
            cargarSelect(obj);
        } //if
    } //mostrar

} //cargar ajax

function cargarSelect(objeto) {
    let select = document.getElementById("Localidad");
    var arraySelects = ["Localidad","MediaGuadruados","TipoEgreso","Traslados",
    "FechaAtualidad","TipoEstudio","Estudio","Sexo","AluGraduados","CursoAca","Tasa"
    ,"AluInter","AluInterAño"];
    //luego hacer uno igual pero donde me tengo que copiar los que se repiten osea 
    // el filtrado
    var localidades = [];
    var localidadFiltrado = [];
    for (let datos of objeto.datos) {
        /*console.log(datos.LOCALIDAD);*/
        localidades.push(datos.LOCALIDAD);
        localidadFiltrado = localidades.unique();
    }
    for ( let i = 0 ; i < localidadFiltrado.length;i++ ){
        console.log(localidadFiltrado[i]);
        var option =  document.createElement("option");
        select.append(option);
        option.innerHTML += localidadFiltrado[i];
    }
}//cargar selects


/* for of recorre el array y for in recorre objetos*/
