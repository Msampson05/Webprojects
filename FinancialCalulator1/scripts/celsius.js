"use strict";
window.onload = init;
function init() {
    //Find HTML elements 

 const celsiusInputField = document.getElementById("celsiusInputField");
 const fahrenheitInputField = document.getElementById("fahrenheitInputField");

 // Convert Button 
 const CelsiusConvertbtn = document.getElementById("CelsiusConvertbtn");
 CelsiusConvertbtn.onclick = onCelsiusConvertbtnClicked;
}
function onCelsiusConvertbtnClicked (){
    const celsiusInputField = document.getElementById("celsiusInputField");
    let celsiusinput = Number(celsiusInputField.value);
    let answer = ((celsiusinput * 9/5) +32);
    const fahrenheitInputField = document.getElementById("fahrenheitInputField");
    fahrenheitInputField.value = answer


}
