let arr=[1,2];
console.log(arr.length);//2

// length
// let obj={
//     a:10,
//     b:true
// };
// console.log(obj.length);//undefined
// // Object.keys(obj);
// console.log(Object.keys(obj));//[ 'a', 'b' ]
// console.log(Object.keys(obj).length);//2

// function fun(){}
// function fun(a,b,c,d){
//     //
// }

// console.log(fun.length);//4


//Normal object limitation:
// 1.
let obj2={
    a:10,
    "b":20,
    //[1,2]:50
}

console.log(obj2);//{ a: 10, b: 20 }

// 2.
// Object not able to iterate with for-of 
// TypeError:obj2 is not iterable

// for(let val of obj2){
//     console.log(val);
// }

/*

Map Set--->Object

 */

function fun2(a,b,c,d,e){
// 
}
console.log(fun2.length);//5