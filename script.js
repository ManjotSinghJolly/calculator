let firstNumber = "";
let secondNumber = "";
let operatorValue = "";

let ans;
let displayContent = "";

let finalResult;
let decimalUsed = false;

let backspaceEnabled = true;

let operatorUsed = false;

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

//The main operate function
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

// Function for solving two variable string expression
function solveExpression(stringExpression) {
  let resultString;
  if (stringExpression[0] === "-") {
    const firstSpaceAfterNegative = stringExpression.indexOf(
      " ",
      stringExpression.indexOf("-")
    );

    let firstNumber = stringExpression.slice(
      stringExpression.indexOf("-") + 1,
      firstSpaceAfterNegative
    );
    let sign = stringExpression[firstSpaceAfterNegative + 1];

    let secondNumber = stringExpression.slice(firstSpaceAfterNegative + 3);
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    console.log(firstNumber);
    console.log(typeof firstNumber);
    console.log(secondNumber);
    console.log(typeof secondNumber);
    console.log(sign);
    console.log(typeof sign);

    if (sign === "+") {
      if (firstNumber > secondNumber) {
        resultString = firstNumber - secondNumber;
        resultString = String(resultString);
        resultString = "-" + resultString;
        resultString = Number(resultString);
      } else if (firstNumber < secondNumber) {
        resultString = secondNumber - firstNumber;
        resultString = Number(resultString);
      } else {
        resultString = firstNumber - secondNumber;
        resultString = Number(resultString);
      }
    } else if (sign === "-") {
      resultString = firstNumber + secondNumber;
      resultString = String(resultString);
      resultString = "-" + resultString;
      resultString = Number(resultString);
    } else if (sign == "*") {
      resultString = multiply(firstNumber, secondNumber);
      resultString = String(resultString);
      resultString = "-" + resultString;
      resultString = Number(resultString);
    } else {
      resultString = divide(firstNumber, secondNumber);
      resultString = String(resultString);
      resultString = "-" + resultString;
      resultString = Number(resultString);
    }

    return resultString;
  } else {
    const numbers = stringExpression.split(/\+|\-|\*|\//);
    const operator = stringExpression.match(/\+|\-|\*|\//);
    if (numbers.length == 2 && operator) {
      const num1 = parseFloat(numbers[0]);
      const num2 = parseFloat(numbers[1]);

      resultString = operate(...operator, num1, num2);
      resultString = Number(resultString);

      return resultString;
    } else {
      console.log("Invalid Input!");
    }
  }
}

//Selecting the lower calculator display
const lowerDisplay = document.getElementById("lower-display");
const upperDisplay = document.getElementById("upper-display");

//Function to update the lower display
function updateDisplay(value) {
  displayContent += value;

  lowerDisplay.textContent = displayContent;
}

// Click Functionality for the Number Buttons
let buttonValue;

document.addEventListener("DOMContentLoaded", function () {
  const lowerDisplay = document.getElementById("lower-display");

  if (lowerDisplay) {
    // Set initial focus on the lower display for keyboard interaction
    lowerDisplay.tabIndex = 0; // Ensure the element is focusable
    lowerDisplay.focus();

    lowerDisplay.style.outline = "none";

    // Enable click functionality for the number buttons
    const numberButtons = document.querySelectorAll(".number-button");
    numberButtons.forEach(function (numberButton) {
      numberButton.addEventListener("click", function () {
        const buttonValue = numberButton.getAttribute("data-value");
        updateDisplay(buttonValue);
        operatorUsed = false;
        lowerDisplay.focus(); // Ensure focus is on the display after clicking
      });
    });

    // Enable keyboard input for the lower display
    lowerDisplay.addEventListener("keydown", function (event) {
      const keyPressed = event.key;

      // Check if the pressed key is a number (0-9)
      if (/^[0-9]$/.test(keyPressed)) {
        // Update the display with the pressed number
        updateDisplay(keyPressed);
        operatorUsed = false;
      }
    });
  }
});

//Click Functionality for the Operator Buttons
const operatorButtons = document.querySelectorAll(".operator-button");
//Adding event listener to each button
operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    if (operatorUsed == false) {
      operatorValue = operatorButton.getAttribute("data-value");
      decimalUsed = false;

      lowerDisplay.focus();

      if (ans && operatorValue) {
        backspaceEnabled = true;
        firstNumber = ans;

        ans = 0;
        displayContent = "";
        console.log(typeof firstNumber);
        console.log(typeof secondNumber);
        console.log(typeof ans);
      } else if (
        (firstNumber && operatorValue) ||
        (firstNumber === 0 && operatorValue)
      ) {
        console.log(upperDisplay.textContent);
        console.log(displayContent);
        const expression = upperDisplay.textContent + " " + displayContent;
        console.log(expression);
        // console.log(
        //   "The type of the expression this time is: " + typeof expression
        // );
        finalResult = solveExpression(expression);
        // Rounding off the answer obtained on performing the operation
        finalResult = parseFloat(finalResult.toFixed(9));

        finalResult = String(finalResult);
        firstNumber = finalResult;
        displayContent = "";
        updateDisplay(firstNumber);
        upperDisplay.textContent = `${firstNumber} ${operatorValue}`;
        displayContent = "";

        console.log("the final result is: " + finalResult);
        console.log("the type of final result is: " + typeof finalResult);
      } else {
        firstNumber = displayContent;
        firstNumber = Number(firstNumber);
        console.log(typeof firstNumber);

        displayContent = "";

        // firstNumber = Number(firstNumber) + previousNumber;
      }
      // firstNumber = Number(firstNumber);
      upperDisplay.textContent = `${firstNumber} ${operatorValue}`;
      operatorUsed = true;
    }
    // console.log(firstNumber);
    // updateDisplay(operatorValue);
  });
});

