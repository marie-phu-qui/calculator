let screenDisplay ="";
let temp = "";
let calculation = "";

function clickNum(i){ 
    checkForNewCalculation();
    checkNumberSize();
    checkNumberDecimal(i);
    displayNum(i);
    }

function displayNum(i){
    document.getElementById("screen").value += i ;
    temp += i;
    }

function checkNumberSize(){
    screenDisplay = document.getElementById("screen").value;
    if(screenDisplay.length>15){
        stop();
    }
}

function checkNumberDecimal(i){
    screenDisplay = document.getElementById("screen").value;
    if (i == "." && screenDisplay.includes(".")){
        stop();
    }
}

function checkForNewCalculation(){
    screenDisplay = document.getElementById("screen").value;
    if (document.getElementById("screen").classList.contains("result")){
        allClear();
        document.getElementById("screen").classList.remove("result");
    };
}

function clearScreen(){
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
}

function allClear(){
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
    temp ="";
}

function cancelLastEntry(){
    screenDisplay = document.getElementById("screen").value;
    if (screenDisplay == ""){
        temp = temp.slice(0, -1);
    }
    else {
        clearScreen();
        temp = temp.slice(0, -screenDisplay.length);
    }
}

function maths(i){
    screenDisplay =document.getElementById("screen");
    if (document.getElementById("screen").classList.contains("result")){
        temp = screenDisplay.value;
        screenDisplay.classList.remove("result");
    };
    clearScreen();
    temp += i;
    document.getElementById("operator-in-use").innerHTML = i;
}

function equal(){
    screenDisplay = document.getElementById("screen");
    temp = eval(temp);
    document.getElementById("screen").value = temp;
    screenDisplay.classList.add("result");
}
    
function stop(){
    screenDisplay = document.getElementById("screen");
    screenDisplay.classList.add("error");
    setTimeout(function(){
        screenDisplay.classList.remove("error");
    }, 1000);
}
