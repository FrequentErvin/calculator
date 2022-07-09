
let currentNumber = 0;
let firstNumber = "";
let secondNumber = "";
let currentOperation = "";
let wipeDisplayDown = false;
let Result = 0;
let justEvald = false;
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
    if(justEvald == true){
        displayUp.textContent = Result;
        displayDown.textContent = "";
        justEvald = false;
    }
    if(currentOperation == ""){
        displayUp.textContent = "";
    }
    if(wipeDisplayDown) wipeDisplayDown = false, displayDown.textContent = "";
    if(displayDown.textContent == "0"){
        displayDown.textContent = number;
    }else{
        displayDown.textContent += number;
    }
}
function setOperation(operator){
    displayUp.textContent += displayDown.textContent;
   if(currentOperation != "") evaluate();
   if(operator != "x^y"){
    if(justEvald) displayUp.textContent = Result;
    displayUp.textContent += operator;
    currentOperation = operator;
   }else{
    if(justEvald) displayUp.textContent = Result;
    displayUp.textContent += "^";
    currentOperation = "^";
   }
   firstNumber = displayDown.textContent;
   wipeDisplayDown = true;
   justEvald = false;
}
function AC(){
    displayUp.textContent = "";
    displayDown.textContent = "0";
    currentOperation = "";
}
function add(a,b){
    console.log(a);
    console.log(b);
    let c = a + b;
    console.log(a+b);
    return c;
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
    secondNumber = displayDown.textContent;
    displayDown.textContent = roundToThree(operate(currentOperation, firstNumber, secondNumber));
    displayUp.textContent = `${firstNumber} ${currentOperation} ${secondNumber} = `;
    currentOperation = ""; 
    Result = displayDown.textContent;
    justEvald = true;
}
function roundToThree(x){
    return Math.round(x*1000)/1000;
}
function addPoint(){
if(displayDown.textContent.includes(".")) return;
if(displayDown.textContent == "0") return;
displayDown.textContent += ".";
}
function deleteChar(){
    displayDown.textContent = displayDown.textContent.toString().slice(0,-1);
}
function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    let result = 0;
    console.log(result);
    switch(operator){
        case "+":
            result = +add(a,b);
            break;
        case "-":
            result = +subtract(a,b);
            break;
        case "*":
            result = +multiply(a,b);
            break;
        case "/":
            result = +divide(a,b);
            break;
        case "^":
            result = +power(a,b);
            break;
    }
    console.log(result);
    return result;
}