// Keyboard functionality for the operator buttons
document.addEventListener("keydown", function (event) {
  if (event.key === "-" || event.key === "/") {
    operatorButtons.click();
  }
});

//Click functionality for the equal to button
const compute = document.getElementById("equals-to");
compute.addEventListener("click", function () {
  operatorUsed = false;

  decimalUsed = false;
  secondNumber = displayContent;
  secondNumber = Number(secondNumber);
  upperDisplay.textContent = `${firstNumber} ${operatorValue} ${secondNumber} =`;
  ans = operate(operatorValue, firstNumber, secondNumber);

  //Applying toFixed function to the obtained answer
  ans = parseFloat(ans.toFixed(9));
  console.log(typeof ans);

  lowerDisplay.textContent = ans;
  secondNumber = String(secondNumber);
  secondNumber = "";

  // Disabling the backspace button
  backspaceEnabled = false;
});

// Keyboard support for the equal to button
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    compute.click();
  }
});

// Click Functionality for the decimal-point
const decimal = document.getElementById("decimal-point");
decimal.addEventListener("click", function () {
  if (decimalUsed == false) {
    updateDisplay(".");
    decimalUsed = true;
  }
});

// Keyboard support for the decimal-point
document.addEventListener("keydown", function (event) {
  if (event.key === ".") {
    decimal.click();
  }
});

//Functionality for the AC button
const allClear = document.getElementById("all-clear");
allClear.addEventListener("click", function () {
  displayContent = "";
  firstNumber = "";
  console.log("The type of firstNumber now is: " + typeof firstNumber);
  secondNumber = "";
  operatorValue = "";
  ans = 0;
  finalResult = undefined;
  decimalUsed = false;
  lowerDisplay.textContent = "0";
  upperDisplay.textContent = "";
});

// Functionality for the Backspace button
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function () {
  if (backspaceEnabled) {
    stringLength = displayContent.length;
    if (stringLength > 0) {
      displayContent = displayContent.slice(0, stringLength - 1);
      lowerDisplay.textContent = displayContent;

      console.log("the displayLength at this instance is: " + stringLength);
      console.log("the displaySring at this instance is: " + displayContent);
    }
  }
});

//Keyboard functionality for the Backspace button
document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    backspace.click();
  }
});
