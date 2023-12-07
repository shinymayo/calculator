addEventListener("load", (event) => {
    console.log("The page is 100% loaded");
});

//selecting buttons
// const firstNumber = document.querySelector(""); // a
// const secondNumber = document.querySelector(""); // b
const operator = document.querySelectorAll(".operator"); // operator
for(i of operator) {
    i.addEventListener("click", function() {
        console.log(this.value);
    })
}

//basic math operations
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
// calculator function
function operate(a, b, operator) { //takes numbers and operator to call one of the math functions

}