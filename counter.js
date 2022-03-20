let countJS = document.getElementById("counter");
let savedJS = document.getElementById("saved");

let count=0;

function increment() 
{
  count+=1;
  countJS.innerText=count;
}

function save ()
{
  let countStr = count + " - ";
  savedJS.textContent +=countStr;
  countJS.innerText=0;
  count=0;
}

function refresh () {
  savedJS.textContent ="Previous entries-";
  countJS.innerText=0;
}
