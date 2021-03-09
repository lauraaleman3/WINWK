/* .... ABSTRACTION.......
ONLY NECESSARY DATA SHOWN TO USER

Example:
typing on a keyboard. Each key reflects the letter you want displayed on the computer.

...... ENCAPSULATION........
WRAPPING DATA AND FUNCTIONS TOGETHER

Example:
physical keys on the keyboard to protect the components underneath.

...... INHERITANCE........
AVOIDS DUPLICATING CODE, UTILIZES SUPERCLASSES AND SUBCLASSES

Example:
sections on the keyboard such as #pad,f controls, page function area, main section with letters.

........POLYMORPHISM........

*/



// //.....TASK 1......

// 1. a <p> with red text that says “Hey I’m red!”
var para = document.createElement("p");
var node = document.createTextNode("Hey I'm red!");
para.appendChild(node);

var element = document.getElementById("container");
element.appendChild(para);
para.style.color = "red";

// 2. an <h3> with blue text that says “I’m a blue h3!”
var header = document.createElement("h3");
var node = document.createTextNode("I'm a blue h3!");
header.appendChild(node);

var element = document.getElementById("container");
element.appendChild(header);
header.style.color = "blue";


// 3. a <div> with a black border and pink background color 
document.body.onload = addElement;
function addElement() {
    const newDiv = document.createElement("div");
   newDiv.style.backgroundColor = "pink";
   newDiv.style.border= "thick solid black";

    
// 4. another <h1> that says “I’m in a div”
var header1 = document.createElement("h1");
header1.innerHTML="I'm in a div";


var element = document.getElementById("container");
element.appendChild(header1);

newDiv.appendChild(header1);

// // 5. a <p> that says “ME TOO!”
var para2 = document.createElement("p");
para2.innerHTML="ME TOO!";

var element = document.getElementById("container");
element.appendChild(para2);

// adding whatever to div
newDiv.appendChild(para2);

// // Add to container
const currentDiv = document.getElementById("container");
    document.body.insertBefore(newDiv, currentDiv); 
}



// //.........TASK 2..........
// CONSTRUCTOR PROVIDED: 
// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
  
  // Write your code below here
      

  // one of the group's answer: 
  function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.perimeter;
    this.calcPerimeter = function(){
        this.perimeter = this.sides * this.sideLength;
        return this.perimeter;
    };
};
var square = new Shape("square", 4, 5);
var triangle = new Shape("triangle", 3, 5);
console.log(square);
console.log(triangle);

// //......MY ATTEMPT......
// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//     this.perimeter;
//     this.calcPerimeter = function({
//         this.perimeter = this.sides 
//     })
//   }