"use strict";
// Mortgage Calculator 

window.onload = init;
function init() {
    
 // Calculate Button 
 const Calculatetbtn = document.getElementById("Calculatetbtn");
 Calculatetbtn.onclick = onCalculatebtnClicked;
}
function onCalculatebtnClicked(){
    //Find HTML elements 
 
  const principalinputField = document.getElementById("principalinputField");
  const interestRateInputField= document.getElementById("interestRateInputField");
  const loanLengthInputField = document.getElementById("LoanLengthInputField");


  let interestInput= Number((interestRateInputField/100)/12);
  let loanLenthInput = Number(loanLengthInputField * 12);
  let principalInput = Number(principalinputField);
  let payment = (principalInput * interestInput)/(1-Math.pow(1+interestInput,-loanLenthInput));
 const  monthlyInputField= document.getElementById("MonthlyInputField");
 monthlyInputField.value = payment;

}
