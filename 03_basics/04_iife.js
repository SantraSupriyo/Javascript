// Immediately Invoked Function Expression (IIFE)

(function one(){
    // named IIFE
    console.log(`DB connected`);
})();

( (name) => {
    // Un-named IIFE
    console.log(`DB Connected ${name}`);
})('hitesh');



