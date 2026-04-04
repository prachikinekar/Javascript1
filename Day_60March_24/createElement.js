console.log(document);

let el=document.createElement("div");
console.log(el);

el.textContent="I am div";
console.log(el);

document.body.appendChild(el);
document.write("Hi i am writing...");

let div=document.getElementsByClassName("Three");

document.removeChild("h1");
console.log(document);