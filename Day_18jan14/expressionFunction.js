/*
2.function Expression (Anonymous function ):No Name

Syntax:

let/var/const varName=function(para1,para2 ,....){}

Here,
variableName--->variable
function(para1,para2){}--->variable value


variable phases:
declaration
Initialization

EC have 2 phases :>1.Memory creation  2.code execution

*/

//Function expression cant call before the function declaration,bcoz of var ,let,const

// console.log(funTwo);//ReferenceError: funTwo is not defined

// let funTwo=function(para1,para2){
//     console.log(para1,para2);
// }

// funTwo(1,1);//1 1

// console.log(funTwo);function[]


// var funTwo=function(para1,para2){
// console.log(para1,para2)
// }

// funTwo(1,1);//1 1

// function expression without return 
// if return is not present in BOC the default value are undefined

// let fun3=function(para1,para2){
//     console.log(para1+para2);
// }
// console.log(fun3(2,2));//undefined---bcs it is not returning anything
// fun3(2,2);//4

// // function expression with return 
// // fucntion calling hold value of return 

// let fun4=function(para1,para2){
//     return para1+para2;
// }

// console.log(fun4(2,3));//5

// -- only  return will give output in this otherwise it will give undefined 