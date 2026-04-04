/*
 Functional Methods:-
 map(func)-
 Action:Iterate/operation on the each element(as per the  function defination)
 Return:New array

 flatMap(func)-flat()+map()
 Action:Iterate/operation on the each element (as per the function defination )
 Return:New aaray
  
 */

let arr = [1, 2, 3, 4, 5]
//        0   1  2  3  4

/*
To iterate over elements :
forEach(fun):
Action:Iterate/operation on the each element
Return:undefined

*/

// let output=arr.forEach(function(ele,ind,arr){
//     console.log(ele);//1 2 3 4 5
//     console.log(ind);// 0   1  2  3  4
//     console.log(arr);//[ 1, 2, 3, 4, 5 ]

// })
// console.log(output);//undefined

/*
map(func)-
Action:Iterate/operation on the each element(as per the function defination)
Return:New array
 */

// arr=[1,2,3,4,5]
// let output=arr.map(function(ele,ind,arr){
// // console.log(ele);//1,2,3,4,5
// // console.log(ind);//0 1 2 3 4
// // console.log(arr);//[ 1, 2, 3, 4, 5 ]
// // return ele;////[ 1, 2, 3, 4, 5 ]
// return ele*ind;//[ 0, 2, 6, 12, 20 ]
// })
// console.log(output);

// let ar1=[1,2,3,4,5,6];

// let outp=ar1.forEach(function(ele,ind,arr){
//     // console.log(ele);//1 2 3 4 5 6
//     console.log(ind);//0 1 2 3 4 5
//     console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
// })

// flat()--->2D -->1D
// map()
// flatMap=flat+Map()
// arr.flatMap()

let nestedArr=[1,[2,3],4,[5,6]]

nestedArr.map(function(ele,ind,arr){
    console.log(ele)//1 [2,3] 4 [5,6]
})

