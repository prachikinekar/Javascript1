/*
#Js datatypes:

1.Primitive Data types(6):-immutable(cant update orginal value)
   1.String
   2.Boolean
   3.Undefined
   4.Null
   5.Number
   6.Bigint
   7.Symbol

2.Non Primitive data types:-mutable(can update original value)
   1.Object
   2.Array
   3.Function
   4.Regexp
 */

// primitive(immutable) : value can't modify
// Non primitive(mutable) : value can modify

// let a=10;
// console.log(a);
// // value cant modify

// let arr=[1,3,3];
// arr[1]=4;
// //value can be modify
// console.log(arr);

// /*1. Primitive Data types(6):- immutable(can't update original value)
//     1. string 
//  */

// // literal type:

// string-A String is a sequence of characters used to store text.

// "",'',``

// typeof:
// action:finding datatype
// return:string
// let str="javascript";

// console.log(typeof str)//string

// str="javascript";
// console.log(typeof str)//string

// str=`javascript`;
// console.log(typeof str)//string

// class:
let str2=String(true);
console.log(str2,typeof str2)// true string

let str3=String(false);
console.log(str3,typeof str3);//false string

// -------------------------
// Boolean --->true false

// literal

let flag=true;
console.log(flag,typeof flag);//true boolean

// class
flag=Boolean("");
console.log(flag,typeof flag);//false boolean

flag=Boolean(6);
console.log(flag,typeof flag);//true boolean

// 3.undefined:
// Undefined:absence of value
// datatype:undefined
// property of global object
// function:
// undefined

// console.log(undefined,typeof undefined);//undefined undefined

// 4.Null
// value:null ,datatype:object
// absence of value
// can return null

// console.log(null,typeof null);//null, object

// 5.Number:

// literal
let num=10;//+ve numbers,-ve ,0
console.log(num,typeof num);//10 number

// class

num=Number(100);
console.log(num,typeof num);//100 number

num=Number("hii");
console.log(num,typeof num);//NaN number

// 6.Bigint

console.log(99999999999999);
// 99999999999999

console.log(999999999999999999999);
// 1e+21

let bigNum=999999999999999n;
console.log(bigNum,typeof bigNum);//999999999999999n bigint












