addEventListener("load", (event) => {
    console.log("The page is 100% loaded");
});
// to update calculator's display
const display = document.querySelector(".display"); 
//selecting buttons
const firstNumber = document.querySelectorAll(".number");// a
firstNumber.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(this.value, "first num");
        display.textContent = this.value;
        stopPropagation();
    })
})
 
// not working as intended... 
const secondNumber = document.querySelectorAll(".number"); // b
secondNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.value, "second num");
  });
});

const operator = document.querySelectorAll(".operator"); // operator
for(i of operator) {
    i.addEventListener("click", function() {
        console.log(this.value);
        display.textContent = this.value;
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
// depending on the key pressed, one of the math functions will be called

}