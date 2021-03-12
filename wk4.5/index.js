// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some; //10
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum; //10
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

//   //

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5);

// //
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

// function printResults(someNumber){
//     return `this is a random number: ${someNumber}`;
// }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, printResults);

// //
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

// // 
// // definted & executed first
// console.log('1')

// setTimeout(function afterTwoSeconds() {
//   //defined second
//   //executed third
//   console.log('inside my callback function inside the functin being passed in: 2')
// }, 2000)

// // defined third and executed second
// console.log('3')

// Date is a JS keyword it's pulling from an existing object template and creating a new instance from that object template
// let d = new Date();
// console.log(d);

// //
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }



// // write a setTimeout function that executes another function after 5 secs
// The 2nd function should return the sum of 2 numbers
// setTimeout(function(){
//     console.log(4 + 5);
// }, 5000);

// setTimeout(function mySum(num1 = 6, num2 = 8){
//     console.log(num1 + num2)
// }, 5000);


// //.........Asynchronous callback functions.........
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 



//........GROUP WORK........
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "index.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 


function ajaxCall() {
    let ajaxRequest = new XMLHttpRequest();
  
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
        if (ajaxRequest.status == 200) {
          let myDiv = document.getElementById('main');
          let newDiv = document.createElement('div');
          newDiv.innerHTML = ajaxRequest.responseText;
          myDiv.appendChild(newDiv);
        }
        else if (ajaxRequest.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    };
  
    ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
    ajaxRequest.send();
  }

// // victor work
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
    req.onload = function() {
      if (req.status == 200) {
        console.log(this.responseText);
        var parseD = JSON.parse(this.responseText); 
        console.log(parseD);
        myCallback(parseD.title);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer); 