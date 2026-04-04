/*
find(func)-
Action:Filter element through the function ,return first value that make it return true
Return:array el
 */

let arr=[1,2,3,4,5,2];

// let output=arr.find((ele,ind,arr)=>{
//     // console.log(ele);
//     return  ele==2;
// });
// console.log(output);//2

/*
findIndex(func)-
Action:it is like find(),but returns the index instead of a value,where the condition match
Return :number
 */

let output2=arr.findIndex((ele,ind,arr)=>{
// console.log(ele);
// return ele==2;//1
});
// console.log(output2);
