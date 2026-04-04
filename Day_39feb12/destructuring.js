/*
Destructuring:breaking the structure
Es6 feature:let ,const ,arrow,function,destructuring
 */

//Primitive datatype:
// let a=10;
// console.log(a);
// 1 address,1 value

// Non primitive datatype
let arr=[1,2,3];
//       0 1 2---->default address

// 1 address ,multiple values
// multiple address,multiple values----->destructure

/* 
Syntax:

Array destructuring:

let/var/const [address1,address2,.....address_n]=[value1,value2,....,value_n];

 */

// let [a,b,c]=arr;
// // let [a,b,c]=[1,2,3];

// // console.log(a);//1
// // // console.log(b);//2
// // console.log(c);//3

// //Array holding its values on the position

// [a,c]=[1,2,3];

// console.log(a);//1
// console.log(c);//2

// [a,,c]=[1,2,3];
// console.log(a);//1
// console.log(c);//3

// [a,,b,d]=[1,2,3];
// console.log(a);//1
// console.log(b);//3
// console.log(d);//undefined


// Assign default value in destructuring
[a,,c,d=0]=[1,2,3];

console.log(a);//1
console.log(c);//3
console.log(d);//0

//Interview questions

// Input:
let p=10;
let q=20;

// Required output:
// p:20
// q:10

console.log("p:",p);//p: 10
console.log("q:",q);//q: 20


let arr3=[p,q];
[q,p]=arr3

console.log("p:",p);//p:20
console.log("q:",q);//q:10

/*
p : 20
q : 10
 */

// Can destructure any nested array value OR 2D array
let arr4=[1,2,[3,4],5];
let [s,t,[m,l],n]=arr4;

console.log(s);
console.log(t);
console.log(m);
console.log(l);
console.log(n);











