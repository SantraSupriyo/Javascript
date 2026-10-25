// ********* ARRAYS ********


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array()
console.log(myArr[1]);

// Array methods 

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(0)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

console.log(myArr);


// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
const myn2 = myArr.splice(1,3) // changed the original array

console.log(myn1);
console.log(myn2);










