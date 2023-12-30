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
const calcDisplay = document.getElementById("display");
let displayContent = "";
//Selecting the upper calculator display

//Function to update the lower display
function updateDisplay(value) {
  displayContent += value;
  calcDisplay.textContent = displayContent;
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

const secondTime = document.querySelectorAll(".number-button");

//Click Functionality for the Operator Buttons
const operatorButtons = document.querySelectorAll(".operator-button");
//Adding event listener to each button
operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    let operatorValue = operatorButton.getAttribute("data-value");
    updateDisplay(operatorValue);
  });
});

//Click functionality for the equal to button
const compute = document.getElementById("equals-to");
compute.addEventListener("click", function () {
  //Spliting the input string based on the oparator
  const numbers = displayContent.split(/\+|\-|\*|\//);

  //Extractng the operator
  const operator = displayContent.match(/\+|\-|\*|\//);
  // console.log(typeof operator);

  if (operator) {
    const firstNumber = parseFloat(numbers[0]);
    const secondNumber = parseFloat(numbers[1]);

    const ans = operate(...operator, firstNumber, secondNumber);

    calcDisplay.innerHTML = ans;
  }
});
