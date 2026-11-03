// const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach( (item)=> {
//     // console.log(item);
//     return item
// }  )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })


// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const book = [
    {title: "Book One", genre : "science", publish: 2009, edition : 2010},
    {title: "Book Two", genre : "Friction", publish: 1985, edition : 2014},
    {title: "Book Three", genre : "History", publish: 1996, edition : 2012},
    {title: "Book Four", genre : "science", publish: 1974, edition : 1989},
    {title: "Book Five", genre : "Non-friction", publish: 2005, edition : 2010},
    {title: "Book Six", genre : "science", publish: 1992, edition : 2018},
    {title: "Book Seven", genre : "Friction", publish: 2006, edition : 2010},
    {title: "Book Eight", genre : "History", publish: 1988, edition : 1999},
    {title: "Book Nine", genre : "science", publish: 1980, edition : 1986},
    {title: "Book Ten", genre : "Non-friction", publish: 2011, edition : 2016},
]

let userBooks = book.filter( (bk) => bk.genre === "History")

userBooks = book.filter((bk) => {
    return bk.publish >= 1995 
})
console.log(userBooks);



