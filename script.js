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

// Adds a digit to current number
function addDigit(numberString) {
    currentNumber += numberString;
    answerDisplay.textContent = currentNumber;
}

// Clears current number
function resetCurrentNumber() {
    currentNumber = "";
}

function operate(numberOne, numberTwo, operation) {
    switch (operation) {
        case "+":
            return numberTwo + numberOne;
        case "-":
            return numberOne - numberTwo;
        case "*":
            return numberOne * numberTwo;
        case "/":
            if (numberTwo === 0) {
                alert("WARNING: CANNOT DIVIDE BY ZERO");
                return undefined;
            } else {
                return numberOne / numberTwo;
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
    if (solution === null) {
        solution = Number(currentNumber);
    } else {
        solution += Number(currentNumber);
    }

    answerDisplay.textContent = solution;
    currentNumber = "";
});

minusBtn.addEventListener("click", () => {
    if (solution === null) {
        solution = Number(currentNumber);
    } else {
        solution -= Number(currentNumber);
    }

    answerDisplay.textContent = solution;
    currentNumber = "";
})

multiplyBtn.addEventListener("click", () => {
    if (solution === null) {
        solution = Number(currentNumber);
    } else {
        solution *= Number(currentNumber);
    }

    answerDisplay.textContent = solution;
    currentNumber = "";
});

divideBtn.addEventListener("click", () => {
    if (currentNumber === "0") {
        alert("YOU CANT DIVIDE BY ZERO");
    } else {
        if (solution === null) {
            solution = Number(currentNumber);
        } else {
            solution /= Number(currentNumber);
        }
    
        answerDisplay.textContent = solution;
    }

    currentNumber = "";
})