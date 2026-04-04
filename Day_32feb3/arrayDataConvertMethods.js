/**
 * Datatype conversion:
 * split/join-convert a string to array and back
 */

/**
 * split(splitter):
 */

console.log("JavaScript".split())//[ 'JavaScript' ]
let splitArr="JavaScript".split("")
// console.log(splitArr);[
//   'J', 'a', 'v', 'a',
//   'S', 'c', 'r', 'i',
//   'p', 't'
// ]
console.log(typeof splitArr);//object


// join(joiner):
// Action:Joining the array values by using joiner
// Return:String

// console.log(splitArr.join())//J,a,v,a,S,c,r,i,p,t
// console.log(splitArr.join(""))//Javascript
// console.log(typeof splitArr.join(""))//string



console.log("Javascript".split("").join())//string
