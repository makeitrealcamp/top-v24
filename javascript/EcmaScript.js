// Plantillas literales

/* const top = "TOP 24";

console.log("Hola " + top + " bienvenidos");
console.log(`Hola ${top} bienvenidos`); */

// Ambito de variables en bloque (let const)

/* function test() {
  var num = 3
}

if(true){
  const num = 3
}

console.log(num) */

// Operador terniario

/* const _name = "Jairo"

if(_name == "Jairo"){
  console.log("Usuario aceptado")
} else {
  console.log("Usuario rechazado")
}

"condición" ? "verdadera" : "falsa"
_name == "Jairo" ? console.log("Usuario aceptado") : console.log("Usuario rechazo") */

// == vs ===

/* const num = 50;

if (num === "50") {
  console.log("Verdad");
} else {
  console.log("Falso");
} */

// funciones flecha o arrow function

/* function test(a, b) {
  if(a > b){
    return a
  } else {
    return b
  }
} 

const test = (a, b) => a > b ? a : b */

// Sintaxis corta de obejtos

/* const _name = "Jhon"
const lastname = "Doe"

const user = { _name: _name, lastname: lastname }

const _user = { _name, lastname} */

//spread operator

/* const _name = "Jhon";
const lastname = "Doe";

const user = { _name, lastname };

const sesion = {
  teacher: "Sergio",
  date: "26-agosto-2022",
  ...user,
};

console.log(sesion); */

// Rest, for of y for in
/* 
const test = (a, b, ...rest) => {
  for (let item of rest) {
    console.log(item);
  }

  for (let item in rest) {
    console.log(item);
  }

  // for(let i=0; i <= rest.length; i++){
  //   console.log(rest[i])
  // }
};

test(1, 2, "Jairo", "Ruben", "Camila", "Esteban", "Omar"); */

// Valores por defecto

/* const test = (a, b = 0) => {
  return a + b;
};

console.log(test(3, 5));
console.log(test(3)); */

// Destructuring

/* const person = {
  name: "Jhon",
  lastname: "Doe",
  age: 33,
  city: "gotica",
};

// console.log(person.name);
// console.log(person.age);

const { lastname, city } = person;
console.log("destructuring object:", city, lastname);

const students = ["Jairo", "Ruben", "Camila", "Esteban", "Omar"];

const [x, y, z] = students;

console.log("destructuring array:", z); */
