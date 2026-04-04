// copyWithin(copyPointIndex,copyStartIndex,copyEndIndex);
/*
copyPointIndex:Index where copied elements will be placed
copyStartIndex:Index to start copying from
copyEndIndex(optional):Index to stop copying (not included)

Does not change array length
 */

let arr=["Hi",0,1,3,5,true]
//            3,5

arr.copyWithin(1,3,5)// ["Hi", 3, 5, 1, 3, 5, true]
console.table(arr);//["Hi", 3, 5, 3, 5, true]

/*
 indexOf(value, index(startPoint)):
 Action : searching first occurance value index
 Return : number
 */


arr=[1,5,"Hi","Js","TS","Hi"];
//   0 1   2    3    4    5

// console.log(arr.indexOf(1));//0
// console.log(arr.indexOf("Hi"));//2
// console.log(arr.indexOf("Js"));//3
// console.log(arr.indexOf("TS"));//4

console.log(arr.indexOf("Hi",3));//5
console.log(arr.indexOf("Hi", arr.indexOf("Hi") + 1)) // 5


//  lastIndexOf(value, index(startPoint))
console.log(arr.lastIndexOf("Hi"));//5


// includes(value,index(startPoint))
console.log(arr.includes("Hi"))//true
console.log(arr.includes("Java"))//false

// true,false
console.log(arr.includes(5));//true
console.log(arr.includes(5,3));//false



