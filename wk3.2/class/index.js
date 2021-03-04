// //Declare an add function
// function add(number1, number2) {
// 	return number1 + number2;
// }

// //Declare a function that takes a function as an argument
// function doMath(operation, number1, number2) {
// 	return operation(number1,number2);
// }

// //Pass a function into another.
// let sum = doMath(add, 1, 2);


// // .....FILTER.....
// let students = [
//     {name: 'John Lennon', average: 90},
//     {name: 'Ringo Starr', average: 58},
//     {name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
//     return student.average > 60;
// });

// console.log(passingStudents);
// passingStudents === [
//  {name: 'John Lennon', average: 90},
//  {name: 'Paul McCartney', average: 82}
// ];



// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// console.log(passingStudents);


// //............FIND.........
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.find(function(student){
// 	return student.average > 50;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90}
// ];


// // // ..........MAP FUNCTION.......
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]



// // ..........REDUCE...........
// let students = [
// 	{name: 'Cam Newton', assignmentsCompleted: 6},
// 	{name: 'Ted Ginn', assignmentsCompleted: 10},
// 	{name: 'Greg Olsen', assignmentsCompleted: 8}
// ]

// let totalAssignments = students.reduce(function(sum,current){
// 	return sum + current.assignmentsCompleted;
// }, 0);

// totalAssignments === 24;


// // ..........CHALLENGE 1 START........
// let superHeroes = [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"],
//     ["The Flash", "Barry Allen"]
//   ];

//   let secretIdentity = superHeroes.map(function(revealArray){
  
//   return revealArray.join(" is ");}
//   );
//   console.log(secretIdentity.join("\n"));
  // // ..........CHALLENGE 1 END........


  // //........JOIN EXAMPLE START.......
//   let food = ['burgers', 'salad', 'tomatoes', 'fries'];
// let newFood= food.join(" ");
// console.log(newFood);
  // //........JOIN EXAMPLE END.......

  // //.......... CALLBACK PATTERN START.....
//   setTimeout(function(){
// 	console.log('later')
// },2000);

// console.log('now');


// DO SOMETHING IF A BUTTON GETS CLICKED
// button.addEventListener('click', function(){
// 	alert('click');
// })

// // DO SOMETHING WHEN AN API REQUEST COMES BACK
// getData('/my-api/data', function(data) {
// 	console.log('got data', data)
// });

// //.......... CALLBACK PATTERN END.....

// //.........CLOSURE START...........
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Save this to a variable
// 		let self = this;
		
// 		//self is visible inside function because of closure
// 		setTimeout(function(){
// 			console.log('later my name is ' + self.name);
// 		},1000);
// 	}
// }

// teacher.speak();

// // /...........ASSIGNING CONTEXT........
// // call() and apply()

// call accepts the parameter as is
// apply accepts the parameters within an array; "A"pply = "A"rray
// let teacher = {name: 'Shane'};

// let speak = function(item1, item2){
// 	console.log(this.name, item1, item2);
// }

// speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'
// speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'

// // function.bind
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Bind a function to a specific context
// 		var boundFunction = function(){
// 			console.log('later my name is ' + this.name);
// 		}.bind(this);
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();

// // ARROW FUNCTIONS
// INSTEAD OF...
// let someFunc = function(...params) {
	//Some code here
// }
// // WE CAN DO ....
// let someFunc = (...params) => {
// 	//Some code here
// }
// // MORE ARROW FUNCTIONS
// // ARROW FUNCTIONS IMPLICITLY BIND THE CONTEXT TO THR FUNCTION
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Bind a function to a specific context
// 		var boundFunction = () => {
// 			console.log('later my name is ' + this.name);
// 		};
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();

//  If your arrow function is only a return statement, then you can omit brackets and the word return, as well.
// let students = [
//     { name: "Edwin"}, 
//     { name: "Kim"}, 
//     { name: "Skip"}
//   ];
  
//   let names = students.map((student) => student.name);
  
//   console.log(names);
//   // ["Edwin","Kim","Skip"]



// // // ..........CHALLENGE 4 from previous slides START..............
// let slideshow = {
//     photoList = ['photo0', 'photo1', 'photo2', 'photo3'],
//     currentPhotoIndex = 2,
//     nextPhoto: function()
// }

// //................Hajar example.......
// let arr=[1,2,3,4,5,6]


// let newarr=[]
// arr.forEach((item,index) => { newarr.push(item+index); })
// console.log(newarr)


// let evenArr=[]
// evenArr=arr.filter(item=> item%2==0)
// console.log("even numbers\n"+evenArr)


// let powarr=[]
// powarr=arr.map(function(item){return Math.pow(item,3)})
// console.log("to the power of 3 \n"+powarr)

// let sum=arr.reduce((total,item)=>total+item)
// console.log("The sum of the array items \n"+sum)


// // ..........MELLISSA'S EXAMPLE FOR REDUCE.........
const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]

const getMapFromArray = pokemon.reduce((newPobj, currPokemon) => {

  // add object key to our object i.e. charmander: { type: 'water' }
  newPobj[currPokemon.name] = { type: currPokemon.type };
  return newPobj;
}, {});

// If we call our method like so:
console.log(getMapFromArray);
/*
{
  charmander: { type: 'fire' },
  squirtle: { type: 'water' },
  bulbasaur: { type: 'grass' }
}
*/
