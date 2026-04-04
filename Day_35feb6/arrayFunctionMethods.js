/*
flatMap(func)-flat()+Map()
Action:Iterate/operation on the each element(as per the function defination)
Return:New array

flat()--->2D--->1D
map()
flatMap=flat()+Map()
arr.flatMap()
 */

// let nestedArr=[1,[2,3],4,[5,6]]
// let flatArr=nestedArr.flat()

// nestedArr.map(function(ele,ind,arr){
//     console.log(ele);//1 [ 2, 3 ]
// // 4
// // [ 5, 6 ]
// });

// flatArr.map(function(ele,index,arr){
//     console.log(ele)
// })

// let output=flatArr.flatMap(function(ele,index,arr){
//     // console.log(ele)//[ undefined, undefined, undefined, undefined, undefined, undefined ]
//     return ele;
// })
// console.log(output);//[ 1, 2, 3, 4, 5, 6 ]


/*
sort(func)-
Action:array values arranging in alphabetical order
Return:Updated array
*/

let arr2=[8,3,5,1,0,4]
//        0 1 2 3 4 5
// length=ind+1
// length-1=lastindex

// console.log(arr2.sort())//[ 0, 1, 3, 4, 5, 8 ]

// Max no from arr
// console.log(arr2[arr2.length-1]);//8
// console.log(arr2[6]);//undefined

// // Min no from arr
// console.log(arr2[0]);//0


// Math methods:check

// arr2=["Js","Ts","JAVA","Py","CSS"]

// console.log(arr2.sort());//[ 'CSS', 'JAVA', 'Js', 'Py', 'Ts' ] 
// console.log(arr2);//[ 'CSS', 'JAVA', 'Js', 'Py', 'Ts' ]  

// // sort():string
// number-->1 digit working fine
// digit>1:Error output
arr2=[880, 301, 50, 18, 900, 14]

// console.log(arr2.sort())//[ 14, 18, 301, 50, 880, 900 ]
// console.log(arr2)//[ 14, 18, 301, 50, 880, 900 ]

arr2.sort(function(a,b){
//   console.log(b);//[ 880, 301, 50, 18, 900, 14 ]
    return b-a;
})
console.log(arr2);//[ 14, 18, 50, 301, 880, 900 ]
console.log//([ 900, 880, 301, 50, 18, 14 ])

/*
reduce(func(acc,ele...),initial)...
Action:calculates a single value over the array by calling function for each element and passing an intermediate result between the calls
Return:single value (depends on function defination)
 */

let arr3=[1,2,3,4,5,6,7,8,9,10]

// loop:length-1
// return:single value

let output3=arr3.reduce(function(prevalue,ele,ind,arr){
    // console.log(prevalue);//1 undefined,...,undefined
    // console.log(ele);//2,3,4,5,6,7,8,9,10
    // console.log(ind);//1,2,3,4,5,6,7,8,9
    // console.log(arr);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

});
// console.log(output3)//undefined

// with intial value:
let output4=arr3.reduce(function(prevval, ele,ind,arr){
    // console.log(prevval);//0 undefined....undefined
// console.log(ele);//1 2 3 4 5 6 7 8 9 10
// console.log(ind);//0,1,2,3,4,5,6,7,8,9
console.log(arr)//[1, 2, 3, 4,5,6, 7, 8, 9, 10]
},0);
console.log(output4);//undefined
