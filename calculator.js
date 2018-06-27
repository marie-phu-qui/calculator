let screenDisplay ="";
let temp = "";

function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    // To ADD OPTION if last button clicked is equal, clear former screenDisplay and then add number;
    if (document.getElementById("screen").classList.contains("result")){
        allClear();
        document.getElementById("screen").classList.remove("result");
    };
    if (i== "." && screenDisplay.includes(".")){
        stop();
    }
    else if(screenDisplay.length>16){
        stop();
    }
    else{
        document.getElementById("screen").value += i ;
        temp += i;
    }
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
        temp = temp.slice(0, -screenDisplay.length);
        clearScreen();
    }
    console.log(temp);
}

function maths(i){
    screenDisplay =document.getElementById("screen");
    if (document.getElementById("screen").classList.contains("result")){
        temp = screenDisplay.value;
        screenDisplay.classList.remove("result");
    };
    clearScreen();
    temp += i;
    console.log(temp); 
}


function equal(){
    screenDisplay = document.getElementById("screen");
    temp = eval(temp);
    document.getElementById("screen").value = temp;
    screenDisplay.classList.add("result");
    console.log(temp);
}
    
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("error");
    screenDisplay.classList.add("error");
    setTimeout(function(){
        screenDisplay.classList.remove("error");
    }, 1000);
}
