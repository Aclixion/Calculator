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

// Display solution on answer display
function updateSolution() {
    if (solution === null) {
        solution = Number(currentNumber);
    } else {
        let result = operate(Number(solution), Number(currentNumber), currentOperation);
        if (isNaN(result)) {
            alert("CANNOT DIVIDE BY ZERO");
        } else {
            solution = result;
        }
    }
}

// Displays a number on the answer display
function updateDisplay(number) {
    answerDisplay.textContent = number;
}

oneBtn.addEventListener("click", () => {
    addDigit("1");
    updateDisplay(currentNumber);
});

twoBtn.addEventListener("click", () => {
    addDigit("2");
    updateDisplay(currentNumber);
});

threeBtn.addEventListener("click", () => {
    addDigit("3");
    updateDisplay(currentNumber);
});

fourBtn.addEventListener("click", () => {
    addDigit("4");
    updateDisplay(currentNumber);
});

fiveBtn.addEventListener("click", () => {
    addDigit("5");
    updateDisplay(currentNumber);
});

sixBtn.addEventListener("click", () => {
    addDigit("6");
    updateDisplay(currentNumber);
});

sevenBtn.addEventListener("click", () => {
    addDigit("7");
    updateDisplay(currentNumber);
});

eightBtn.addEventListener("click", () => {
    addDigit("8");
    updateDisplay(currentNumber);
});

nineBtn.addEventListener("click", () => {
    addDigit("9");
    updateDisplay(currentNumber);
});

zeroBtn.addEventListener("click", () => {
    addDigit("0");
    updateDisplay(currentNumber);
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