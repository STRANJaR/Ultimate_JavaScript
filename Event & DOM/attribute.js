// Attribute Method 
  let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);

// has attribute 

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// set attribute 
// console.log(first.setAttribute("hidden", "true")); 
console.log(first.setAttribute("class", "shrivastav rohit")); 

// remove attribute 
console.log(first.removeAttribute("class"));
console.log(first.attributes);

// Custom attribute   //in html [ data-rohit=" "]  // in Js [dataset] 
console.log(first.dataset); 
console.log(first.dataset.game); 
console.log(first.dataset.player); 
