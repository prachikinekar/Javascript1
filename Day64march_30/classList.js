console.log(document);

let h2=document.getElementsByTagName("h2")[0];
console.log(h2);

// Add class:

// setAttribute
h2.setAttribute("class","red");
console.log(h2);

// Not able to achieve classList
h2.setAttribute("class","background");
console.log(h2);