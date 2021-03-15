/* // promises are chained events that return something. Analogy would be pending charges from a bank account.//*/


// const myPromise = 
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// or, perhaps better ...

// const myPromise =
//   (new Promise(myExecutorFunc))
//   // // then methods are going to get passed the fulfilled value
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   // // catch will catch an error
//   .catch(handleRejectedAny);

// const myPromise = 
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// // or, perhaps better ...

// const myPromise =
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   .catch(handleRejectedAny);


// let response = await fetch(url);

// if (response.ok) { // if HTTP-status is 200-299
//   // get the response body
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

// // Hajar example
// const myPromise=new Promise((resolve,reject)=>{


//     let x="Just"
//     if(checkStutus)
//        resolve(x+" want")
//       else
//        reject("Error")


//  }).then((value)=>{
//      console.log( value+" to say,")
//      return value
//  }).then((value)=>{
//      console.log( value+" Good Morning!!!")
//      return value
//  }).catch((errorValue)=>{
//      console.log(errorValue)
//  })

fetch('https://javascript.info/article/promise-chaining/user.json')
  // Load it as json
  .then(response => {
    console.log('response from user api: '+ response);
      return response.json()
    })
  // Make a request to GitHub
  .then(user =>
      fetch(`https://api.github.com/users/${user.name}`)
  )
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
      console.log(githubUser);
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
}).catch(err => {console.log(response.status)});


// //......... Exercise 1 to Rewrite.......
{/* <script>
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500
</script> */}
// //........My Attempt........

async function loadJson(url)  {
    let response = await fetch(url);

    if (response.status == 200) {
        let user = await response.json(); 
        return json; 
    }
   
	
    throw new Error(response.status);
}
loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500 (4)
 
 

 



 

