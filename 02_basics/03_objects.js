// singleton


// object literals

const mySym = Symbol("Key1")

const jsUser ={
    // key : value
    name : "supriyo",
    "full name" : "Supriyo Santra",
    //mySym : "myKey1",
    [mySym] : "myKey1",
    age : 18,
    location : "Kolkata",
    email : "supriyosantra38@gmail.com",
    isLoggedIn: false,
    lastLogindays : ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // not possible for jsUser.full name
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym); // not symbol it is string
console.log(typeof jsUser[mySym]); // not string it is symbol

jsUser.email = "supriyosantra2020@gmail.com"
// Object.freeze(jsUser) // value can't change after this
jsUser.name = "Esika"

console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);
jsUser.greeting();

