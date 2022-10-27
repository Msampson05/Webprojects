"use strict";
// Compound Interest Calculator

window.onload = init;

function init() {

// Calculate Button
    const Calculatebtn = document.getElementById("Calculatebtn");
    Calculatebtn.onclick = onCalculatebtnClicked;
}

function onCalculatebtnClicked(){

// Find HTML elements 
const DepositInputField = document.getElementById("DepositInputField");
const interestRate = document.getElementById("interestRate");
const YearsInputField = document.getElementById("YearsInputField");
    let depositInput = Number(DepositInputField.value);
    let interestInput = Number(interestRate.value)/1200;
    let numberOfTime = 12;
    let YearsInput = Number(YearsInputField.value);
    let compoundInterest = depositInput * (Math.pow((1 + (interestInput/numberOfTime)), (numberOfTime * YearsInput)));
     const CompoundInterestField = document.getElementById("CompoundInterestField");
     CompoundInterestField.value = compoundInterest
}

