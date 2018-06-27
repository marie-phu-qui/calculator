let screenDisplay ="";
let temp = "";

function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    if (i== "." && screenDisplay.includes(".")){
        stop();
    }
    else if(screenDisplay.length>16){
        stop();
    }
    // To ADD OPTION if last button clicked is equal, clear former screenDisplay and then add number;
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
    clearScreen();
    temp += i;
    console.log(temp); 
}


function equal(){
    document.getElementById("screen").value = eval(temp);
    console.log(temp);
}
    
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("can't make this number longer");
    screenDisplay.classList.add("error");
    setTimeout(function(){
        screenDisplay.classList.remove("error");
    }, 1000);
}
