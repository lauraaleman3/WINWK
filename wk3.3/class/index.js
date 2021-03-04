//Get all inputs
// let inputs = document.getElementsByTagName('input');
// let inError = document.getElementsByClassName('error');

// console.log(inputs.length); //2
// console.log(inError.length); //1


// // .........QUERY SELECTOR..........
// Get all inputs
// let firstButton = document.querySelector('button');
// let inError = document.querySelectorAll('input.error');

// console.log(firstButton); //single button node
// console.log(inError); //Node list of inputs with class 'error'


// //.............TRAVERSING THE DOM AND USING THE CHILDREN PROPERTY......
// let listItems = document.querySelector('ul').children;
// console.log(listItems.length); //2

// //......nextElementSibling and PreviousElementSibling..
// let selectedItem = document.querySelector('li.selected');
// let first = selectedItem.previousElementSibling;
// console.log(first);
// let last = selectedItem.nextElementSibling;
// console.log(last);
// let list = selectedItem.parentElement;
// console.log(list);
// let header = selectedItem.parentElement.parentElement;
// console.log(header);
// let section = selectedItem.parentElement.parentElement.nextElementSibling;
// console.log(section);


// //...EXERCISE 1 Solution.....
//Laziness is your friend...
let q = document.querySelector.bind(document)
let qa = document.querySelectorAll.bind(document);


q('header');
qa('section');
q('section.current');
q('section.current').nextElementSibling;
q('section.current').previousElementSibling.children[0];
q('h2.highlight').parentElement.parentElement;

let foo = Array.from(qa('section h2'))
    .map(function(headline){
        return headline.parentElement;
    });
