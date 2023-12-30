//Addition function
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

// add(5, 5); //10

//Subtraction function
function subtract(num1, num2) {
  let diff = num1 - num2;
  console.log(diff);
}
// subtract(5, 5); //0

//Multiplication function
function multiply(num1, num2) {
  let prod = num1 * num2;
  console.log(prod);
}
// multiply(5, 5); //25

//Division function
function divide(num1, num2) {
  let ans = num1 / num2;
  console.log(ans);
}
// divide(5, 5); //1

// let firstNumber = prompt("Enter the first number: ");
// firstNumber = Number(firstNumber);
// let secondNumber = prompt("Enter the second number: ");
// secondNumber = Number(secondNumber);
// let operator = prompt("Enter your operator: ");

// function operate(operator, num1, num2) {
//   if (operator === "+") {
//     add(num1, num2);
//   } else if (operator === "-") {
//     subtract(num1, num2);
//   } else if (operator === "*") {
//     multiply(num1, num2);
//   } else if (operator === "/") {
//     divide(num1, num2);
//   } else {
//     alert("Please enter a valid operator.");
//   }
// }

// operate(operator, firstNumber, secondNumber);

//selecting the update display button
// const updateDisplay = document.getElementById("display-button");
// const calcDisplay = document.getElementById("display");
// updateDisplay.addEventListener("click", function () {
//   calcDisplay.innerHTML = "Display Updated!";
//   console.log("The update display button was clicked!");
// });

//Selecting the calculator display
const calcDisplay = document.getElementById("display");
// function updateDisplay() {
//   calcDisplay.innerHTML = "okay";
// }

function updateDisplay(value) {
  calcDisplay.append(value);
}

const numberButtons = document.querySelectorAll("button");
//Adding event listener to each button
numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    //Checking which button was clicked and storing the value in the variable
    var buttonValue = numberButton.getAttribute("data-value");
    updateDisplay(buttonValue);
  });
});
