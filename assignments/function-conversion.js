// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
myFunction = () => {console.log("Function was invoked!")};
myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
anotherFunction = (param) => param;
console.log(anotherFunction("Cheese!"));


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
add = (param1, param2) => param1 + param2;
console.log(add(17, 34));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
subtract = (param1, param2) => param1 - param2;
console.log(subtract(34, 17));



// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
triple = exampleArray.map(num => num * 3)
console.log(triple)



// Callbacks are (very simply put) functions that are invoked by another function. EXAMPLE!

function funstuff(string, callback) {
    console.log(`I'm about to start ${string}, and then I will ${callback()}!`); 
}

funstuff("Sewing", function() {
    return "play more Sekiro"
});

// function 'funstuff' has a string and a function as parameters.
// When we inkoke it, we have to specify what the function is.
// In this case, the function is simply more words. Nothing complex.
// But we could do something more complex.
// Look into arrays.js for the STRETCH goals:
// Methods like 'map' and 'filter' use callback functions as arguments too.
// Those lines of code give more real world examples of callback functions.