const display = document.getElementById("display");
const clear = document.getElementById("clear");
const one = document.getElementById("1")

currentTotal = "";


//Functions
function appendNumber(integer){
    display.innerHTML =  currentTotal + integer;
    currentTotal = currentTotal + integer;
    console.log("recieved");
}

one.addEventListener('click', function(){
    appendNumber("1");
});

