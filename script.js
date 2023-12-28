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

// to get the current and previous numbers
numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.value === "." && currentNumber.includes(".")) return;
        currentNumber += this.value; 
        currScreen.textContent = currentNumber;
    })
});
// to get the operator
actions.forEach((button) => {
    button.addEventListener("click", function() {
        if (currentNumber === "") return;
        if (previousNumber !== "") {
            operate();
        }
        operator = this.value; 
        previousNumber = currentNumber; 
        currentNumber = "";
        prevScreen.textContent = previousNumber + operator; 
        currScreen.textContent = currentNumber;
    })
});
// make equal button functional
equal.addEventListener("click", function() {
    operate();
    prevScreen.textContent = "";
    currScreen.textContent = currentNumber; // this is the problem line
    //from Web Dev Simplified function updateDisplay():
    //currScreen.textContent = currentNumber;
    //prevScreen.textContent = previousNumber;
});
//need to display it on the current screen
function operate() {
    let result;
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if (isNaN(previous) || isNaN(current)) return;
    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
      case "%":
        result = (previous / current) * 100;
        break;
      default:
        return;
    }
    currentNumber =result;
    operator = undefined;
    previousNumber = "";
};

//basic math operations functions
// additional functions for better user experience
function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

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