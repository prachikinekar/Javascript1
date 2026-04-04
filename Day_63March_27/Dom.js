/*
- `innerHTML`
- `innerText`
- `textContent`
 */

let obj={
    a:10
}

// console.log(obj.a);
// obj.a=100;
// console.log(obj.a);

console.log(document);

// textContent
let para1=document.getElementsByTagName('p')[0];
console.log(para1.textContent);// Lorem ipsum dolor sit amet consectetur. I am Span.


console.log(para1.innerText);//Lorem ipsum dolor sit amet consectetur. I am Span.

console.log(para1.innerHTML);// Lorem ipsum dolor sit amet consectetur. <span>I am Span</span>.




