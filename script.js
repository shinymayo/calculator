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
let result = "";

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
// get's the 2nd operand
 function handleOperator(button) {
    operator = button;
    previousNumber = currentNumber;
    currentNumber = "";
    prevOperand.append(previousNumber);
    if(currentNumber == !"") {
        prevOperand.append(button);
    };

}

//basic math operations functions
const add = function(a,b) {
    result = a + b
    return result;
}

const subtract = function(a, b) {
    result = a - b
    return result;
}

const multiply = function(a, b) {
    result = a * b
    return result;
}

const divide = function(a, b) {
    result = a / b
    return result;
}
// calculator function -- atm non functional
equal.addEventListener("click", function operate() {
    currentNumber = result; /// need to somehow display results on currOperand of screen
});
function operate(previousNumber, currentNumber, operator) {
    switch (operator) {
        case "+": 
            add(previousNumber, currentNumber);
            break;
        case "-":
            subtract(previousNumber, currentNumber);
            break;
        case "*":
            mulptiply(previousNumber, currentNumber);
            break;
        case "/":
            divide(previousNumber, currentNumber);
            break;
    }
}