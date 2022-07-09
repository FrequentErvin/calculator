
let currentNumber = 0;
let firstNumber = "";
let secondNumber = "";
let currentOperation = "";

const displayUp = document.querySelector(".display-up");
const displayDown = document.querySelector(".display-down");
const numberButtons = document.querySelectorAll(".number");
const equalButton = document.getElementById("equals");
const ACButton = document.getElementById("AC");
const deleteButton = document.getElementById("DEL");
const dotButton = document.getElementById("dot")
const operationButtons = document.querySelectorAll(".operation");
equalButton.addEventListener("click", evaluate);
ACButton.addEventListener("click", AC);
deleteButton.addEventListener("click", deleteChar);
dotButton.addEventListener("click", addPoint);

displayUp.textContent = "";
displayDown.textContent = "0";
numberButtons.forEach((numberButton) => 
    numberButton.addEventListener("click", () => addToDisplay(numberButton.textContent))
);
operationButtons.forEach((operationButton) => 
    operationButton.addEventListener("click", () => setOperation(operationButton.textContent))
);
function addToDisplay(number){
    displayUp.textContent += number;
    displayDown.textContent = number;
}
function setOperation(operator){
   if(currentOperation != "") evaluate();
   currentOperation = operator;
   if(operator != "x^y"){
    displayUp.textContent += operator;
   }else{
    displayUp.textContent += "^";
   }

}
function AC(){
    displayUp.textContent = "";
    displayDown.textContent = "0";
    currentOperation = "";
}
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    if(b == 0) return "UNDEFINED";
    return a / b;
}
function power(a,b){
    if(a == 0 && b == 0) return "UNDEFINED";
    return a ** b;
}
function evaluate(){
    secondNumber = displayUp.textContent;
}
function addPoint(){

}
function deleteChar(){

}
function operate(operator,a,b){
    let result = 0;
    switch(operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        case "^":
            result = power(a,b);
            break;
    }
}