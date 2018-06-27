let screenDisplay ="";
let temp = "";
let entries = [];

function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    if(screenDisplay.length>16){
        stop();
    }
    // if last button clicked is equal, clear former screenDisplay and then add number;
    else{
        document.getElementById("screen").value += i ;
        temp += i;
        entries += i;
    }
    };

function clearScreen(){
    screenDisplay = "";
    screenDisplay = document.getElementById("screen").value;
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
    temp += i;
    entries += i;
    console.log(temp);
    $("operator").last(clicked).css( "background-color", "red" );
    clearScreen();
}


function equal(){
    document.getElementById("screen").value = eval(temp);
    console.log(temp);
}
    
// can't go further sound
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("can't make this number longer");
    screenDisplay.style.backgroundColor="grey";
    screenDisplay.style.color="red";
}