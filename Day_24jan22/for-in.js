/*
for-in loop
syntax:

for(variable in object){
code block to be executed--->key/index
}

object:array,object

for-in--->key/index retriving

 */

let arr=["apple","banana","grapes"];
//         0        1        2  


console.log(arr.length);

for(let index in arr){
    // console.log(index);// 0 1 2
    console.log(arr[index]);// apple ,banana ,grapes
}


// for of loop
// of---->values

for(let value of arr){
    console.log(value);// apple ,banana,grapes
    
}
