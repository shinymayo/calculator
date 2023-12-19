// check that the page is loaded
window.addEventListener("DOMContentLoaded", function() {
    console.log("Everything is loaded");
})

// define variable you will work with
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const number = document.querySelectorAll(".number")
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const calcDisplay = document.querySelector(".display");
const prevOperand = document.querySelector(".previous-number");
const currOperand = document.querySelector(".current-number");

//function to clear
clear.addEventListener("click", function() {
    currOperand.textContent = currOperand.textContent.toString().slice(0, -1);
})

//function to reset


//to get numbers for 1st operand
number.forEach(function(button) {
    button.addEventListener("click", function() {
        currOperand.textContent += this.value;
        //should i do if function here to get the second number?
    })
})

// to get the operator 
for(oper of operator) {
    oper.addEventListener("click", function() {
        currOperand.textContent = this.value; 
    })
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