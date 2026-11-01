const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// one()

const two = () => {
    let username = "hitesh"
    console.log(this.username);
}
// two()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

const myarr = [2, 5, 3, 7, 8]
// myarr.forEach( () => {})



