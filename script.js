// check that the page is loaded
window.addEventListener("DOMContentLoaded", function() {
    console.log("Everything is loaded");
})

// define variable you will work with
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector("#decimal");
const number = document.querySelectorAll(".number")
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const calcDisplay = document.querySelector(".display");
const prevOperand = document.querySelector(".previous-number");
const currOperand = document.querySelector(".current-number");

let previousNumber = "";
let currentNumber = "";
let operator = "";

//function to clear
clear.addEventListener("click", function() {
    currOperand.textContent = currOperand.textContent.toString().slice(0, -1);
})
//function to reset
reset.addEventListener("click", function() {
    previousNumber = "";
    currentNumber = "";
    operator = "";
    prevOperand.textContent = currentNumber;
    currOperand.textContent = currentNumber;
})

//to get numbers for 1st operand
number.forEach((button) => {
    button.addEventListener("click", function() {
            currOperand.textContent += this.value;
            currentNumber = currOperand.textContent;
    })
})

// to get the operator 
operators.forEach((button) => {
    button.addEventListener("click", function() {
        currOperand.textContent = this.value;
        handleOperator(button);
    })
})

 function handleOperator(button) {
    operator = button;
    previousNumber = currentNumber;
    currentNumber = "";
    prevOperand.append(previousNumber);

 }
// to get 2nd operator
//??

//basic math operations functions
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
// depending on the key pressed, one of the math functions will be called

}