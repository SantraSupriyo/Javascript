const name = "Supriyo"
const repoCount = 50

// console.log(name + repoCount);

console.log(`Helo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('supriyo santra')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "       esika"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/youtube"

console.log(url.replace('ou', '-'));
console.log(url.includes('tube'));

console.log(gameName.split(' '));
