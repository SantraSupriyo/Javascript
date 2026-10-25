const marvelHeros = ["ironman", "thor", "hulk"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const newHeros = marvelHeros.concat(dcHeros)
// console.log(newHeros);


// const allNewHeros = [...marvelHeros, ...dcHeros] // add multiple array
// console.log(allNewHeros);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

// const realArr = anotherArr.flat(Infinity)
// console.log(realArr);

console.log(Array.isArray("supriyo"));
console.log(Array.from("supriyo"));
console.log(Array.from({name : "hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


