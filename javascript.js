// JavaScript es un lenguaje debilmente tipado o de tipado dinamico

// int _num = 9;
// float num = 9.8;
// char _a = "a"
// string a = "sergio"

// var num = {}
// let num = {}
// const num = {}

// LEXICAL SCOPE

// function test() {
//   var num = 2;
// }

// console.log(num);

// IMPLICIT COERCION

// var num = 5;
// var _num = "9";

// var result = 1 + 2 + 3 + "6" + _num + num;

// console.log("Coerción implicita:", result);

// HOISTING

//Se declara _name automaticamente al principio del scope

// console.log(_name);
// var _name = "Jhon Doe";

// CLOSURES
// Es una función que aún siendo llamada fuera de su scope puede acceder a su scope

// function person() {
//   var _name = "John Doe";

//   return function greet() {
//     return console.log(`Hola mi nombre es ${_name}`);
//   };
// }

// console.log(_name)

// const persona = person();
// persona();

//TRUTHY AND FALSY VALUES
var value = true;

if (value) {
  console.log("VERDADERO");
} else {
  console.log("FALSO");
}
