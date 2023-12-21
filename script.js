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

let previousNumber = ""; //
let currentNumber = ""; // 
let operator = "";
let result = ""; // is this needed? result will display in the currOperand screen anyway

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
number.forEach((num) => {
    num.addEventListener("click", function() {
            currOperand.textContent += this.value;
            currentNumber = currOperand.textContent;
    })
})

// to get the operator 
operators.forEach((op) => {
    op.addEventListener("click", function() {
        currOperand.textContent = this.value;
        handleOperator(op);
    })
})
// get's the 2nd operand
function handleOperator(op) {
    operator = op.value;
    previousNumber = currentNumber;
    currentNumber = "";
    prevOperand.append(previousNumber);
    if (currentNumber !== "") {
        prevOperand.append(operator);
    }
}

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

const percent = function(a, b) {
    return b / a * 100;

}
// calculator function -- atm non functional
equal.addEventListener("click", function operate() {
    /// need to somehow display results on currOperand of screen
    prevOperand.textContent = "";
    currOperand.textContent = previousNumber;


    decimal.addEventListener("click", function() {
        addDecimal();// how to allow it to happen once? doesn't work as intended
    })
});
function operate(previousNumber, currentNumber, operator) {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    operator = operator;
    if (operator === "+") {
        currOperand.textContent = add(previousNumber, currentNumber);
    } else if (operator === "-") {
        currOperand.textContent = subtract(previousNumber, currentNumber);
    } else if (operator === "x") {
        currOperand.textContent = multiply(previousNumber, currentNumber);
    } else if (operator === "/") {
        if (currentNumber === "0" || previousNumber === "0") {
            currOperand.textContent = "error";
            currentNumber = "";
            previousNumber = "";
            operator = "";
            return;
        }
        currOperand.textContent = divide(previousNumber, currentNumber);
    } else if (operator === "%") {
        currOperand.textContent = percent(previousNumber, currentNumber);
    }

    console.log(previousNumber, currentNumber, operator);
}
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}
function addDecimal() {
    if(!currentNumber.includes(".")) {
        currentNumber += ".";
    }
}