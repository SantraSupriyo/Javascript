// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.54

const isLoggesIn = false
const outsideTemp = null
let userEmail;
// let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 10000000053463234n


// reference (Non Primitive)

// Array, Objects, Functions 


const hers = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function () {
    console.log("Hello World!");
    
    
}
myFunction();

console.log(typeof bigNumber);
console.log(typeof myFunction);





