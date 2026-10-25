// **************** DATES ********


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate1 = new Date (2023,0,23) // yyyy/mm/dd - month start with 0(january)
console.log(myCreateDate1.toDateString());

let myCreateDate2 = new Date (2023,0,23, 5, 3) // yyyy/mm/dd/hour/min - month start with 0(january)
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date ("2023-01-14") // yyyy/mm/dd - month start with 0(january)
console.log(myCreateDate3.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate3.getTime());
console.log(Math.round(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {   // ctrl + spacebar
    weekday: "long",
    //timeZone: ""
})








