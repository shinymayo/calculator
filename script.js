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
let result = ""; // this is not tied to anything

// to get the current and previous numbers
numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.value === "." && currentNumber.includes(".")) return;
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
equal.addEventListener("click", function() {
    operate();
    prevScreen.textContent = "";
    currScreen.textContent = currentNumber; // this is the problem line
});
let finish;
//need to display it on the current screen
function operate(previousNumber, currentNumber, operator) {
    
    previousNumber = parseFloat(previousNumber); 
    currentNumber = parseFloat(currentNumber); 
    switch (operator) {
        case "+": parseFloat(finish) = add(previousNumber, currentNumber); 
        case "-": parseFloat(finish) = subtract(previousNumber, currentNumber);
        case "x": parseFloat(finish) = multiply(previousNumber, currentNumber);
        case "/": parseFloat(finish) = divide(previousNumber, currentNumber);
        case "%": parseFloat(finish) = percent(previousNumber, currentNumber);
    } //return the result
    currentNumber = finish;
    operator = undefined;
    previousNumber = "";
    console.log(parseFloat(finish)); // why its not a number????
    // previousNumber = previousNumber; // to string, even removed still get NaN
    // currentNumber = previousNumber; // to string
};

//basic math operations functions
const add = function (a, b) {
    let result = a + b;
    return result;
};

const subtract = function (a, b) {
    let result = a - b;
    return result;
};

const multiply = function (a, b) {
    let result = a * b;
    return result;
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
    prevScreen.textContent = ""; // same as making it equal to currentNumber
    currScreen.textContent = ""; // both options work
})
// additional functions for better user experience
function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}