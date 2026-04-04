/*
push(...items):
Action:items adding at the end of array
Return:new array length

pop():
Action:removing array last element
Return:poped Element

shift():
Action:Removing array first element
return:shifted out element


unshift(...items) :
Action : items adding at start of array
Return : new array length

splice(pos, deleteCount, ...items) 
Action : Adding/replacing/deleting elements according to passed arguments
Return : array (removed element array
 */


let arr=[1,2,"Hi"]

//push(...items)
// Action
// Return:Array new length


// function push (para){
//     // return-->
// }

// console.log(arr.push(true))//4 ,return array length
// console.log(arr.push(true,10));//6
// console.table(arr);

// // pop()

// // 
// // Return:Deleted value
// console.log(arr.pop())//10
// console.table(arr);

//   shift() 
//
// Return:Deleted value
// console.log(arr.shift());//1
// console.table(arr);

// // unshift(...items)
// console.log(arr.unshift(100))//
// console.table(arr);

// splice(pos,deletecount,....items)
// arr.splice(2,0,"JS");
// let arr=[1,2,"Hi"]
arr.splice(2,1,"JS");
console.table(arr);

