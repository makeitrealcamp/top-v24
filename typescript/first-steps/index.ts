//let str = "Hola!" -> Inferencia de tipos
let str: string = "Hola mundo"
//let str: string | number = 5 // unión


function hello(name: string, age: number = 99): string {
  return `Hola soy ${name} y tengo ${age} años`
}

console.log(hello("Maria", 30))
console.log(hello("Maria"))

type Person = {
  name: string,
  age: number
}

//function secondHello(obj: { name: string, age: number}): string {
function secondHello(obj: Person): string {
  return `Hola soy ${obj.name} y tengo ${obj.age} años`
}

console.log(secondHello({ name: "Jhon Doe", age: 33 }))

const arr: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3] //Genericos
const arr3: (number | string)[] = [1, 2, ""]
const people: Person[] = [{ name: "Pedro", age: 30 }, { name: "Maria", age: 20 }]


/* const helloTwo = (name: string, age: number = 99): string => {
  return `Hola soy ${name} y tengo ${age} años`
} */

