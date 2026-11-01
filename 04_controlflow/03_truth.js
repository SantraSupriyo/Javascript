const useremail = "hitesh@ai"

if(useremail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

// falsy values

//  false, 0 , -0, BigInt , 0n, "", Undefined, Nan, null

// truthy value

// "0", 'false', " ", [], {}, function (){}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Ternary operator

// condition ? true : flase

const icePrice = 100
icePrice <=80 ? console.log("less than 80") : console.log("more than 80");

 


