console.log('Estamos conectados a Javascript!!')

// Variables

const numero1 = 3.1412 // -> Almacena en memoria valores "constantes" -> que no puede cambiar su valor de referencia ✅

let numero2 = 27 // -> almacena en memoria valores que pueden ser modificados o reasignando su valor de referencia ✅

var numero3 = 15 // -> Almacena en memoria valores que puden ser modificados o reasignada su referencia pero actua de forma global ❌

/* Scope 

Hace referencia a el alcance que tiene un bloque de código { }

function nombreFuncion (parameto) {
    desde aqui
    |
    |
    |
    hasta aqui llega el scope de la función
}

Var es global, esto quiere decir que actua sobr toooooodo el código
Let es de scope local, esto quiere decir que solo existe dentro del bloque de código en que es creado


*/

/* 
function mostrarNumero () {
    let numero = 5
    console.log(numero)
}

console.log(numero) // Esto no se puede hacer */


// Hoisting

/* Se refiere al proceso de "Elevación" de variables y funciones antes de ejecutar el código */

let nombre = 'Godofredo'

let saludo = (nombre) => {
    return 'Hola, les saluda ' + nombre
}

console.log(saludo(nombre))
