let screenDisplay = [];
let entries = [];
let temp = "";
let numOne = 0;
let numTwo = 0;

// make numOne the first number clicked before an operator class button
// make numTwo the number clicked after an operator button
// make the operation between the two equal temp
// make temp appear on screen
// make temp the new numOne 

function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    if(screenDisplay.length>16){
        stop();
    }
    else{
        document.getElementById("screen").value += i ;
    }
    };

function clearScreen(){
    numOne = document.getElementById("screen").value;
    screenDisplay = [];
    document.getElementById("screen").value = screenDisplay;

}

function add(){
    clearScreen();
    temp = Number(numOne) + Number(numTwo);
    console.log(temp);
}

function minus(){

}

function multiply(){

}

function divide(){

}

function modulo(){

}

function equal(){
    screenDisplay = document.getElementById("screen").value;
    screenDisplay = temp;
    numOne = temp;
    console.log(temp);
}
    
// can't go further sound
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("can't make this number longer");
    screenDisplay.style.backgroundColor="grey";
    screenDisplay.style.color="red";
}