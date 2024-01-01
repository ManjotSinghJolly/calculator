let firstNumber = "";
let secondNumber = "";
let operatorValue = "";
let previousNumber = 0;
let upperDisplayString = "";
let ans;
let displayContent = "";
let result;

//Addition function
function add(num1, num2) {
  return num1 + num2;
}

//Subtraction function
function subtract(num1, num2) {
  return num1 - num2;
}

//Multiplication function
function multiply(num1, num2) {
  return num1 * num2;
}

//Division function
function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    alert("Please enter a valid operator.");
    return null;
  }
}

//Selecting the lower calculator display
const lowerDisplay = document.getElementById("lower-display");
const upperDisplay = document.getElementById("upper-display");

//Selecting the upper calculator display
function updateUpperDisplay() {}

//Function to update the lower display
function updateDisplay(value) {
  displayContent += value;

  lowerDisplay.textContent = displayContent;
}

// Click Functionality for the Number Buttons
let buttonValue;

const numberButtons = document.querySelectorAll(".number-button");
//Adding event listener to each button
numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    //Checking which button was clicked and storing the value in the variable
    buttonValue = numberButton.getAttribute("data-value");
    updateDisplay(buttonValue);
  });
});

//Click Functionality for the Operator Buttons
const operatorButtons = document.querySelectorAll(".operator-button");
//Adding event listener to each button
operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    operatorValue = operatorButton.getAttribute("data-value");
    // displayContent = "";

    if (ans && operatorValue) {
      firstNumber = ans;
      // ans = String(ans);
      ans = 0;
      displayContent = "";

      // console.log(firstNumber);
      // console.log(secondNumber);
      // console.log(ans);
      // console.log(typeof firstNumber);
      // console.log(typeof secondNumber);
      // console.log(typeof ans);
      // console.log("The displayContent is: " + displayContent);

      // ans = "";
      // secondNumber = 0;
      // ans = String(ans);
      // secondNumber = String(secondNumber);
      // secondNumber = "";

      // secondNumber = 0;
      // ans = 0;
      // lowerDisplay.textContent = "";
    } else {
      firstNumber = displayContent;
      // firstNumber = Number(firstNumber);
      displayContent = "";

      // firstNumber = Number(firstNumber) + previousNumber;
    }
    firstNumber = Number(firstNumber);
    upperDisplay.textContent = `${firstNumber} ${operatorValue}`;
    // console.log(firstNumber);
    // updateDisplay(operatorValue);
  });
});

//Click functionality for the equal to button
const compute = document.getElementById("equals-to");
compute.addEventListener("click", function () {
  secondNumber = displayContent;
  secondNumber = Number(secondNumber);
  upperDisplay.textContent = `${firstNumber} ${operatorValue} ${secondNumber} =`;
  ans = operate(operatorValue, firstNumber, secondNumber);

  lowerDisplay.textContent = ans;
  secondNumber = String(secondNumber);
  secondNumber = "";
});
