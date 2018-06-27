let screenDisplay ="";
let temp = "";
let entries = [];

function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    if (i== "." && screenDisplay.includes(".")){
        stop();
    }
    else if(screenDisplay.length>16){
        stop();
    }
    // if last button clicked is equal, clear former screenDisplay and then add number;
    else{
        document.getElementById("screen").value += i ;
        temp += i;
        entries += i;
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
    //if last char =NaN \".", erase last character;
    if (screenDisplay == ""){
        temp = temp.slice(0, -1);
    }
    // if last char of the string ="num", erase all after the last NaN\"." char of the string;
    else {
        let cancelledEntry = entries.pop();
        entries.toString = temp;
        clearScreen();
    }
    console.log(temp);
    //clearScreen();
}

function maths(i){
    clearScreen();
    temp += i;
    entries += i;
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
