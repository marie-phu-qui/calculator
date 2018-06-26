let screenDisplay ="";
let entries = [];
let temp = "";


// make numOne the first number clicked before an operator class button
// make numTwo the number clicked after an operator button
/*function defineNum(){
    if(button clicked has class num){
        make it be part of numOne;
    }
    else if(button clicked has class operator){
        add operator to the temp;
    }
}*/
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
        //entries.push(i);
        temp += i;

    }
    };

function clearScreen(){
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
}

function maths(i){
    temp += i;
    console.log(temp);

    clearScreen();
}


function equal(){
    document.getElementById("screen").value = eval(temp);
    console.log(eval(temp));
}
    
// can't go further sound
function stop(){
    screenDisplay = document.getElementById("screen");
    console.log("can't make this number longer");
    screenDisplay.style.backgroundColor="grey";
    screenDisplay.style.color="red";
}