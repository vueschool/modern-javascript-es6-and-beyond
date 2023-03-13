//How to Destructure Arrays and Objects in JavaScript ES6

import fetch from "node-fetch";

const person1 = {
    name: "John Doe",
    age: 45
};

const { name , age } = person1

console.log( name,age )

const person2 = {
    name: "Jane Doe",
    age: 23
};

const { name: memberName , age: memberAge } = person2

console.log( memberName,memberAge )

const fruits = ["orange", "banana", "kiwi"]

const [first, second, third] = fruits

console.log(first, second, third)


let [min, max] = [4,7]

if (min > max){
[min,max] = [max,min]}

console.log(`min: ${min}`)
console.log(`max: ${max}`)


const team = [
    {name: "Elon Musk"},
    {name: "Jon Doe"},
    {name: "Mark White"},
    {name: "Will Smith"},
    {name: "Charles Johnson"},
]

const [boss, ...employees] = team

console.log(boss)
console.log(employees)


const event = {name: "call with John"}

const {newName, createdAt = new Date().getHours() } = event

console.log(createdAt)


function fetchDog({breed}) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const dog = {
    name: "Max",
    breed: "labrador",
    color: "Brown",
    age: 8
}

fetchDog(dog)