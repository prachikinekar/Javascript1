/*
Splice(position,deletecount,.....items) 
Action:adding/replacing/deleting elements according to passed argument
Return:Array(removed element array)

slice(startIndex,endIndex(excluding)):
Action:Slicing /cuting array part accrding to passed index
Return:new sliced array
 
*/

// concat(...items) :
//          Action : Adding items in array(items: array, string, number, ...)
//          Return : new array

//          flat() :
//          Action : converting 2D array in 1D
//          Return : new array

//          reverse() :
//          Action : reversing array
//          Return : reversed array

//          CopyWithin(copyPointIndex, copyStartIndex, copyEndIndex):
//          Action : copying value within it in same length
//          Return : base updated array


// let arr=[1,5,"Hi",4,5]
//       0 1  2

// splice(pos,delete count,...items)

// arr.splice(2,0,"JS");
// arr.splice(3,0,"Ts");
// console.log(arr);//[ 1, 5, 'JS', 'Ts', 'Hi' ]

// slice(startindex,endindex(Excluding))
// console.log(arr.slice(1,2))//[5]
// console.log(arr.slice(1,3));//[ 5, 'Hi' ]
// console.log(arr.slice());//[ 1, 5, 'Hi', 4, 5 ]
// console.log(arr.slice(1));//[ 5, 'Hi', 4, 5 ]
// console.log(arr)//[ 1, 5, 'Hi', 4, 5 ]

// // concat(....items)
// let arr2=[1,2,3,4];
// let newArr=arr2.concat("Hii","Js");
// console.log(arr2);
// console.log(newArr);//[ 1, 2, 3, 4, 'Hii', 'Js' ]

// flat()
//2D array
// let arr2D=[1,2,[3,4],5,[6,7]]
// console.log(arr2D.flat())//[1, 2, 3, 4,5,6,7]
// console.table(arr2D);


// reverse()
// arr=[1,5,"Hi"]
// console.log(arr.reverse());//[ 'Hi', 5, 1 ]

// let revstr="str".split("").reverse().join("");
// console.log(revstr);//rts


// copyWithin(copyPointIndex,copyStartIndex,copyIndex);

/*
copyPointIndex:	Index where copied elements will be placed
copyStartIndex:	Index to start copying from
copyEndIndex (optional):  Index to stop copying (not included)

Does not change array length
 */

// arr = [1, 5, "Hi", "Js", "Ts"];
// console.log(arr.copyWithin(1,2,3));//[ 1, 'Hi', 'Hi', 'Js', 'Ts' ]
// console.log(arr.copyWithin(1, 2));//[ 1, 'Hi', 'Js', 'Ts', 'Ts' ]
// console.log(arr);//[ 1, 'Hi', 'Js', 'Ts', 'Ts' ]


/*
Search value:
at(index):
Action:value retrieve
Return:array value

indexOf(value,index(startpoint)):
Action:Searching first occurenece value index
Return:number

*/

// console.log(arr.at(0));//1


// arr = [1, 5, "Hi", "Js", "Ts","Hi"];

// console.log(arr.indexOf(5));//1
// console.log(arr.indexOf("Js"));//3
// console.log(arr.indexOf("Js"));//3
// console.log(arr.indexOf("Ts"));//4
// console.log(arr.indexOf("Hi"));//2





