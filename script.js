addEventListener("load", (event) => {
    console.log("The page is 100% loaded");
});
const add = function(a,b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}
console.log(add(2,3));
console.log(subtract(6,1));
console.log(multiply(5,1));
console.log(divide(10,2));