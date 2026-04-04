/*
array in js?
Non-primitive datatype in js ,which can hold multiple values(list) from diff datatypes on the index number.

list:
[value1, value2,....valuen]

*/

// let a=10;
// let obj={
//     key:value,
//     methodOne(){}

// }

// retrive object value:
// obj['key']

// //Syntax:literal
// // let array=[value1,val2,...]

// let arr=[10,10,12,1,2];
// //        0  1  2   3  4
// //       -5 -4  -3 -2  -1

// // array have -ve indexing

// // address:index number
// // always index start from 0 and -1 

// // CURD

// // Retrive/ get values
// // Dot, bracket
// // Array bracket notation can retrive values

// // console.table(arr);
// // console.log(arr[0]);//10
// // console.log(arr[-5]);//undefined
// // console.log(arr[3]);//1
// // console.log(arr[-2]);//undefined

// // In array -ve idexing will not work

// // //Update:
// arr[0]=30;
// console.log(arr);
// console.log(arr[0]);//30

// // // Delete:
// console.log("Length Before",arr.length);
// delete arr[3];
// console.table(arr);
// console.log("Length After",arr.length);

// console.log(arr[3]);//undefined
// // empty holes

// // array have default properties and methods:
// // length:property of array
// // Action:finding array length
// // return:Number

// // // Class

// let arr2=Array(5)
// console.log(arr2);// [ <5 empty items> ]
// console.log(arr2.length);//5

//Array.from()//Creates an array from an iterable object.
let arr3=Array.from([5,2,1,56,67]);
console.table(arr3);
console.table(arr3.length);//3


