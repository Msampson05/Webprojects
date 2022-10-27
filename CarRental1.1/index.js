"use strict";


window.onload = function() {
    let Estimateebtn = document.getElementById("Estimateebtn");
    Estimateebtn.onclick = EstimateebtnOnClick;
    // other events handlers connected here
   }
   function EstimateebtnOnClick() {
    console.log("EstimateebtnOnClick")
    const NumberDaysInputField = Number(document.getElementById("NumberDaysInputField").value);
    const tollTag = document.getElementById("tollTag").checked;
    const gps = document.getElementById("gps").checked;
    const roadside = document.getElementById("roadside").checked;
    const inputyes = document.getElementById("inputyes").checked;

    let rentalCar = Number(29.99)
    let Surcharge = Number(3/10)
    let OptionsTotal = 0;

  //
    if(tollTag) { 
        OptionsTotal += 3.95 * rentalCar;
    }
    if(gps) {
        OptionsTotal += 2.95 * rentalCar;
    }
    if(roadside) {
        OptionsTotal += 2.95 * rentalCar;
    }
    if (inputyes) {
        OptionsTotal += Surcharge;
    }


    let TotalCost = rentalCar + NumberDaysInputField + OptionsTotal;
    document.getElementById("EstimateOutputField").value = TotalCost.toFixed(2);

}
