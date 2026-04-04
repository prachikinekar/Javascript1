let divEL=document.createElement("div");
divEL.textContent="I am divone";
console.log(divEL);

let para1=document.createElement("p");
para1.textContent="I am para one";


let para2=document.createElement("p");
para2.textContent="I am para two";

let para3=document.createElement("p");
para3.textContent="I am para three";

document.body.appendChild(divEL);

divEL.append(para1,para2);// using append we can add more than 2 elements

divEL.prepend(para3);// add before para1,para2

// sequence for element adding

let h2El=document.createElement("h2");
h2El.textContent="I am h2";

let h3El=document.createElement("h3");
h2El.textContent="I am h3";

let getH1=document.getELementByTagName("h1");
console.log(getH1[0]);
getH1[0].before(h2El);
// getH1[0].after(h3El);





