//Learn what the Rest and Spread operators are in ES6

function sum (a, b, ...values){
    let sum = a+b
    values.forEach(value=> sum+= value)
    return sum

}

console.log(sum(1,3,4,6,6,7,9))