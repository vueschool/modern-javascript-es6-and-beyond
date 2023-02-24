//ES6 Template Literals and String Interpolation
import fetch from "node-fetch";


function sayName (name){
    return `Hello there, ${name}`
}

console.log(sayName('Lydia'))


const baseUrl = "https://swapi.dev/api"

fetch(`${baseUrl}/people/1`)
.then(res=> res.json())
.then(json => console.log(json))

fetch(`${baseUrl}/people/2`)
.then(res=> res.json())
.then(json => console.log(json))