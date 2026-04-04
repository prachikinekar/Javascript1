/*
 reduce(function(acc,ele,..),initial)-
 Action:Calculate a single value over the array by calling function for each element and passing an intermediate result between the calls
 Return:single value (depends on function defination)
 */

 let arr=[1,2,3,4,5]

 let output=arr.reduce(function(preval,ele,ind,arr){
    // console.log(preval);//0
    return preval+ele;
 },0);
 console.log(output);//15



 let output2=arr.reduce(function(preval,ele,ind,arr){
return  preval+ ele
 },10);
 console.log(output2);//25

