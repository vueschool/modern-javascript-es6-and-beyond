 //Learn how to set default parameter values in JavaScript functions

 function greeting (name = "Lydia") {
    return `Hello there ${name}`
 }

 console.log(greeting('John'))
 console.log(greeting())


 function createSuperHero (name, healthPoints=100){
    return ` You are ${name} and have ${healthPoints} Health Points`
 }

 console.log(createSuperHero('spiderman'))
 console.log(createSuperHero('Superman', 1000))



 function getDate (){
    const date = new Date()
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const formattedTime = `${date.getHours()}-${date.getMinutes()}`
    return `${formattedDate} ${formattedTime}`
 }

 function logMessage (message, prefix = getDate()) {
    console.log(`${prefix} - ${message}`)
 }

 logMessage("I like turtles")
 logMessage('I applied CSS styles', "nice")