// //variable declarations
    longt = document.getElementById("longt");
    lat = document.getElementById("latt");

// // Creating the async function
async function getRandomNumber() {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(Math.floor(Math.random() * 8)), 500)
  });
let result = await promise;
console.log(result);
}
getRandomNumber();

// Creating function for long and latt results

async function city(cityName) {
  let response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  .then((response) => response.json())
  .then((result) => {
      console.log(result.longt);
      console.log(result.latt);
      longt.innerHTML = result.longt;
      lat.innerHTML = result.latt;
  })
  .catch((error) => console.log("error", error));
}
/*// Outputs Houston longitude and lattitude in console and on page as:
 -95.39836
 29.77447   */
// city('houston');

/*// coordinates for Charlott:
 -80.80483
index.js:23 35.19317 */
// city('charlotte');

/*// coordinates for seattle:
-122.33279
index.js:23 47.62405 */
city('seattle');



















