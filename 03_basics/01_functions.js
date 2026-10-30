function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("O");
}

// sayMyName()

// function sum(number1, number2) {
//    console.log(number1 + number2)
// }
function sum(number1, number2) {
//    let result = number1 + number2
//    return result
    return number1 + number2
   console.log("Hitesh");
}

// sum(3, "4") // 34
// sum(3, "a") // 3a
const result =  sum(3, 4) // 7

// console.log(result);


function logInUser(username = "Sam"){
    if (!username) {
       console.log("Please enter a username");
       return
    } 
    return `${username} just logged in`
    
}
// console.log(logInUser("Supriyo"))
// console.log(logInUser())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Supriyo",
    prices : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Sam",
    price : 399
})

const myNweArray = [200,100,400,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNweArray));
console.log(returnSecondValue([300, 500, 600]));
