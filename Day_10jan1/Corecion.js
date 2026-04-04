/*
+  : converting datatype in number

What is Corecion ?
Forcefully datatype conversion to perform operation.

Why is Corecion ?
Able to perform mathematical operations

Why converting in only number ?
To perform mathematical operations we required values from number datatype
 
*/

// let a=+"10";//string
// console.log(typeof a)//number

// let b=+"Hi"//string
// console.log(b,typeof b)//NaN,number


// examples:-------------------------------------

let a=+"10";
console.log(a,typeof a);//10 number

let b=+"Hi";
console.log(b,typeof b);//NaN number

let c=+true;
console.log(c,typeof c);//1 number

let d=+false;
console.log(d,typeof d );//0 number

let e=+"";
console.log(e,typeof e );//0 number

let f=+null;
console.log(f,typeof f);//0 number  

let g=+undefined;
console.log(g,typeof g);//NaN number

// | Value       | Result |
// | ----------- | ------ |
// | `"123"`     | `123`  |
// | `"abc"`     | `NaN`  |
// | `true`      | `1`    |
// | `false`     | `0`    |
// | `""`        | `0`    |
// | `null`      | `0`    |
// | `undefined` | `NaN`  |




