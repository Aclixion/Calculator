// Number buttons
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");

// Operator buttons
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

// Answer display
const answerDisplay = document.querySelector(".answer-display");
answerDisplay.textContent = "0"; // Initialize answer display

// Solution for current expression
let solution = null;

// Current number being entered
let currentNumber = "";

// Current selected operation
let currentOperation;

// Adds a digit to current number
function addDigit(numberString) {
    currentNumber += numberString;
}

// Clears current number
function resetCurrentNumber() {
    currentNumber = "";
}

// Performs an arithmetic operation on two numbers
function operate(numberOne, numberTwo, operation) {
    switch (operation) {
        case "+":
            return numberOne + numberTwo;
        case "-":
            return numberOne - numberTwo;
        case "*":
            return numberOne * numberTwo;
        case "/":
            if (numberTwo === 0) {
                return NaN;
            } else {
                return numberOne / numberTwo;
            }
    }
}

// Displays a number on the answer display
function updateDisplay(number) {
    answerDisplay.textContent = number;
}

oneBtn.addEventListener("click", () => {
    addDigit("1");
    displayCurrentNumber();
});

twoBtn.addEventListener("click", () => {
    addDigit("2");
    displayCurrentNumber();
});

threeBtn.addEventListener("click", () => {
    addDigit("3");
    displayCurrentNumber();
});

fourBtn.addEventListener("click", () => {
    addDigit("4");
    displayCurrentNumber();
});

fiveBtn.addEventListener("click", () => {
    addDigit("5");
    displayCurrentNumber();
});

sixBtn.addEventListener("click", () => {
    addDigit("6");
    displayCurrentNumber();
});

sevenBtn.addEventListener("click", () => {
    addDigit("7");
    displayCurrentNumber();
});

eightBtn.addEventListener("click", () => {
    addDigit("8");
    displayCurrentNumber();
});

nineBtn.addEventListener("click", () => {
    addDigit("9");
    displayCurrentNumber();
});

zeroBtn.addEventListener("click", () => {
    addDigit("0");
    displayCurrentNumber();
});



plusBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        updateSolution();
    }
    currentNumber = "";
    currentOperation = "+";
});

minusBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        updateSolution();
    }
    currentNumber = "";
    currentOperation = "-";
});

multiplyBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        updateSolution();
    }
    currentNumber = "";
    currentOperation = "*";
});

divideBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        updateSolution();
    }
    currentNumber = "";
    currentOperation = "/";
});

clearBtn.addEventListener("click", () => {
    currentNumber = "";
    solution = null;
    currentOperation = null;
    answerDisplay.textContent = "0";
});

equalsBtn.addEventListener("click", () => {
    if (currentNumber && currentOperation) {
        updateSolution();
        currentNumber = "";
        currentOperation = null;
    }
});