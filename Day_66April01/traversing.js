// {/* <div>I am div1</div>
//     <div id="parent">
//         I am div2
//         <p id="child1">Lorem ipsum dolor sit amet consectetur</p>
//         <h2 id="child1">Lorem ipsum dolor sit </h2>
//         <h2 id="child1">Lorem ipsum dolor sit </h2>
//     </div> */}

let parent=document.getElementById("parent");
console.log(parent);

let child2=document.getElementById("child2");
console.log(parent);

console.log(child2.parentElement);
console.log(child2.nextElementSibling);
console.log(child2.previousElementSibling)