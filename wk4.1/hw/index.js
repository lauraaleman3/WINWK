function calculateTip() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var serviceQual = document.getElementById("serviceQual").value;
    // var  = document.getElementById().value;
    // var bill = document.getElementById().value;
}
var total = (bill*party)/people; 
total = math.round(total*100)/100; 
document.getElementById("each").innerHTML = total;

document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };

  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };