let screenDisplay = [];


function displayNum(i){ 
    screenDisplay = document.getElementById("screen").value;
    if (screenDisplay.length>16){
        sound();
    }
    else {
        document.getElementById("screen").value += i ;
    }
    }
    
// honk can't go further sound
function sound(){
    console.log("can't make this number longer")
}