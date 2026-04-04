/*
search string:
search(string/RegExp)
indexOf(string,index(StartPoint))
lastIndexOf(string,index(startPoint))
includes(substring,index(startPoint))
 */

// lastIndexof(string,index(startPoint))
// console.log("Javascript".lastIndexOf("a"));//3
// console.log("Javascripta".lastIndexOf("a"));//10

// includes(substring,index(startPoint))
// console.log("javascripta".includes("a"))//true
// console.log("Javascripta".includes("a",2))//true
// console.log("Javascripta".includes("a",4))//true
// console.log("Javascript".includes("ava"))//true


/*
Retrieve sub-string
slice(start,end(not included)) 
substring(start, end)
        substr(start, length)

 */

// slice(start,end(not included))

let str="Javascript";
// console.log(str.slice(0,3))//Jav
// console.log(str.slice(0,4))//Java
// console.log(str)//Javascript

// // substring(start,end)
// console.log(str.substring(0))//Javascript
// //endindex=9

// console.log(str.substring(0,4))//Java
// //Ind=>
// console.log(str)

// substr(startTransition,length)

console.log(str.substr(0,6))//javasc

/*

Datatype conversion
tostring()
split(splitPoint)

 */

let aa=10;
console.log(typeof aa);//number

// toString()
console.log(aa.toString())//10
console.log("str".toString())
console.log(typeof true.toString())//string

// split(splitPoint)
console.log("Javascript".split());//[ 'Javascript' ]
console.log("javascript".split(""));//[
//   'j', 'a', 'v', 'a',
//   's', 'c', 'r', 'i',
//   'p', 't'
// ]

console.log("JavaScript".split("S"));//[ 'Java', 'cript' ]

console.log("Hii JavaScript".split(" "));//[ 'Hii', 'JavaScript' ]



