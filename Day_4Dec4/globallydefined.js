// 2. Globally Defined Variables in JavaScript:

// Globally means anywhere in code
// in js everything is an object

// Object 

// Global Object --> Window object
// Window object is only accessible in browser environment
// In node js global object is called global     


/* 
Have global object nested structure like below:

{
      {
                let / const / var  a = "Hi";

                {     }
     }
}


*/


 
let obj = {a: 10}

console.log(obj.a); // 10

var varVariable="varVariable";
console.log(varVariable);//varVariable
console.log(window.varVariable);//ReferenceError: window is not defined

// variable declared with var keyword becomes property of window object
// that's why we are able to access varVariable using window.varVariable (Able to access in globally)

// let letvariable="letvariable";
// console.log(letvariable);
// console.log(window.letvariable);

// variable declared with let keyword does not become property of window object
// that's why we are not able to access letVariable using window.letVariable (Not able to access in globally)


// const constVar="constVar";
// console.log(constVar);
// console.log(window.constVar);

// variable declared with const keyword does not become property of window object
// that's why we are not able to access constVariable using window.constVariable (Not able to access in globally)

// var v1 = 10
// let v2;

// function print() {
//     console.log(v1);     
//     console.log(v2);   
// }
// print();

// console.log(window.write);   
// console.log(window.v1);     
// console.log(window.v2);  
// console.log(v1);        
// console.log(v2);

var v1=10
let v2;

function print(){
      console.log(v1);
      console.log(v2);
}
print();

// console.log(window.write);
console.log(window.v1);
// console.log(window.v2);
console.log(v1);
console.log(v2);