// ADD ITEM
function newElement(){
    var ul = document.getElementById("myUL");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    // // CLEAR TEXT
document.getElementById("candidate").value='';
}




// // REMOVE ITEM

window.onclick = removeNewElement;
function removeNewElement() {
    var e = document.getElementById("myUL");
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }


// // class remove item
// let tasks = document.getElementsByClassName('.candidate');
// console.log(tasks); // // task
// tasks.map(node => {
//     node[i].addEventListener("click", function(event){
//     console.log(event);
//     tasks[0].remove();
// }
// )})