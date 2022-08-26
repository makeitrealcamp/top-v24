// Funciones son ciudadanos de primer tipo

//COMPOSICIÓN

function person(name, age) {
  return {
    name,
    age,
  };
}

const maria = person("María", 29);

function teacher(name, age, lesson) {
  return {
    ...person(name, age),
    lesson,
  };
}

const sergio = teacher("Sergio", 28, "javascript");

console.log(sergio);

//INMUTABILIDAD

let arr = [1, 2, 3];
arr = arr.concat(4);

//FUNCIONES PURAS - SIDE EFFECTS
let num = 1;
let obj = {};
function pureFunction(a) {
  a = 2;
  return num + 2;
}

const sum = pureFunction(num);

// Dados los mismo argumentos siempre retornar el mismo resultado

function sum(a, b) {
  return a + b;
}

console.log(sum(1, num));
console.log(sum(1, num));
num = 2;
console.log(sum(1, num));

// formas de definir una función

function test() {}

const test = () => {};

(test = () => {})();

const test = function () {};
