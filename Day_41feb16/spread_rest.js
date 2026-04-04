// /*
// ...
// ... objectName/variableName-->spread/rest
// spread --> separate the values
// input: string, array, object
// output: depends on the seperate value

// rest --> combine the values
// input: any random entities
// output: array/object

// ES6 feature

//  */

let arr=[1,2,3,"Js"];
// console.log(arr);//[1,2,3,"Js"]
// console.table(arr);
//  //┌─────────┬────────┐
// // │ (index) │ Values │
// // ├─────────┼────────┤
// // │ 0       │ 1      │
// // │ 1       │ 2      │
// // │ 2       │ 3      │
// // │ 3       │ 'Js'   │
// // └─────────┴────────┘

// //spread operator
// // ...[1,2,3,"Js"];
// console.log(...arr);//1 2 3 Js

// /* 
// [ 1, 2, 3, 'JS' ]

// 1 2 3 JS
// */

// // Can Combine

// // RHS:spread operator

// let arr2=["p","q",...arr];
// console.log(arr2);//[ 'p', 'q', 1, 2, 3, 'Js' ]

// // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// // Not able to use with obj:
// let obj={
//     a:"Js",
//     b:true
// }

// // Can Combine:

// // RHS:Spread Operator

// let arr3=["p","q",...arr];
// console.log(arr3);//[ 'p', 'q', 1, 2, 3, 'Js' ]


// let arr5=["p",...arr,"q"];
// console.log(arr5);//[ 'p', 1, 2, 3, 'Js', 'q' ]

// // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// // Not able to use with obj:

// let obj1={
// a:"JS",
// b:true
// }

// // Can Combine
// // RHS :  spread operator

// let obj2={
//     aa:"KJ",
//     bb:true,
//     ...obj1
// }



// // { a: 'JS', b: true } ???
// console.log(obj2);//{ aa: 'KJ', bb: true, a: 'JS', b: true }

// let obj3={
//     aa:"KJ",
//     ...obj1,
//     bb:true
   
// }
// console.log(obj3);//{ aa: 'KJ', a: 'JS', b: true, bb: true }


// // function:

// function fun(para1,para2,para3,para4){
//     console.log(para1,typeof para1);
//     console.log(para2,typeof para2);
//     console.log(para3,typeof para3);
     
// }

// // // function calling:
// fun(arr);//[ 1, 2, 3, 'JS' ] object
// fun(...arr);// fun (1, 2, 3, JS);

// spread operation


// /* 
// 1 number
// 2 number
// 3 number

// */

/*
rest-->combine the values
input:any random entities
output:array/object

 */

//rest operator
// function fun1(...para){
// console.log(c,typeof c);// [ 1, 2, 3, 'JS' ] object
// };

// fun1(arr);

// partial rest:
function fun(a,...para1){
    console.log(a,typeof a);//1 number
    console.log(para1,typeof para1);//[ 2, 3, 'Js' ] object
};

fun(1,2,3,"Js");

//use of rest: