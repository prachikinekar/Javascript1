/*
// object constructor methods:
Action:calling the required function/method (with its parameters) with required this value

1.call():functionName.call(thisValue,arg1,arg2,...);
Return :depends on function working

2.bind():functionName.bind(thisValue, arg1, arg2, ...);
Return:new function

3.apply():functionName.apply(thisvalue,[arg1,arg2,..]);
Return:depends on function working
 */

function funOne(a,b){
    console.log(a,typeof a);
    console.log(b,typeof b);
    console.log(this,typeof this);
    console.log(this.key);

}
// funOne(1,2);

/*
1 number
2 number
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]       
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]       
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
} object
undefined
*/


let obj1={
    key:"Hii Js"
}

let obj2={
    key:"Hii Js" 
}

// call ,bind,apply

// funOne.call(obj1);//undefined undefined
// undefined undefined     
// { key: 'Hii Js' } object
// Hii Js

// funOne.call(obj1,10,20);
/*10 number
20 number
{ key: 'Hii Js' } object
Hii Js
 */

// let fun=funOne.bind(obj1,10,20);
// fun();
/*10 number
20 number
{ key: 'Hii Js' } object
Hii Js
 */

// funOne.apply(obj1,10,20);
//TypeError: CreateListFromArrayLike called on non-object 

funOne.apply(obj1,[10,20]);

/*
10 number
20 number
{ key: 'Hii Js' } object
Hii Js
 */
