let arr=[1,2,4,true,"Hi"];
let a="JS"

// isArray:
console.log(Array.isArray(arr))//true
console.log(Array.isArray(a))//false

// Array is an iterable
// for In
// for of

for(let i=0;i<4;i++){}

// for(let ind/val in/of arr){
// //index
//val

// }

// forEach()

// callBack

// function fun(){
// console.log("Hi")
// }

// // aa();//function calling

// arr.forEach(fun)
// callback---->fun

/*
forEach(func):
Acion:iterate/operation on the each element
Return:undefined
*/


let arrone=[1,2,4,true,"Hi"];
// arrone.forEach(function(ele,index,arr){
// //       /* 
// // //     ele: element/value
// // //     index: array index
// // //     arr: array
// // //     */
// console.log(ele);
// // console.log(index);
// // console.log(arr);

// })


function callBackFun(ele,index,arr){
    /*
     * ele:element/value
     * index:array index
     * arr:array
     
     */

    console.log(ele)
    console.log(index)
    console.log(arr)
}

arr.forEach(callBackFun)


