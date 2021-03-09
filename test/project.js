//Calculation
function calculateTip(){
var billtot = document.getElementById("billtotal").value;
var billtotal = Number(billtot);
console.log(billtotal);
var party = document.getElementById("party").value;
var servlvls = document.querySelector('input[name="servlvl"]:checked').value;

console.log(servlvls); 
var newValue = parseFloat(servlvls);





    // document.getElementById("servlvl").value = newValue; 
  
    console.log(newValue);  
// // Generate tip
var tip = billtotal * servlvls
document.getElementById('tipAmount').value = (tip.toFixed(2));
console.log(billtotal);
console.log(typeof billtotal);
console.log(tip);
console.log(typeof tip);
// //Generate Total per person
var totalTip= (billtotal + tip);
console.log(totalTip);
var perperson = totalTip/party;
document.getElementById('totalBillWithTip').value = (perperson.toFixed(2));
console.log(perperson);
}



//click to call function
// object.addEventListener("click", submit);


// document.getElementById("calculate").onclick = function() {
//   calculateTip();
// };


