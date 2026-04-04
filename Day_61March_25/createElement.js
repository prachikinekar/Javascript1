// <!-- <div>
//         <h2>I am in div</h2>
//         <h2>I am in div 2</h2>
//     </div> -->

let divEL=document.createElement("div");

let h1ELone=document.createElement("h1");
let h1ELtwo=document.createElement("h1");


h1ELone.textContent="I am one ";
h1ELtwo.textContent="I am two ";

divEL.appendChild(h1ELone);
divEL.appendChild(h1ELtwo);

document.body.appendChild(divEL);




