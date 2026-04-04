/*
filter(func)-
Action:filters elements through the functions
Return:new filtered array
 */

let arr=[1,2,3,4,5]

// let output=arr.filter(function(ele,index,arr){
// // console.log(ele);//1 2 3 4 5
// // return ele;////[ 1, 2, 3, 4, 5 ]
// // return ele>3;//[ 4, 5 ]

// })

let outputf=arr.filter(function(ele,index,arr){
    return ele%2==0;
})
console.log(outputf);



// let output2=arr.filter((ele,ind,arr)=>ele>4);
// console.group(output2);//[ 5 ]

// let output5=arr.filter((ele,ind,arr)=>arr);
// console.group(output5);//[ 1, 2, 3, 4, 5 ]
  
