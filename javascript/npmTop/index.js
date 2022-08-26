const colors = require("colors");

const fullName = "Jhon Doe";

function greet(_name) {
  return `Hola mi nombre es ${_name}, mucho gusto`.green.inverse;
}

console.log(greet(fullName));
