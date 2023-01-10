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

// Solution for current expression
let solution = null;

// Current number being entered
let currentNumber = "";

// Current selected operation
let currentOperation;

// Adds a digit to current number
function addDigit(numberString) {
    currentNumber += numberString;
    answerDisplay.textContent = currentNumber;
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

// Update solution to current expression
function updateSolution() {
    if (solution === null) {
        solution = Number(currentNumber);
    } else {
        let result = operate(Number(solution), Number(currentNumber), currentOperation);
        if (result === NaN) {
            alert("CANNOT DIVIDE BY ZERO");
        } else {
            solution = result;
            answerDisplay.textContent = solution;
        }
    }
}

oneBtn.addEventListener("click", () => {
    addDigit("1");
});

twoBtn.addEventListener("click", () => {
    addDigit("2");
});

threeBtn.addEventListener("click", () => {
    addDigit("3");
});

fourBtn.addEventListener("click", () => {
    addDigit("4");
});

fiveBtn.addEventListener("click", () => {
    addDigit("5");
});

sixBtn.addEventListener("click", () => {
    addDigit("6");
});

sevenBtn.addEventListener("click", () => {
    addDigit("7");
});

eightBtn.addEventListener("click", () => {
    addDigit("8");
});

nineBtn.addEventListener("click", () => {
    addDigit("9");
});

zeroBtn.addEventListener("click", () => {
    addDigit("0");
});



plusBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        updateSolution();
    }
    currentNumber = "";
    currentOperation = "+";
});