//explaining let and const
var name = "lydia"
name = "juliette"
console.log(name)

//explaining let and var
for (var i=0; i < 5; i++){
    console.log(i)
}
console.log("Outside : ",i)

//const values cannot be redefined : const and let keywords are block scoped ie they can only be declared in the block there are declared in and not outside of it
function checkPassword (password){
    const valid = password.length > 6
    if (valid){
        const message ="password is valid"
        console.log(message)
    } else {
        const message = "password is invalid"
        console.log(message)
    }
}
checkPassword('hello')
checkPassword('helloUser')