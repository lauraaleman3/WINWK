//Grabs HTML elements
let btn = document.querySelector('#btn');
let ourNames = document.querySelector('#ourNames');

//Array of names
let names = ['Laura', 'Eyke', 'April', 'Echu', 'Jonathan'];

//Sorts the names array
function sortNames() {
  let sorted =  names.sort().join(', ');
  ourNames.innerHTML = sorted;
}

//sortNames as a Callback
btn.addEventListener('click', sortNames);