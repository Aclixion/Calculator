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
    currentNumber += number;
    answerDisplay.textContent = numberString;
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
            return numberOne + numberTwo;
        case "/":
            if (numberTwo === 0) {
                alert("WARNING: CANNOT DIVIDE BY ZERO");
            } else {
                return numberOne / numberTwo;
            }
    }
}

oneBtn.addEventListener("click", () => {
    currentNumber += "1";
    answerDisplay.textContent = currentNumber;
});

twoBtn.addEventListener("click", () => {
    currentNumber += "2";
    answerDisplay.textContent = currentNumber;
});

threeBtn.addEventListener("click", () => {
    currentNumber += "3";
    answerDisplay.textContent = currentNumber;
});

fourBtn.addEventListener("click", () => {
    currentNumber += "4";
    answerDisplay.textContent = currentNumber;
});

fiveBtn.addEventListener("click", () => {
    currentNumber += "5";
    answerDisplay.textContent = currentNumber;
});

sixBtn.addEventListener("click", () => {
    currentNumber += "6";
    answerDisplay.textContent = currentNumber;
});

sevenBtn.addEventListener("click", () => {
    currentNumber += "7";
    answerDisplay.textContent = currentNumber;
});

eightBtn.addEventListener("click", () => {
    currentNumber += "8";
    answerDisplay.textContent = currentNumber;
});

nineBtn.addEventListener("click", () => {
    currentNumber += "9";
    answerDisplay.textContent = currentNumber;
});

zeroBtn.addEventListener("click", () => {
    currentNumber += "0";
    answerDisplay.textContent = currentNumber;
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