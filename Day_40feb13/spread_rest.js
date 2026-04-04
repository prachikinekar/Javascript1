/* 

...
...ObjectName/variableName--->spread/rest

spread--->separate the values
input:string,array,object
output:depends on the seperate value

rest --> combine the values
input: any random entities
output: array/object


ES6 feature
 */

let arr=[1,2,3,"Js"];
console.log(arr);//[ 1, 2, 3, 'Js' ]
console.table(arr);
//  (index)  │ Values │
// ├─────────┼────────┤
// │ 0       │ 1      │
// │ 1       │ 2      │
// │ 2       │ 3      │
// │ 3       │ 'Js'   │
// └─────────┴────────┘


//spread:
// console.log(...arr);//1 2 3 Js


// 

/* 
[ 1, 2, 3, 'Js' ]
1 2 3 Js
 */


// Examples
let arr5=[1,4,5,67,"hello"];
console.log(...arr5);//1 4 5 67 hello

let a=[10,20];
let b=[30,40,...a,50,60];
console.log(b);//[ 30, 40, 10, 20, 50, 60 ]

// Min in an array using Math.min()
let d = [1,2,3,-1];
console.log(Math.min(d)); //NaN

// Now using spread 
console.log(Math.min(...d));//-1


const o1 = { a: 1, b: 2 };
const o2 = { ...o1, b: 3, c: 4 };
console.log(o2);//{ a: 1, b: 3, c: 4 }
