//learning arrow functions
//regular function
function getInfo1 (name, age) {
    return `name is ${name} and age is ${age}`
}


//arrow function
const getInfo2 = (name, age) => {
   return `name is ${name} and age is ${age}`
}

const getInfo3 = name => `name: ${name}`

 console.log(getInfo1('Charles', 21))
 console.log(getInfo2('Charles', 21))
 console.log(getInfo3('Charles'))


 //hoisting
 console.log (heythere())

 function heythere () {
    return 'Hey There'
 }

 //const and let keyword cannot be referenced before declaration but var can 

 function helloThere () {
    return message
 }

 console.log(helloThere())

 var message = "Hello There"

 

 const hiThere = () => {
    return "hello there"
 }

 console.log(hiThere()) 

 //this keyword
 var radius = 5
 const shape = {
    radius: 10,
    diameter: function(){
        return this.radius*2;
    },
    diameter2: () => radius*2
 }

console.log(shape.diameter())
console.log(shape.diameter2())


const hero = {
    name:"Batman",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello my name is ${this.name}`)
        }, 1000);
    }
}
console.log(hero.greet())