
var mensaje = "HOLA MUNDO";

console.log("Mensaje global:" +mensaje);

var a = function (){
    var mensaje = "inside a";
    console.log("a: mensaje :"+mensaje);
}

a();

// todo los parametros que el if considera faslo

if (false || null || undefined || "" || NaN){
    console.log("todo esto es falso: false || null || undefined || \"\" || NaN")
}


// DAR VALOR A UN PARAMETRO SI ES UNDERFINED

function ordenarComida (presa){
    presa = presa || "Pollo";
    console.log("Asado de : " + presa);
}

ordenarComida("Carne");
ordenarComida();


















