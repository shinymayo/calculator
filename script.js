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

numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        currentNumber += this.value; //current number this.value === this.textContent?
        currScreen.textContent = currentNumber; //current num is displayed
        console.log(previousNumber, currentNumber, operator);
        // if (button === "." && currScreen.includes(".")) return;
    })
});

actions.forEach((button) => {
    button.addEventListener("click", function() {
        operator = this.value; // operator is what i clicked
        previousNumber = currentNumber; //1st number changes variable
        currentNumber = ""; // current is empty
        prevScreen.textContent = previousNumber + operator; //1st number goes up with operator
        currScreen.textContent = currentNumber; //2nd number is current
    })
});

// dot can be pressed only once
// equal executes the operate() function.

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