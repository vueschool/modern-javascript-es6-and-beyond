//Learn which features and syntax changes ES6 introduced to JavaScript Objects

function createPerson (name, age, admin) {
    return {
        name,
        age,
        isAdmin: admin
    }
}

console.log(createPerson('Lydia',21,false))
console.log(createPerson('John',23,true))

//computed properties

const specialProperty = "nationality"

const person = {
    name:"John",
    age: 22,
    isAdmin: false,
    [specialProperty] : "German"

}

console.log(person)

function makeObject (key, value) {
    return {[key]: value}
}

const user = makeObject('username', 'John')
const dog = makeObject('breed', 'Labrador')

console.log(user)
console.log(dog)

const newperson = {
    firstName: "John",
    lastName: "Doe",
    getFullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(newperson.getFullName())