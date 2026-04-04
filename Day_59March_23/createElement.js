console.log("Hi i am creating element file");
console.log(document);

// CURD

let h2El=document.createElement("h2");
console.log(h2El);// <h2></h2>
h2El.textContent="Hi a am H2";
console.log(h2El);//<h2>Hi a am H2</h2>

h2El.setAttribute("abc","pqr");

h2El.setAttribute("class","classval");
h2El.setAttribute("id","idVal");
console.log(h2El);


