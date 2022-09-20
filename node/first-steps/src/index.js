//import express from "express"

// Que es una API ? ( Aplication programming Interfaces )
// Biblioteca de funcionalidades para extender el comportamiento de nuestra apliación.

const express = require("express");

const app = express();
const port = 8080;

//CRUD
//Create - Read - Update - Delete
//Post   - Get -  Put - Delete

// Crear endpoint
// 1 - Es un String con la ruta "http://localhost:8080/home"
// 2 - Callback Se ejecuta cuando hay un llamado a la ruta

app.get("/home", (req, res) => {
  res.send("<h1> Hello World </h1>")
})

app.get("/students", (req, res) => {
  res.status(201).json([
    { name: "Ruben", city: "Barranquilla", age: 30 },
    { name: "Esteban", city: "Bucaramanga", age: 25 },
  ])
})

//Abrir un puerto (8080)
// 1--Número del puerto
// 2--Callback que se ejecuta cuando el puerto empieza a escuchar

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}`)
})
