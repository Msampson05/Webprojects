"use strict";
window.onload = init;
function init() {
    //Find HTML elements 


 // Convert Button 
 const fahrenheitConvertbtn = document.getElementById("fahrenheitConvertbtn");
 fahrenheitConvertbtn.onclick = onfahrenheitConvertbtnClicked;
}
function onfahrenheitConvertbtnClicked(){
    const fahrenheitInputField = document.getElementById("fahrenheitInputField");
    let fahrenheitInput = Number(fahrenheitInputField.value);
    let answer = ((5/9) * (fahrenheitInput - 32));
    const celsiusInputField = document.getElementById("celsiusInputField");
    celsiusInputField.value = answer


}
