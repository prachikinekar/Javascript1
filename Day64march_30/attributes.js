console.log(document);

let h1=document.getElementsByTagName("h1")[0];
console.log(h1);

// getAttribute
// let classVal=h1.getAttribute("class");
// console.log(classVal);//red background


// //setAttribute
// h1.setAttribute("id","MyValue");
// console.log(h1);

// //removeAttribute
// h1.removeAttribute("class");
// console.log(h1);

// // hasAttribute
// let classAttrCheck=h1.hasAttribute("class");
// console.log(classAttrCheck);//false

// let idAttrCheck=h1.hasAttribute("id");
// console.log(idAttrCheck);//true

let classVal=h1.getAttribute("class");
console.log(classVal);

h1.setAttribute("id","one");
console.log(h1);

h1.removeAttribute("class");
console.log(h1);

let checkatr=h1.hasAttribute("id");
console.log(checkatr);





