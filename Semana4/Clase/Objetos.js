
// creacion de objetos

var estudiante = Object();

estudiante.nombre = "Clinton alex";
estudiante.usuario = "U202120751";

console.log(estudiante);
console.log("el nombre del estudiante es: " + estudiante.nombre);


estudiante.cursos = Object();
estudiante.cursos["Matematicas 1"] = "Calculo 2";
console.log(estudiante.cursos["Matematicas 1"]);

// Sintaxis general de objetos

var facebook={
    name :"alex",
    amigos : {
        nombre : "carlos",
        edad : 19
    },
    apellido: "pperez",
    "madre": "antonia"
}
// FUNCIONES
function sumar(x,y){
    return x+y;
}
function multiplicar(num){
    var segundoNumero= function (x){
        return num*x;
    }
    return segundoNumero;
}
var resultado = multiplicar(3);
console.log(resultado.segundoNumero(6)) // 18

// Pasar funciones como para parametros
function doOperacion (x,operacion){
    return operacion(x);
}

var result = doOperacion(5,multiplicar);
console.log(result);
result = doOperacion(3,doble);


// MODIFACIONES DE VARIABLES
function modi (n){
    console.log("Antes: "+n.valor);
    n.valor = 10;
    console.log("despues: "+n.valor);
}

n = {valor:5};
modi(n);
console.log("despues de salir de la funcion modi: "+n.valor);

function Persona (edad){
    this.nombre = edad;
    this.masa = function(){
        return Math.PI*Math.pow(edad,2);
    }
}

var alex = new Persona(18);
console.log(alex.mada());












