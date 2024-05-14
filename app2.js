let screen = document.getElementById("calculator-screen");
let screenValue = screen.textContent;

function inputDigit(digit){
    screenValue = screenValue ==='0'? digit : screenValue + digit;
 updateScreenDisplay();
}

function inputDecimal(){
    if (! screenValue.includes(".")){
        screenValue = screenValue + ".";
    }

    updateScreenDisplay();

}

function toggleSign(){
    screenValue = screenValue * -1;
    updateScreenDisplay();

}
function updateScreenDisplay() {
    screen.textContent = screenValue;
    
}