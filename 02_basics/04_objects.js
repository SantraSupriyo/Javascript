// const tinderuser = new Object() // singleton object
const tinderuser = {} // not singleton

tinderuser.id = "123abc"
tinderuser.name = "Shampa"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "email@gamil.com",  // object nesting
    fullname : {
        userfullname : {
            firstname : "supriyo",
            lastname: "Santra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); // ? is for checking if it is present or not

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2} // not to use
// const obj3 = Object.assign(obj1, obj2) // copied in obj1
// const obj3 = Object.assign({}, obj1, obj2) // copied in {}
const obj3 = {...obj1, ...obj2} // spread
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmai/.com"
    },
    {

    },
    {

    }
]

users[1].email
// console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));






