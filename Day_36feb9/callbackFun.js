/*
3 Types of functions

1.Function declaration
2.Function expression
3.Arrow
*/

// 1.declaration:

let arr=[1,2,3,4,5];

function fun(preval,ele,ind,arr){
    return preval+ele;
}
let output=arr.reduce(fun,10);
console.log(output);//25


// 2.Expression:
// let fun=function(preval,ele,ind,arr){
//     return  preval+ele
// };
// // output=arr.reduce(fun,10);

// let output2=arr.reduce(function(preval,ele,ind,arr){
//     return  preval+ele
// },30);

// console.log(output2);//45

let output9=arr.reduce(function(preval,ele,ind,arr){
    return preval+ele;

},30);
console.log(output9);


// // 3.Arrow function
// fun=(preval,ele,ind,arr)=>preval+ele;
// let output3=arr.reduce(fun,10);
// console.log(output3);//25



fun=(prevval,ele,ind,arr)=>prevval+ele;
let out6=arr.reduce(fun,20);
console.log(out6);//35