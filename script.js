// check that the page is loaded
window.addEventListener("DOMContentLoaded", function() {
    console.log("Everything is loaded");
})

// define variables to work with
const actions = document.querySelectorAll(".operator"); // operators
const equal = document.querySelector(".equal");
const decimal = document.querySelector("#decimal");
const numberButtons = document.querySelectorAll(".number")
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const calcDisplay = document.querySelector(".display");
const prevScreen = document.querySelector(".previous-number");
const currScreen = document.querySelector(".current-number");

let previousNumber = "";
let currentNumber = ""; 
let operator = "";
let result;
// to get the current and previous numbers
numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        currentNumber += this.value; //current number this.value === this.textContent?
        currScreen.textContent = currentNumber; //current num is displayed
    })
});
// to get the operator
actions.forEach((button) => {
    button.addEventListener("click", function() {
        operator = this.value; // operator is what i clicked
        previousNumber = currentNumber; //1st number changes variable
        currentNumber = ""; // current is empty
        prevScreen.textContent = previousNumber + operator; //1st number goes up with operator
        currScreen.textContent = currentNumber; //2nd number is current
    })
});
// make equal button functional
equal.addEventListener("click", operate(previousNumber, currentNumber, operator));
//need to display it on the current screen
function operate(previousNumber, currentNumber, operator) {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber)
    // switch (operator) {
    //     case "+": return add(previousNumber, currentNumber)
    //     case "-": return subtract(previousNumber, currentNumber)
    //     case "*": return multiply(previousNumber, currentNumber)
    //     case "/": return divide(previousNumber, currentNumber)
    //     case "%": return percent(previousNumber, currentNumber)
    //     default: return
    // }
    
    
};
//basic math operations functions
const add = function (a, b) {
    let result = a + b;
    return roundNumber(result);
};

const subtract = function (a, b) {
    let result = a - b;
    return roundNumber(result);
};

const multiply = function (a, b) {
    let result = a * b;
    return roundNumber(result);
};

const divide = function (a, b) {
    let result = a / b;
    return roundNumber(result);
};

const percent = function (a, b) {
    let result = (a / b) * 100;
    return roundNumber(result);
};

//function to delete
clear.addEventListener("click", function clearNumber() {
    currScreen.textContent = currScreen.textContent.toString().slice(0, -1);
})
//function to clear all
reset.addEventListener("click", function clearAll() {
    previousNumber = "";
    currentNumber = "";
    operator = "";
    prevScreen.textContent = currentNumber;
    currScreen.textContent = currentNumber;
})
function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}