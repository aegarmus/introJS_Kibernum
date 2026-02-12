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



// Tipos de datos

/*
-> Primitivos -> Son los tipos de datos que tienen su propio prototipo de referencias -> Alberga valores con un único valor asociado


-> Referenciales
*/

//Primitivos
//Strings
let string = 'hola soy una cadena de texto' // Cadenas de caracteres, pueden tener números, letras, simbolos especiales siempre entre comillas

//Numbers
let enteros = 456 // Este es un número entero positivo
let flotantes = 5.456 // Este es un número flotante positivo

let negativo = -546
let flotanteNegativo = -6.542

let infinito = Infinity // infinito positivo
let infinitoNegativo = -Infinity // infinito negativo

let notANumber = NaN // Valor número especial que indica que algo NO ES UN NÚMERO

// Booleans
let verdadero = true
let falso = false

// null -> Este es ESPECIAL -> hace alución a un valor vacío o inexistente

let nulo = null

// undefined -> Aparece cuando la variable es declarada pero no se le asigna un valor

let indefinido

console.log(indefinido)

// BigInt -> Hace referencia a valores con nnotación cientifica

let bigInt = 5.45621e-21

console.log(bigInt)

//Symbol -> Se usa para valores con una referencia unica

let letra1 = 'a'
let letra2 = 'a'
let letra3 = Symbol('a')

console.log(letra1)
console.log(letra2)
console.log(letra3)

console.log(letra1 == letra3)