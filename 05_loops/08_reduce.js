const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, currval) =>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "JAVA Course",
        price: 1999
    },
    {
        itemName: "AI Course",
        price: 4999
    }
]

totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalPrice);




