<!-- //Define a function -->

// function saySomething(something) {
//     console.log(something);
// }

// function sumTwoDigits(digitOne, digitTwo){
//     return digitOne + digitTwo
// }

// // // to run function
// console.log(sumTwoDigits(8,2));

// function add(number1, number2) {
//     number1 + number2;
// }

// let sum = add(1,2);
// console.log(sum) // undefined


// function sumNumbers (numOne, numTwo, numThree){
//     return numOne + numTwo + numThree;
// }
// //  console.log(sumNumbers(4,6,));

// function add(a,b) {
// 	console.log(a,b)
// }

// add(1); // '1,undefined'
// add(1,2,3,4,5) // '1,2'

// function add(a=1,b=2) {
// 	console.log(a+b)
// }

// add(); // still prints 3

// function add() {
// 	let sum = 0;
// 	for(let i = 0; i < arguments.length; i++) {
// 	console.log('currently at loop # ' +i);
//         sum += arguments[i];
//     console.log(sum);
// 	}
// 	return sum;
// }
	
// add(1,2,3,4,5,6,7,8);


// function add(...rest) {
// 	let sum = 0;
// 	for(let i = 0; i < rest.length; i++) {
// 		sum += rest[i];
// 	}
// 	return sum;
// }
	
// add(1,2,3,4,5,6,7,8);


// my way

// let billAmount = 100;

// function gratuity() {
//     return(billAmount *0.2);
// }

// function totalWithGrat(amount){
//     return gratuity() + amount;
// }
// console.log(
//     `Your total, including gratuity is:\ $${totalWithGrat(billAmount)} `
// );

//her way

// let billAmount = 100;

// function gratuity() {
//     return(billAmount *0.2);
// }

// function totalWithGrat(amount){
//     return gratuity() + amount;
// }
// console.log(
//     `Your total, including gratuity is:\ $${totalWithGrat(billAmount).toFixed(2)} `
// );


// // ANONYMOUS FUNCTION

// let calculator = {
//     // key: add
//     // value: function
// 	add: function(a,b) {
// 		return a + b;
//     }  
// }

// console.log(calculator.add(2,3)); //5


// let arrayOfMystery = [
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ];

// console.log(arrayOfMystery[0][1]); // array
// console.log(arrayOfMystery[1].name); // anonymous object
// console.log(arrayOfMystery[2]()); // anonymous function!



//// ------------my attempt at challenge----------

// let hands = ['rock'. 'paper', 'scissors'];
//     function getComputerHand(){ 
//         return hands [parseInt(Math.random()*10) % 3]
//     }

// function compare(choice1, choice2){
// console.log("player1:" + choice1);
// console.log("player2:" + choice2);
// if (choice1 == choice2){
//     return "tie!";
// }

// if (choice1 == "rock"){
//     if (choice2 == "paper"){
//     return "player2 won!";
// }
// else{
// return "player1 won!"
// }
// }


		
    	
  
//   else if (choice1 == "paper"){
//   	if (choice2 == "scissors"){
//     	return "Player2 Won!";
//     }
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "scissors"){
//   	if (choice2 == "rock"){
//     	return "Player2 Won!"
//     }
//     else{
//     	return "Player1 Won!"
//     }
//   }
// }

// let choice1 = getComputerHand(); // computer's choice
// let choice2 = hands[2]; // our choice
// let game_result = compare(choice1, choice2); // get the result

// console.log(game_result); // log the result



// //-----------the solution--------------
// let hands = ['rock', 'paper', 'scissors'];
// // makes the computer return one of the options
// function getComputerHand(){ 
// 	return hands[parseInt(Math.random()*10) % 3]
// }


// // compares user's choice/hand
// function compare(choice1, choice2){ 
// 	console.log("Player1: " + choice1);
//   console.log("Player2: " + choice2);
  
//   if (choice1 == choice2){
// 		return "Tie!";
//   }
//   if (choice1 == "rock"){
// 		if (choice2 == "paper"){
//     	return "Player2 Won!";
// 		}
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "paper"){
//   	if (choice2 == "scissors"){
//     	return "Player2 Won!";
//     }
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "scissors"){
//   	if (choice2 == "rock"){
//     	return "Player2 Won!"
//     }
//     else{
//     	return "Player1 Won!"
//     }
//   }
// }

// let choice1 = getComputerHand(); // computer's choice
// let choice2 = hands[2]; // our choice
// let game_result = compare(choice1, choice2); // get the result

// console.log(game_result); // log the result

// function getGreeting(name) {
// 	let greeting = "hello ";
// 	return greeting + name;
// }
// console.log(getGreeting('Shane')); // 'Hello Shane'
// // console.log(greeting) //undefined


// (function(){
// 	let myVar = "look mom, private variables!";

// 	//Do some stuff with myVar...
// })();

// console.log(myVar); //undefined;



//// CITY IS A VARIABLE IN THE GLOBAL SCOPE
// let city = 'New Orleans';
// let greet = function() {
//     // USING A VARIABLE THAT WAS DEFINED OUTSIDE OF THIS FUNCTION'S SCOPE
//     // CLOSER CREATED WHEN A VARIABLE DEFINED OUTSIDE OF THIS SCOPE IS BEING USED WITHIN THIS SCOPE
// 	console.log('Hello ' + city);
// }

// greet(); // Hello New Orleans


// function outer() {
// 	let x = 'x';

//     // INNER SCOPE CREATED BY NESTING A FUNCTION INSIDE OF ANOTHER FUNCTION
// 	function inner() {

//         // CREATING A VARIABLE WITHIN THE INNER (NESTED) FUNCTION
// 		let y = 'y';

//         // BY USING X -- DEFINED IN OUR PARENT SCOPE-- WE ARE CREATING CLOSURE
// 		console.log(x); //'x'
// 	}
// inner();
    //OUTSIDE OF OUR INNER-MOST SCOPE BUT INSIDE OUT OUTER-SCOPE
// 	console.log(x); // 'x'
// 	console.log(y); // ReferenceError: y is not defined
// }





// let landscape = function() {
//     let result = "";
// // // FIRST NESTED FUNCTION -- NESTED SCOPE
//     let flat = function(size) {
//         for (let count = 0; count < size; count++)
//             result += " _ ";
//     };
// // // SECOND FUNCTION - 2ND NESTED SCOPE
//     let mountain = function(size) {
//         result += "/";
//         for (let count = 0; count < size; count++)
//             result += " '";
//         result += "\\";
//     };

//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());

// ---------challenge 3 (did not finish)----------
function outer(){ 
   let 
    variable1 = 'a'; 
    variable2 = {b};
    console.log(variable1);
    console.log(variabe2);
}


//     function inner() {
   
//     }
  
//     inner();
//     console.log(variable);
  
  
//   outer();



// //-------------THIS--------------

// let teacher = {
// 	name: 'Assaf',
// 	sayName: function() {
// 		console.log(this.name);
// 	}
// }
// teacher.sayName(); //'Assaf'




// function sayName() {
// 	console.log(this.name);
// }

// let teacher1 = {
// 	name: 'Assaf',
// 	speak: sayName
// }

// let teacher2 = {
// 	name: 'Shane',
// 	speak: sayName
// }

// teacher1.speak(); // 'Assaf'
// teacher2.speak(); // 'Shane'