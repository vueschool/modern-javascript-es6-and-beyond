//Learn how to create Classes in JavaScript (ES6)

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName =lastName
    }
    getFullName (){
        return `${this.firstName} ${this.lastName}`
    }
}

const admin = new User ("John", "Doe")

console.log(admin)


class Admin  extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.role="admin"

    }
}

const superUser = new Admin("Will", "Smith")

console.log(superUser)