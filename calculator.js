let screenDisplay = [];
let numOne = 0;
let numTwo = 0;

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
    let numOne =document.getElementById("screen").value;
    let screenDisplay = [];
    document.getElementById("screen").value = screenDisplay;

}

function add(){
    numOne + numOne;
}

function minus(){

}

function multiply(){

}

function divide(){

}

function modulo(){

}
    
// can't go further sound
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("can't make this number longer");
    screenDisplay.style.backgroundColor="grey";
    screenDisplay.style.color="red";
}