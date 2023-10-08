// Initialize variables for the calculator
let numberA = 0;
let numberB = 0;
let result = 0;
let operator = null;

// Get references to HTML elements
const textAreaUpper = document.getElementById("screen-upper-text");
const textAreaLower = document.getElementById("screen-lower-text");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

// Add click event listeners to the Clear and Delete buttons
clearButton.addEventListener("click", clearButtonClicked);
deleteButton.addEventListener("click", deleteButtonClicked);

// Function to handle operator buttons (+, -, *, /)
function operatorSelected(op) {
  operator = op;
  numberA = parseFloat(textAreaLower.textContent);
  textAreaUpper.textContent = `${numberA} ${operator}`;
  textAreaLower.textContent = "";
}

// Function to evaluate the expression when "=" is pressed
function evaluation() {
  numberB = parseFloat(textAreaLower.textContent);
  textAreaUpper.textContent += ` ${numberB} =`;

  // Perform the calculation based on the selected operator
  switch (operator) {
    case "+":
      result = numberA + numberB;
      break;
    case "-":
      result = numberA - numberB;
      break;
    case "*":
      result = numberA * numberB;
      break;
    case "/":
      result = numberA / numberB;
      break;
  }

  // Display the result in the lower text area
  textAreaLower.textContent = result;

  // Reset for the next calculation
  operator = null;
}

// Function to handle the "Clear" button
function clearButtonClicked() {
  numberA = 0;
  numberB = 0;
  result = 0;
  operator = null;
  textAreaLower.textContent = "";
  textAreaUpper.textContent = "";
}

// Function to handle the "Delete" button
function deleteButtonClicked() {
  let lowerText = textAreaLower.textContent;
  if (lowerText.length > 0) {
    // Remove the last character from the lower text area
    textAreaLower.textContent = lowerText.slice(0, -1);
  }
}

// Add click event listener to each number button
document.querySelectorAll(".numberButton").forEach(button => {
  button.addEventListener("click", function () {
    const number = this.value;
    if (["+","-","*","/"].includes(number)) {
      operatorSelected(number);
    } else if (number === "=") {
      evaluation();
    } else {
      textAreaLower.textContent += number;
    }
  });
});



