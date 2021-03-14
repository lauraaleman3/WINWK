//Grabs HTML elements
let btn = document.querySelector('#btn');
let ourNames = document.querySelector('#ourNames');

//Array of names
let names = ['Laura', 'Eyke', 'April', 'Echu', 'Jonathan'];

//Function to sort the names array
function sortNames() {
  let sorted =  names.sort().join(', ');
  // // added <br /> twice for 2 breaks between names and greeting
  ourNames.innerHTML = `Sorted: <br /> <br /> ${sorted}`;
}


  // // Button to sort with Greeting
  btn.addEventListener('click', sortNames);

// //.........SHUFFLE NAMES STARTS.............

// // LINK SHUFFLE BUTTON
let shuffleBtn = document.querySelector('#shuffleBtn');

// //SHUFFLE FUNCTION
function shuffleArray() {
  let shufNames = [' Laura', ' Eyke', ' April', ' Echu', ' Jonathan'];
  for (let i = shufNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shufNames[i], shufNames[j]] = [shufNames[j], shufNames[i]];
  }
  document.getElementById("ourNames").innerHTML = `Shuffled: <br /> <br /> ${shufNames}`;
}



  // // Button to shuffle with Greeting
  shuffleBtn.addEventListener('click', shuffleArray);
function greetshuff() {
  document.getElementById("ourNames").innerHTML = `Shuffled: <br /> <br /> ${names}`;
}


