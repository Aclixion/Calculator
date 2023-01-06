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

oneBtn.addEventListener("click", () => {
    answerDisplay.textContent += "1";
});

twoBtn.addEventListener("click", () => {
    answerDisplay.textContent += "2";
});

threeBtn.addEventListener("click", () => {
    answerDisplay.textContent += "3";
});

fourBtn.addEventListener("click", () => {
    answerDisplay.textContent += "4";
});

fiveBtn.addEventListener("click", () => {
    answerDisplay.textContent += "5";
});

sixBtn.addEventListener("click", () => {
    answerDisplay.textContent += "6";
});

sevenBtn.addEventListener("click", () => {
    answerDisplay.textContent += "7";
});

eightBtn.addEventListener("click", () => {
    answerDisplay.textContent += "8";
});

nineBtn.addEventListener("click", () => {
    answerDisplay.textContent += "9";
});

zeroBtn.addEventListener("click", () => {
    answerDisplay.textContent += "0";
});