// ts -> izqda
// boom -> drch
// ding -> arriba
// bing -> abajo

const musica = "ts ts boom boom ding bing";
let musicaArray = musica.split(" ");
/*
for (nota of musicaArray){
  if (nota == "boom"){
    console.log("drcha")
    $("#rudolf").css('right', 20)
  }
  if (nota == "bing"){
    console.log("abajo")
    $("#rudolf").css('bottom', 20)
  }
  if (nota == "ding"){
    console.log("arriba")
    $("#rudolf").css('top', 20)
  }
   if (nota == "ts"){
     console.log("Izqda")
    $("#rudolf").css('left', 20)
  }
}*/

///////////////////////////////////////////////

/* MANERA DEL EXAMEN */

// ts -> izqda
// boom -> drch
// ding -> arriba
// bing -> abajo

let x = 0, y = 0;

for (m of musicaArray){
  if (m == 'ts'){
    x=Math.max(x-1, 0);
  }else if (m == 'boom'){
    x=Math.min(x+1, 30);
  } else if (m == 'bing'){
    y=Math.max(y-1, 0)
  } else if (m == 'ding'){
    y=Math.min(y+1, 10);
  }
}
console.log(x + "," + y)

