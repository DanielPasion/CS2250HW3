const display = document.getElementById("display");
const clear = document.getElementById("clear");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const divide = document.getElementById("/");
const multiply = document.getElementById("x");
const equal = document.getElementById("=");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");


let currentTotal = "";
let former = null;
let currentOperand = null;
let solution = null;
let lastInputOperand = false;


//Functions
function appendNumber(integer){
    display.innerHTML =  currentTotal + integer;
    currentTotal = currentTotal + integer;
    lastInputOperand = false;
}

plus.addEventListener('click', ()=>{

    if (lastInputOperand == true){
        alert("Error: operand was previously entered. Please select a digit or equals button to continue equation");
        return;
    }
    if (currentOperand == null){
    
        former = parseFloat(currentTotal);
        display.innerHTML = former + "+"
    }
    else{
        if (currentOperand == "+"){
            former = former + parseFloat(currentTotal);
            display.innerHTML = former + "+";
        }
        else if (currentOperand == "-"){
            former = former - parseFloat(currentTotal);
            display.innerHTML = former + "+";
        }
        else if (currentOperand == "/"){
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "+";
        }
        else{
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "+";
        }
    }

    lastInputOperand = true;
    currentTotal = "";
    currentOperand = "+";
});

minus.addEventListener('click', ()=>{
    
    if (lastInputOperand == true){
        alert("Error: operand was previously entered. Please select a digit or equals button to continue equation");
        return;
    }

    if (currentOperand == null){
        former = parseFloat(currentTotal);
        display.innerHTML = former + "-"
    }

    else{
        if (currentOperand == "+"){
            former = former + parseFloat(currentTotal);
            display.innerHTML = former + "-";
        }
        else if (currentOperand == "-"){
            former = former - parseFloat(currentTotal);
            display.innerHTML = former + "-";
        }
        else if (currentOperand == "/"){
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "-";
        }
        else{
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "-";
        }
    }

    lastInputOperand = true;
    currentTotal = "";
    currentOperand = "-";
});

multiply.addEventListener('click', ()=>{
 
    if (lastInputOperand == true){
        alert("Error: operand was previously entered. Please select a digit or equals button to continue equation");
        return;
    }

    if (currentOperand == null){
        former = parseFloat(currentTotal);
        display.innerHTML = former + "X"
    }

    else{
        if (currentOperand == "+"){
            former = former + parseFloat(currentTotal);
            display.innerHTML = former + "x";
        }
        else if (currentOperand == "-"){
            former = former - parseFloat(currentTotal);
            display.innerHTML = former + "x";
        }
        else if (currentOperand == "/"){
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "x";
        }
        else{
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "x";
        }
    }

    lastInputOperand = true;
    currentTotal = "";
    currentOperand = "x";
});

divide.addEventListener('click', ()=>{
 
    if (lastInputOperand == true){
        alert("Error: operand was previously entered. Please select a digit or equals button to continue equation");
        return;
    }

    if (currentOperand == null){
        former = parseFloat(currentTotal);
        display.innerHTML = former + "/";
    }

    else{
        if (currentOperand == "+"){
            former = former + parseFloat(currentTotal);
            display.innerHTML = former + "/";
        }
        else if (currentOperand == "-"){
            former = former - parseFloat(currentTotal);
            display.innerHTML = former + "/";
        }
        else if (currentOperand == "/"){
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "/";
        }
        else{
            former = former / parseFloat(currentTotal);
            display.innerHTML = former + "/";
        }
    }

    lastInputOperand = true;
    currentTotal = "";
    currentOperand = "/";
});


clear.addEventListener('click',()=>{
    display.innerHTML = "";
    former = null;
    currentTotal = "";
    currentOperand = null;

});

equal.addEventListener('click', ()=>{

    if (lastInputOperand == true){
        alert("Error: operand was previously entered. Please select a digit or equals button to continue equation");
        return;
    }

    if (currentOperand == "+"){
        solution = former + parseFloat(currentTotal);
        display.innerHTML = solution;
        former = solution;
        currentTotal = former;
        currentOperand = null;
        lastInputOperand = false;
    }
    else if (currentOperand == "-"){
        solution = former - parseFloat(currentTotal);
        display.innerHTML = solution;
        former = solution;
        currentTotal = former;
        currentOperand = null;
        lastInputOperand = false;
    }
    else if (currentOperand == "/"){
        solution = former / parseFloat(currentTotal);
        display.innerHTML = solution;
        former = solution;
        currentTotal = former;
        currentOperand = null;
        lastInputOperand = false;
    }
    else if(currentOperand == "x"){
        solution = former * parseFloat(currentTotal);
        display.innerHTML = solution;
        former = solution;
        currentTotal = former;
        currentOperand = null;
        lastInputOperand = false;
    }
    else{
        return;
    }

});


zero.addEventListener('click', function(){
    appendNumber("0");
});
one.addEventListener('click', function(){
    appendNumber("1");
});

two.addEventListener('click', function(){
    appendNumber("2");
});

three.addEventListener('click', function(){
    appendNumber("3");
});

four.addEventListener('click', function(){
    appendNumber("4");
});

five.addEventListener('click', function(){
    appendNumber("5");
});

six.addEventListener('click', function(){
    appendNumber("6");
});

seven.addEventListener('click', function(){
    appendNumber("7");
});

eight.addEventListener('click', function(){
    appendNumber("8");
});

nine.addEventListener('click', function(){
    appendNumber("9");
});