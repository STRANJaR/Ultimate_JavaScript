let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
// matches
console.log(id1.matches(".class"));
console.log(id1.matches(".box")); 

// closest 
console.log(sp1.closest(".box"));

// Contains 
console.log(id1.contains(sp1));  // true
console.log(id1.contains(id1));  // true
console.log(sp1.contains(id1));  // false

